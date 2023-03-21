type ConnectorColor = 'blue' | 'grey'

export interface CanvasConnectorHandleProps {
  color?: ConnectorColor
  onClick(): void
}

export interface CanvasConnectorHandleStyleProps {
  color: 'blue' | 'grey'
}
