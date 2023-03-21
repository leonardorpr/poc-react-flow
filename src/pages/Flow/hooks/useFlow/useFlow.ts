import { useCallback } from 'react'
import { useNodesState, useEdgesState, addEdge, Connection } from 'reactflow'

import { initialNodes, initialEdges } from './useFlow.utils'

export function useFlow() {
  const [nodes, setNodes, handleNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, handleEdgesChange] = useEdgesState(initialEdges)

  const handleConnect = useCallback(
    (params: Connection) => {
      return setEdges((eds) => addEdge(params, eds))
    },
    [setEdges],
  )

  const handleAddNode = useCallback(() => {
    setNodes((nodes) => {
      return [
        ...nodes,
        {
          id: `${nodes.length + 1}`,
          position: {
            x: 750,
            y: 350,
          },
          data: {},
          type: 'default',
        },
      ]
    })
  }, [])

  return {
    nodes,
    edges,
    handleAddNode,
    handleConnect,
    handleNodesChange,
    handleEdgesChange,
  }
}
