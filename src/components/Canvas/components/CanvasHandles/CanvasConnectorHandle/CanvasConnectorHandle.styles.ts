import styled from 'styled-components'

import { CanvasConnectorHandleStyleProps } from './CanvasConnectorHandle.types'

export const CanvasConnectorHandleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  right: -40px;
`

export const CanvasConnectorHandleDot = styled.span<CanvasConnectorHandleStyleProps>`
  position: relative;
  height: 16px;
  width: 16px;
  background-color: #ffffff;
  border: 1px solid #dde5ed;
  border-radius: 50%;

  &:after {
    content: '';
    position: absolute;
    height: 8px;
    width: 8px;
    background-color: ${({ color }) =>
      color === 'blue' ? '#344383' : '#8B90A7'};
    border-radius: 50%;
    top: 50%;
    transform: translate(50%, -50%);
  }
`

export const CanvasConnectorHandleLine = styled.span<CanvasConnectorHandleStyleProps>`
  height: 1px;
  width: 12px;
  background-color: ${({ color }) =>
    color === 'blue' ? '#344383' : '#8B90A7'};
`

export const CanvasConnectorHandleButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 20px;
  width: 20px;
  background-color: #ffffff;
  border: 1px solid #344383;
  border-radius: 50%;
  color: #344383;
  margin-left: 2px;
  cursor: pointer;
`
