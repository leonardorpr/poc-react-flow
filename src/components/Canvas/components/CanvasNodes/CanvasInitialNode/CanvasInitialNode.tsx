import { useFlow } from 'pages/Flow/hooks'

import { NodeProps } from 'reactflow'

import { CanvasInitialHandle } from '../../CanvasHandles'

import {
  CanvasInitialNodeContainer,
  CanvasInitialNodeContent,
} from './CanvasInitialNode.styles'

export function CanvasInitialNode({ id, xPos, yPos }: NodeProps) {
  const handleCreateNewNode = useFlow((state) => state.handleCreateNode)

  return (
    <CanvasInitialNodeContainer>
      <CanvasInitialNodeContent>
        <CanvasInitialHandle
          onClick={() => handleCreateNewNode(id, xPos, yPos)}
        />
      </CanvasInitialNodeContent>
    </CanvasInitialNodeContainer>
  )
}
