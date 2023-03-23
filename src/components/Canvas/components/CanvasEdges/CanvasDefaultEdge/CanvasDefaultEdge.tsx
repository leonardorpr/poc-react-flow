import { EdgeProps, getSmoothStepPath } from 'reactflow'

import { CanvasDefaultEdgeContainer } from './CanvasDefaultEdge.styles'

export function CanvasDefaultEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style,
  markerEnd,
}: EdgeProps) {
  const [edgePath] = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  })

  return (
    <CanvasDefaultEdgeContainer
      id={id}
      style={style}
      d={edgePath}
      markerEnd={markerEnd}
    />
  )
}
