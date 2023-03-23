import { CanvasControlsButtonProps } from './CanvasControlsButton.types'

import { CanvasControlsButtonContainer } from './CanvasControlsButton.styles'

export function CanvasControlsButton({
  children,
  onClick,
}: CanvasControlsButtonProps) {
  return (
    <CanvasControlsButtonContainer onClick={onClick}>
      {children}
    </CanvasControlsButtonContainer>
  )
}
