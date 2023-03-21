import { CanvasInitialHandle } from '../../CanvasHandles'

import {
  CanvasInitialNodeContainer,
  CanvasInitialNodeContent,
} from './CanvasInitialNode.styles'

export function CanvasInitialNode() {
  return (
    <CanvasInitialNodeContainer>
      <CanvasInitialNodeContent>
        <CanvasInitialHandle />
      </CanvasInitialNodeContent>
    </CanvasInitialNodeContainer>
  )
}
