import { Handle, Position } from 'reactflow'

import { CanvasDefaultHandleProps } from './CanvasDefaultHandle.types'
import {
  CanvasDefaultHandleElement,
  CanvasDefaultHandleConnectContainer,
  CanvasDefaultHandleConnectDot,
  CanvasDefaultHandleConnectLine,
  CanvasDefaultHandleConnectButton,
} from './CanvasDefaultHandle.styles'

export function CanvasDefaultHandle({}: CanvasDefaultHandleProps) {
  return (
    <CanvasDefaultHandleElement>
      <Handle type="source" position={Position.Left} />

      <CanvasDefaultHandleConnectContainer>
        <CanvasDefaultHandleConnectDot />
        <CanvasDefaultHandleConnectLine />
        <CanvasDefaultHandleConnectButton
          onClick={() => console.log('clicked')}
        >
          +
        </CanvasDefaultHandleConnectButton>
      </CanvasDefaultHandleConnectContainer>

      <Handle type="target" position={Position.Right} />
    </CanvasDefaultHandleElement>
  )
}
