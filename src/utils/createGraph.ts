import dagre from 'dagre'
import { Position } from 'reactflow'

import { apiResponseMock } from 'utils/mock'

function createIndexes(lastId = 0, elements = null) {
  let nodeId = lastId

  const data: any[] = elements || apiResponseMock.root
  const parsedData: any[] = []

  data.forEach((element) => {
    if (element.rule === 'cond') {
      let newNode = { ...element, nodeId }

      nodeId++

      const trueCondition = createIndexes(nodeId, element.true)
      // parsedData.push(...trueCondition.parsedData)

      const falseCondition = createIndexes(trueCondition.nodeId, element.false)
      // parsedData.push(...falseCondition.parsedData)

      newNode = {
        ...newNode,
        true: trueCondition.parsedData,
        false: falseCondition.parsedData,
      }

      parsedData.push(newNode)

      nodeId = falseCondition.nodeId
    }

    if (element.rule === 'provider') {
      parsedData.push({ ...element, nodeId: nodeId })

      nodeId++
    }
  })

  return { nodeId, parsedData }
}

function createNodes(data: any[], previousElement?: any) {
  const nodes: any[] = []

  data.forEach((element) => {
    const newNode = {
      id: element.nodeId.toString(),
      data: {
        rule: element.rule,
        previousElement,
      },
      type: 'simple',
    }

    nodes.push(newNode)

    if (element.rule == 'cond') {
      const trueFlow = createNodes(element.true, newNode)
      const falseFlow = createNodes(element.false, newNode)

      nodes.push(...trueFlow.nodes)
      nodes.push(...falseFlow.nodes)
    }
  })

  return {
    nodes,
  }
}

function createEdges(nodes: any[]) {
  const edges = nodes.map((node) => {
    if (!node.data.previousElement) {
      return {}
    }

    const source = node.data.previousElement?.id
    const target = node.id

    return {
      id: `e${source}-${target}`,
      target,
      source,
    }
  })

  return { edges: edges.filter((obj) => obj.id) }
}

export function createGraph() {
  const NODE_WIDTH = 300
  const NODE_HEIGHT = 100

  const graph = new dagre.graphlib.Graph()
  graph.setGraph({ rankdir: 'LR' })
  graph.setDefaultEdgeLabel(function () {
    return {}
  })

  const indexes = createIndexes()

  const { nodes } = createNodes(indexes.parsedData)
  const { edges } = createEdges(nodes)

  nodes.forEach((node) => {
    graph.setNode(node.id, { width: NODE_WIDTH, height: NODE_HEIGHT })
  })

  edges.forEach((edge) => {
    graph.setEdge(edge?.source, edge?.target)
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
