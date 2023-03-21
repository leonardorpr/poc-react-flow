import { Node, Edge } from 'reactflow'

export const initialNodes: Node[] = [
  {
    id: '1',
    position: { x: 200, y: 400 },
    data: {},
    type: 'square',
  },
  {
    id: '2',
    position: { x: 600, y: 400 },
    data: {},
    type: 'square',
  },
]

export const initialEdges: Edge[] = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    label: 'connect to',
  },
]
