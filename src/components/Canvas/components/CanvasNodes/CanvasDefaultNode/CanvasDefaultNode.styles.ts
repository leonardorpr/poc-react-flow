import styled from 'styled-components'

export const CanvasDefaultNodeContainer = styled.div`
  position: relative;
  width: 230px;
  height: 50px;
  border: 1px solid #dde5ed;
  border-radius: 8px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(139, 144, 167, 0.3);

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 12px;
    height: 100%;
    border-radius: 8px 0px 0px 8px;
    background-color: #4ebff1;
  }
`
