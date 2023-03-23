import { NodeProps } from 'reactflow'
import { CanvasDefaultHandle } from '../../CanvasHandles'

import { CanvasDefaultNodeContainer } from './CanvasDefaultNode.styles'

export function CanvasDefaultNode({ data }: NodeProps) {
  return (
    <CanvasDefaultNodeContainer>
      <>
        <CanvasDefaultHandle />
        <h1>{data.rule}</h1>
      </>
    </CanvasDefaultNodeContainer>
  )
}
