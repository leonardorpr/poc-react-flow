import { create } from 'zustand'

import {
  Connection,
  EdgeChange,
  NodeChange,
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
} from 'reactflow'

import { Flow } from './useFlow.types'

//import { initialNodes, initialEdges } from './useFlow.utils'
import { createGraph } from 'utils/createGraph'

const { nodes, edges } = createGraph()

export const useFlow = create<Flow>((set, get) => ({
  nodes,
  edges,
  handleCreateNode: (id: string, xPos: number, yPos: number) => {
    const currentNodes = get().nodes
    const currentEdges = get().edges

    const newNodeId = `${currentNodes.length + 1}`

    const nodes = [
      ...currentNodes,
      {
        id: newNodeId,
        position: {
          x: xPos + 500,
          y: yPos,
        },
        data: {},
        type: 'simple',
      },
    ]

    const edges = [
      ...currentEdges,
      {
        id: `e${id}-${newNodeId}`,
        source: newNodeId,
        target: id,
      },
    ]

    set({
      nodes,
      edges,
    })
  },
  handleNodesChange: (changes: NodeChange[]) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    })
  },
  handleEdgesChange: (changes: EdgeChange[]) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    })
  },
  handleConnect: (connection: Connection) => {
    set({
      edges: addEdge(connection, get().edges),
    })
  },
}))
