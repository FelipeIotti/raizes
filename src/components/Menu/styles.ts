import styled from "styled-components";

export const Container = styled.div`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;
  height: 7vh;

  background-color: #b72104;
  opacity: 0.9;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw; /* Ocupa a largura total da janela */
  z-index: 999;
`;

export const Text = styled.text`
  font-size: 16px;
  color: #ffffff;
  margin: 10px;

  &:hover {
    outline: 0;
    box-shadow: 000 2px #000;
  }
`;

export const Content = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 20px;
  flex-direction: row;
  a {
    outline: none;
    text-decoration: none;
  }
  nav {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const ContentImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  img {
    width: 80px;
  }
`;

export const DropDownContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DropDownSelect = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 74px;

  justify-content: flex-start;

  margin-bottom: 42px;
  background-color: #b72104;
  a {
    padding: 4px;
    color: #fff;
    font-size: 14px;
    margin-left: 10px;

    &:hover {
      outline: 0;
      box-shadow: 000 2px #000;
    }
  }
`;
