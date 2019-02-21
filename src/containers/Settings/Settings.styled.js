import styled from "styled-components";

export const Container = styled.div`
  float: right;
  margin: 30px;
`;

export const Img = styled.img`
  cursor: pointer;
  float: right;
  animation: ${props => (props.spin ? "spin infinite 2s linear" : "none")};
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const Menu = styled.div`
  transform-origin: top right;
  transform: scale(${props => (props.open ? "1,1" : "0,0")});
  transition: all 0.2s linear;
  width: 200px;
  height: 150px;
  margin: 24px;
  z-index: 55;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  padding: 10px;
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  select {
    width: 60%;
  }
`;