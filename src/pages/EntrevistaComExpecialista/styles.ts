import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  width: 100vw;
  height: 100%;
  background-color: #ebd7ce;
`;

export const Title = styled.text`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 10px;

  color: #000;

  font-size: 32px;
  font-weight: bold;
`;

export const TitleUnderline = styled.text`
  display: flex;
  align-items: center;

  margin-top: 5px;
  margin-bottom: 50px;

  color: #595353;

  font-size: 20px;
  font-weight: 100;
  font-style: italic;
`;

export const TextContent = styled.div`
  margin: 100px;
  margin-right: 150px;
  margin-left: 150px;
  margin-top: 140px;
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
export const TextN = styled.text`
  color: #000;
  font-size: 16px;
  font-weight: bold;
`;

export const ImageContent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0;
  padding: 0;
  margin-top: 15px;
`;

export const Image = styled.img`
  max-width: 70%;
`;

export const Image2 = styled.img`
  width: 100vw;
  margin-top: -27%;
`;
export const Image3 = styled.img`
  flex: 1;
  display: flex;
  width: 100%;
`;

export const Eye = styled.text`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 40px;
  margin-right: 80px;
  margin-left: 80px;

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

export const Question = styled.text`
  margin-bottom: 10px;
  color: #000;

  font-size: 18px;
  font-weight: bold;
`;

export const Box = styled.div`
  border: 5px solid #51b5e5;
  border-radius: 25px;
  padding: 25px;
  margin: 120px;
  margin-top: 40px;
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
export const PizzaImagesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 40px;
  margin-bottom: 20px;
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

export const LegendDataPizza = styled.text`
  color: #000;
  font-size: 12px;
  font-weight: normal;
  opacity: 0.6;
  font-style: italic;
  margin-top: 4px;
`;
