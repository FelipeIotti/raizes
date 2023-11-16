import styled from "styled-components";
import divider1 from "../../../assets/divider1.png";

export const Container = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const ContainerImage2 = styled.div`
  flex: 1;

  width: 100vw;
  height: 100vh;
  background-image: url(${divider1});

  background-size: cover;
  background-position: center;
`;

export const Title = styled.text`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 100px;

  color: #000;

  font-size: 32px;
  font-weight: bold;
`;

export const TextContent = styled.div`
  margin: 100px;
  margin-top: 20px;

  margin-bottom: 60px;
  margin-right: 150px;
  margin-left: 150px;
  display: flex;
  flex-direction: column;
`;

export const Text = styled.text`
  color: #000;
  font-size: 18px;
  font-weight: normal;
  a {
    color: #e38400;
  }
`;

export const LegendContent = styled.div`
  margin-left: 150px;
  margin-right: 150px;
`;
export const Legend = styled.text`
  color: #000;
  font-size: 18px;
  font-weight: normal;
  font-style: italic;
  opacity: 0.5;
`;

export const Image2 = styled.img`
  width: 100vw;
`;

export const SubTitle = styled.text`
  margin-top: 50px;
  margin-bottom: 20px;
  color: #000;

  font-size: 28px;
  font-weight: bold;
`;
export const Space = styled.div`
  height: 9vh;
`;
