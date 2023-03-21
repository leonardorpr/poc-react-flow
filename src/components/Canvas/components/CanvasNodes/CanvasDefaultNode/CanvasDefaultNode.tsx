import { CanvasDefaultHandle } from '../../CanvasHandles'

import { CanvasDefaultNodeContainer } from './CanvasDefaultNode.styles'

export function CanvasDefaultNode() {
  return (
    <CanvasDefaultNodeContainer>
      <CanvasDefaultHandle />
    </CanvasDefaultNodeContainer>
  )
}
