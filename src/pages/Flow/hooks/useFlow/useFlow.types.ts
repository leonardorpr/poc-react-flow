import { Edge, Node, OnNodesChange, OnEdgesChange, OnConnect } from 'reactflow'

type OnCreateNode = (id: string, xPos: number, yPos: number) => void

export interface Flow {
  nodes: Node[]
  edges: Edge[]
  handleCreateNode: OnCreateNode
  handleNodesChange: OnNodesChange
  handleEdgesChange: OnEdgesChange
  handleConnect: OnConnect
}
