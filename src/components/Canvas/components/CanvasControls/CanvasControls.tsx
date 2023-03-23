import { CanvasControlsButton } from './components'

import { CanvasControlsProps } from './CanvasControls.types'

import { CanvasControlsContainer } from './CanvasControls.styles'

export function CanvasControls({
  isInteractive,
  onZoomIn,
  onZoomOut,
  onToggleInteraction,
}: CanvasControlsProps) {
  return (
    <CanvasControlsContainer>
      <CanvasControlsButton onClick={onZoomOut}>-</CanvasControlsButton>
      <CanvasControlsButton onClick={onZoomIn}>+</CanvasControlsButton>
      <CanvasControlsButton onClick={onToggleInteraction}>
        {isInteractive ? 'Lock' : 'Unlock'}
      </CanvasControlsButton>
    </CanvasControlsContainer>
  )
}
