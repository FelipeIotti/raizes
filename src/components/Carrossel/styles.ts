import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
export const Container = styled.div`
  margin: 20px;
`;

export const Image = styled.img`
  width: 300px;
  height: 200px;
`;

export const CarouselStyled = styled(Carousel)`
  &&& {
    width: auto;
    height: auto;
  }
`;
