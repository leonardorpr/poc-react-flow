import { useFlow } from 'pages/Flow/hooks'
import { NodeProps } from 'reactflow'
import { CanvasDefaultHandle } from '../../CanvasHandles'

import { CanvasDefaultNodeContainer } from './CanvasDefaultNode.styles'

export function CanvasDefaultNode({ id, xPos, yPos }: NodeProps) {
  const handleCreateNewNode = useFlow((state) => state.handleCreateNode)

  return (
    <CanvasDefaultNodeContainer>
      <CanvasDefaultHandle
        onClick={() => handleCreateNewNode(id, xPos, yPos)}
      />
    </CanvasDefaultNodeContainer>
  )
}
