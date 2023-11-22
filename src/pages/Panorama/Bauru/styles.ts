import styled from "styled-components";

import fundo from "../../../assets/fundo2.png";
import divider1 from "../../../assets/divider1.png";

export const Container = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const ContainerImage = styled.div`
  flex: 1;

  height: 100vh;
  width: 100vw;
  background-image: url(${fundo});

  background-size: cover;
  background-position: center;
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
  margin-right: 150px;
  margin-left: 150px;
  margin-bottom: 160px;
  display: flex;
  flex-direction: column;
`;

export const Text = styled.text`
  color: #000;
  font-size: 16px;
  font-weight: normal;
  a {
    color: #e38400;
  }
`;

export const ImageContent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 40px;
`;

export const Image = styled.img`
  max-width: 70%;
`;

export const Image2 = styled.img`
  width: 100vw;
  margin-bottom: -47%;
`;

export const Eye = styled.text`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 40px;

  color: #ad3f83;

  font-size: 20px;
  font-weight: bold;
`;

export const SubTitle = styled.text`
  margin-top: 50px;
  margin-bottom: 20px;
  color: #000;

  font-size: 22px;
  font-weight: bold;
`;

export const Box = styled.div`
  border: 5px solid #ab3535;
  border-radius: 25px;
  padding: 25px;
  margin: 120px;
  margin-top: 40px;
  margin-bottom: 40px;
`;

export const ContentImageText = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ImageLeft = styled.img`
  width: 35%;
  margin-left: -100px;
`;

export const ImageRight = styled.img`
  width: 35%;
  margin-right: -100px;
`;
export const Space = styled.div`
  height: 9vh;
`;
export const LegendData = styled.text`
  color: #000;
  font-size: 12px;
  font-weight: normal;
  opacity: 0.6;
  font-style: italic;
  margin-top: 4px;
  margin-right: 15%;
  margin-left: 15%;
`;
