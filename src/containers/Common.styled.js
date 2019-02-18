import styled from "styled-components";

export const CommonContainer= styled.div`
  position: absolute;
  background: linear-gradient(135deg, #3f4c6b 10%,#3f4c6b 10%,#606c88 90%);
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  animation: ${props => props.visible ? "up-size 1s 1s both" : "down-size 1s both"};
  @keyframes down-size {
    0% {
      width: 60%;
      height: 60%;
      top: 20%;
      left: 20%;
      padding: 10px;
      border: 2px solid whitesmoke;
      opacity: 1;
    }
    100% {
      width: 0px;
      height: 0px;
      top: 50%;
      left: 50%;
      padding: 0px;
      border: none;
      opacity: 0
    }
  }

  @keyframes up-size {
    0% {
      width: 0px;
      height: 0px;
      top: 50%;
      left: 50%;
      padding: 0px;
      border: none;
      opacity: 0
    }
    100% {
      width: 60%;
      height: 60%;
      top: 20%;
      left: 20%;
      padding: 10px;
      border: 2px solid whitesmoke;
      opacity: 1;
      }
  }
`;

export const LeftSpace = styled.div`
  overflow: hidden;
  box-sizing: border-box;
  width: 60%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const RigthSpace = styled.div`
  box-sizing: border-box;
  border-left: 2px solid whitesmoke;
  width: 40%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
`;