import { Canvas } from 'components'

import { useFlow } from './hooks'

import { FlowContainer } from './Flow.styles'

export function Flow() {
  const nodes = useFlow((state) => state.nodes)
  const edges = useFlow((state) => state.edges)
  const handleConnect = useFlow((state) => state.handleConnect)
  const handleEdgesChange = useFlow((state) => state.handleEdgesChange)
  const handleNodesChange = useFlow((state) => state.handleNodesChange)

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
