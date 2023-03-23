import 'reactflow/dist/style.css'

import ReactFlow, { Background, ConnectionMode, Controls } from 'reactflow'

import { NODE_TYPES, EDGE_TYPES } from './Canvas.utils'
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
      nodeTypes={NODE_TYPES}
      edgeTypes={EDGE_TYPES}
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      connectionMode={ConnectionMode.Loose}
      defaultEdgeOptions={{
        type: 'simple',
      }}
    >
      <Controls />
      <Background color="transparent" />
    </ReactFlow>
  )
}
