import 'reactflow/dist/style.css'

import ReactFlow, { Background, ConnectionMode } from 'reactflow'

import { CanvasControls } from './components'
import { useCanvas } from './hooks'

import { NODE_TYPES, EDGE_TYPES } from './Canvas.utils'
import { CanvasProps } from './Canvas.types'

export function Canvas({
  nodes,
  edges,
  onNodesChange,
  onEdgesChange,
  onConnect,
}: CanvasProps) {
  const {
    isInteractive,
    handleToggleInteraction,
    handleZoomIn,
    handleZoomOut,
  } = useCanvas()

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
      elementsSelectable={isInteractive}
      nodesConnectable={isInteractive}
      nodesDraggable={isInteractive}
      defaultEdgeOptions={{
        type: 'simple',
      }}
    >
      <CanvasControls
        isInteractive={isInteractive}
        onToggleInteraction={handleToggleInteraction}
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
      />
      <Background color="transparent" />
    </ReactFlow>
  )
}
