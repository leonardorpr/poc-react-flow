import { Handle, Position } from 'reactflow'

import { CanvasConnectorHandle } from '../CanvasConnectorHandle'

import { CanvasDefaultHandleProps } from './CanvasDefaultHandle.types'
import { CanvasDefaultHandleElement } from './CanvasDefaultHandle.styles'

export function CanvasDefaultHandle({ onClick }: CanvasDefaultHandleProps) {
  return (
    <CanvasDefaultHandleElement>
      <Handle type="source" position={Position.Left} />
      <CanvasConnectorHandle onClick={onClick} />
      <Handle type="target" position={Position.Right} />
    </CanvasDefaultHandleElement>
  )
}
