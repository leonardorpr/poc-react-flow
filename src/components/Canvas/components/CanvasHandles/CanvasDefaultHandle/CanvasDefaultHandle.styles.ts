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
