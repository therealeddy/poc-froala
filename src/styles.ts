import styled from "styled-components";

export const Content = styled.div`
  position: relative;
  & strong {
    font-weight: bold;
  }
  & em {
    font-style: italic;
  }
`;

export const ModelModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  border: 1px solid #dedede;
  border-radius: 10px;
  z-index: 100;
  background-color: #ffffff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px 5px 20px;
  * {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
  }
  button.close {
    position: absolute;
    right: 15px;
    top: 15px;
    cursor: pointer;
    padding: 0px;
    margin: 0px;
    border: 0px;
    background-color: transparent;
  }
  button.model {
    padding: 10px 20px;
    background-color: transparent;
    border: 0px;
    display: flex;
    align-items: flex-start;
    transition: all 0.2s linear;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      background-color: #ececec;
    }
  }
`;
