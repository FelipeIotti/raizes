import styled from "styled-components";

import fundo from "../../assets/fundo2.png";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 100px;
  background-size: cover;
  background-position: center;
`;
export const ContainerImage = styled.div`
  flex: 1;

  height: 100vh;
  background-image: url(${fundo});

  background-size: cover;
  background-position: center;
  opacity: 1;
`;

export const Title = styled.text`
  margin: 10px;
  color: #000;
  font-size: 32px;
  font-weight: bold;
`;
export const Text = styled.text`
  margin: 10px;
  color: #000;
  font-size: 16px;
  font-weight: normal;
`;
