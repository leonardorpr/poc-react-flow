import { Node, Edge, OnNodesChange, OnEdgesChange, OnConnect } from 'reactflow'

export interface CanvasProps {
  nodes: Node[]
  edges: Edge[]
  onNodesChange: OnNodesChange
  onEdgesChange: OnEdgesChange
  onConnect: OnConnect
}
