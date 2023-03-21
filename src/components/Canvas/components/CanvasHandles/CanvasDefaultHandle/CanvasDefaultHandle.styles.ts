import styled from 'styled-components'

export const CanvasDefaultHandleElement = styled.div`
  & > .react-flow__handle-right {
    right: -45px;
  }

  & > .react-flow__handle-left,
  & > .react-flow__handle-right {
    background-color: transparent;
    border-color: transparent;
  }
`

export const CanvasDefaultHandleConnectContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  right: -40px;
`

export const CanvasDefaultHandleConnectDot = styled.span`
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
    background-color: #344383;
    border-radius: 50%;
    top: 50%;
    transform: translate(50%, -50%);
  }
`

export const CanvasDefaultHandleConnectLine = styled.span`
  height: 1px;
  width: 12px;
  background-color: #344383;
`

export const CanvasDefaultHandleConnectButton = styled.button`
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
