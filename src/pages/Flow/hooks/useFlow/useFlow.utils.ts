import { Node, Edge } from 'reactflow'
import { apiResponseMock } from 'utils/mock'

export const initialNodes: Node[] = [
  {
    id: '1',
    position: { x: 200, y: 400 },
    data: {},
    type: 'initial',
  },
  {
    id: '2',
    position: { x: 600, y: 400 },
    data: {},
    type: 'simple',
  },
  {
    id: '3',
    position: { x: 600, y: 550 },
    data: {},
    type: 'simple',
  },
  {
    id: '4',
    position: { x: 1000, y: 550 },
    data: {},
    type: 'simple',
  },
]

export const initialEdges: Edge[] = [
  {
    id: 'e3-4',
    source: '4',
    target: '3',
  },
]

export function createFlow(
  elements?: [],
  positionStartsFrom: number = 0,
  lastId: number = 0,
  previousElement?: any,
  trueFlow?: boolean,
) {
  const apiResponse: any[] = elements || apiResponseMock.root

  const baseCardWidth = 300
  const baseCardHeight = 100

  const nodes: Node[] = []
  const edges: Edge[] = []

  let flowPosition = positionStartsFrom
  let nodeId = lastId

  apiResponse.forEach((element) => {
    const conditionsFrom =
      previousElement?.data?.conditionsFrom ?? howManyConditionsFrom(element)
    const previousY = previousElement?.position?.y ?? baseCardHeight
    const trueFlowY =
      previousY == 0 ? previousY - baseCardHeight : previousY - previousY * 2
    const newY = trueFlow ? trueFlowY : previousY + baseCardHeight

    const cardPositionOnScreen = {
      x: baseCardWidth * flowPosition,
      y: previousElement == null ? 0 : newY,
    }

    const newNode = {
      id: nodeId.toString(),
      position: cardPositionOnScreen,
      data: {
        flowPosition: flowPosition,
        rule: element.rule,
        conditionsFrom: howManyConditionsFrom(element),
        previousElement,
      },
      type: 'simple',
    }

    nodes.push(newNode)
    nodeId++

    if (element.rule == 'cond') {
      const trueFlow = createFlow(
        element.true,
        flowPosition + 1,
        nodeId,
        newNode,
        true,
      )
      const falseFlow = createFlow(
        element.false,
        flowPosition + 1,
        trueFlow.lastId,
        newNode,
      )

      nodes.push(...trueFlow.nodes)
      nodes.push(...falseFlow.nodes)

      nodeId = falseFlow.lastId
      nodeId++
    }

    flowPosition++
  })

  return {
    nodes,
    edges,
    lastId: nodeId,
  }
}

function howManyConditionsFrom(element: any) {
  let numberOfConditions = 0

  if (element.rule == 'cond') {
    numberOfConditions++

    numberOfConditions += howManyConditionsFromArray(element.true)
    numberOfConditions += howManyConditionsFromArray(element.false)
  }

  return numberOfConditions
}

function howManyConditionsFromArray(elements: any[]) {
  let numberOfConditions = 0

  elements.forEach((element) => {
    if (element.rule == 'cond') {
      numberOfConditions++

      numberOfConditions += howManyConditionsFromArray(element.true)
      numberOfConditions += howManyConditionsFromArray(element.false)
    }
  })

  return numberOfConditions
}
