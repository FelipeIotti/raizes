import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  width: 100vw;
  height: 100%;
  background-color: #ebd7ce;
  padding-bottom: 80px;
`;

export const Title = styled.text`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 10px;

  color: #000;

  font-size: 42px;
  font-weight: bold;
`;

export const TitleUnderline = styled.text`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 10px;
  margin-bottom: 50px;

  color: #595353;

  font-size: 28px;
  font-weight: 100;
  font-style: italic;
`;

export const TextContent = styled.div`
  margin: 100px;
  margin-top: 140px;
  margin-bottom: 60px;
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
export const TextN = styled.text`
  color: #000;
  font-size: 18px;
  font-weight: bold;
`;

export const ImageContent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;
  margin-top: 60px;
`;

export const Image = styled.img`
  max-width: 70%;
`;

export const Image2 = styled.img`
  width: 100vw;
  margin-top: -27%;
`;
export const Image3 = styled.img`
  max-width: 45%;
`;

export const Eye = styled.text`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 40px;
  margin-right: 80px;
  margin-left: 80px;

  color: #ad3f83;

  font-size: 24px;
  font-weight: bold;
`;

export const SubTitle = styled.text`
  margin-top: 50px;
  margin-bottom: 20px;
  color: #000;

  font-size: 28px;
  font-weight: bold;
`;

export const Question = styled.text`
  margin-bottom: 10px;
  color: #000;

  font-size: 20px;
  font-weight: bold;
`;

export const Box = styled.div`
  border: 5px solid #51b5e5;
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
export const PizzaImagesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 40px;
  margin-bottom: 20px;
`;
