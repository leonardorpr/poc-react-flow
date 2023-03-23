import { useState, useCallback } from 'react'
import { useReactFlow } from 'reactflow'

export function useCanvas() {
  const { zoomIn, zoomOut, getZoom } = useReactFlow()

  const [isInteractive, setIsInteractive] = useState(true)

  const handleToggleInteraction = useCallback(() => {
    setIsInteractive((currentIsInteractive) => !currentIsInteractive)
  }, [])

  return {
    isInteractive,
    currentZoom: getZoom(),
    handleToggleInteraction,
    handleZoomOut: zoomOut,
    handleZoomIn: zoomIn,
  }
}
