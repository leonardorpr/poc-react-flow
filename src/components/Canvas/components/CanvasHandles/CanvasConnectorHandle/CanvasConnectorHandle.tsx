import { CanvasConnectorHandleProps } from './CanvasConnectorHandle.types'

import {
  CanvasConnectorHandleContainer,
  CanvasConnectorHandleLine,
  CanvasConnectorHandleDot,
  CanvasConnectorHandleButton,
} from './CanvasConnectorHandle.styles'

export function CanvasConnectorHandle({
  color = 'blue',
  onClick,
}: CanvasConnectorHandleProps) {
  return (
    <CanvasConnectorHandleContainer>
      <CanvasConnectorHandleDot color={color} />
      <CanvasConnectorHandleLine color={color} />
      <CanvasConnectorHandleButton onClick={onClick}>
        +
      </CanvasConnectorHandleButton>
    </CanvasConnectorHandleContainer>
  )
}
