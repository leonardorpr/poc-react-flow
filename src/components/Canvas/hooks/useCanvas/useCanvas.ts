import { useState, useMemo, useCallback } from 'react'
import { useReactFlow } from 'reactflow'

export function useCanvas() {
  const { zoomIn, zoomOut, getZoom } = useReactFlow()

  const [isInteractive, setIsInteractive] = useState(true)

  const currentZoom = useMemo(() => getZoom(), [])

  const handleZoomOut = useCallback(() => zoomOut(), [])

  const handleZoomIn = useCallback(() => zoomIn(), [])

  const handleToggleInteraction = useCallback(() => {
    setIsInteractive((currentIsInteractive) => !currentIsInteractive)
  }, [])

  return {
    currentZoom,
    isInteractive,
    handleToggleInteraction,
    handleZoomOut,
    handleZoomIn,
  }
}
