import styled from 'styled-components'

export const CanvasInitialNodeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px dashed #aebfd0;
  border-radius: 9px;
  padding: 24px;
  background-color: transparent;
`

export const CanvasInitialNodeContent = styled.div`
  position: relative;
  width: 250px;
  height: 150px;
  border: 1px solid #dde5ed;
  border-radius: 8px;
  padding-left: 30px;
  background-color: #ffffff;
  box-shadow: 0px 4px 4px rgba(139, 144, 167, 0.3);

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 12px;
    height: 100%;
    border-radius: 8px 0px 0px 8px;
    background-color: #8b90a7;
  }
`
