import { Canvas } from 'components'

import { useFlow } from './hooks'

import { FlowContainer } from './Flow.styles'

export function Flow() {
  const { nodes, edges, handleConnect, handleEdgesChange, handleNodesChange } =
    useFlow()

  return (
    <FlowContainer>
      <Canvas
        nodes={nodes}
        edges={edges}
        onConnect={handleConnect}
        onNodesChange={handleNodesChange}
        onEdgesChange={handleEdgesChange}
      />
    </FlowContainer>
  )
}
