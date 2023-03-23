import dagre from 'dagre'
import { Position } from 'reactflow'

import { apiResponseMock } from 'utils/mock'

function createNodes(
  elements?: [],
  positionStartsFrom: number = 0,
  lastId: number = 0,
  previousElement?: any,
) {
  const apiResponse: any[] = elements || apiResponseMock.root

  const nodes: any[] = []
  const edges: any[] = []

  let flowPosition = positionStartsFrom
  let nodeId = lastId

  apiResponse.forEach((element, index) => {
    const currentElement = index === 0 ? previousElement : element

    const newNode = {
      id: nodeId.toString(),
      data: {
        flowPosition: flowPosition,
        rule: element.rule,
        previousElement: { ...currentElement, id: (lastId + index).toString() },
      },
      type: 'simple',
    }

    nodes.push(newNode)

    nodeId++

    if (element.rule == 'cond') {
      const trueFlow = createNodes(
        element.true,
        flowPosition + 1,
        nodeId,
        newNode,
      )
      const falseFlow = createNodes(
        element.false,
        flowPosition + 1,
        trueFlow.lastId,
        newNode,
      )

      nodes.push(...trueFlow.nodes)
      nodes.push(...falseFlow.nodes)
      // edges.push(...trueFlow.edges)
      // edges.push(...falseFlow.edges)

      nodeId = falseFlow.lastId
      nodeId++
    }

    flowPosition++
  })

  return {
    nodes,
    lastId: nodeId,
  }
}

function createEdges(nodes: any[]) {
  const edges = nodes.map((node) => {
    const source = node.id
    const target = node.data.previousElement?.id || node.id

    return {
      id: `e${source}-${target}`,
      target,
      source,
    }
  })

  return { edges }
}

export function createGraph() {
  const NODE_WIDTH = 300
  const NODE_HEIGHT = 100

  const graph = new dagre.graphlib.Graph()
  graph.setGraph({ rankdir: 'LR' })
  graph.setDefaultEdgeLabel(function () {
    return {}
  })

  const { nodes } = createNodes()
  const { edges } = createEdges(nodes)

  nodes.forEach((node) => {
    graph.setNode(node.id, { width: NODE_WIDTH, height: NODE_HEIGHT })
  })

  edges.forEach((edge) => {
    graph.setEdge(edge?.target, edge?.source)
  })

  dagre.layout(graph)

  nodes.forEach((node) => {
    const nodeWithPosition = graph.node(node.id)

    node.targetPosition = Position.Left
    node.sourcePosition = Position.Right

    node.position = {
      x: nodeWithPosition.x - NODE_WIDTH / 2,
      y: nodeWithPosition.y - NODE_HEIGHT / 2,
    }

    return node
  })

  return { nodes, edges }
}
