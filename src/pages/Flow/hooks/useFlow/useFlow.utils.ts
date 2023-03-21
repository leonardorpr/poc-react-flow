import { Node, Edge } from 'reactflow'

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
]

export const initialEdges: Edge[] = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    label: '',
  },
]
