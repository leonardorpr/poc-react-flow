import { Handle, Position } from 'reactflow'

import { CanvasConnectorHandle } from '../CanvasConnectorHandle'

import { CanvasInitialHandleProps } from './CanvasInitialHandle.types'
import { CanvasInitialHandleElement } from './CanvasInitialHandle.styles'

export function CanvasInitialHandle({ onClick }: CanvasInitialHandleProps) {
  return (
    <CanvasInitialHandleElement>
      <Handle type="source" position={Position.Right} />
      <Handle type="source" position={Position.Right} />
      <CanvasConnectorHandle color="grey" onClick={onClick} />
    </CanvasInitialHandleElement>
  )
}
