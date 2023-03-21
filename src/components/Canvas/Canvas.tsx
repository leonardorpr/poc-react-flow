import 'reactflow/dist/style.css'

import ReactFlow, { Background, ConnectionMode, Controls } from 'reactflow'

import { CanvasProps } from './Canvas.types'

export function Canvas({
  nodes,
  edges,
  onNodesChange,
  onEdgesChange,
  onConnect,
}: CanvasProps) {
  return (
    <ReactFlow
      fitView
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      connectionMode={ConnectionMode.Loose}
      defaultEdgeOptions={{
        type: 'default',
      }}
    >
      <Controls />
      <Background gap={12} size={2} color="#c9c9c9" />
    </ReactFlow>
  )
}
