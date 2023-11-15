import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Container } from "./styles";
import image2 from "../../assets/2.png";
import image4 from "../../assets/4.png";
import image5 from "../../assets/5.png";
import image6 from "../../assets/6.png";
import image7 from "../../assets/7.png";

export function Carrossel() {
  return (
    <Container>
      <Carousel>
        <div>
          <img src={image2} />
        </div>
        <div>
          <img src={image4} />
        </div>
        <div>
          <img src={image5} />
        </div>
        <div>
          <img src={image6} />
        </div>
        <div>
          <img src={image7} />
        </div>
      </Carousel>
    </Container>
  );
}
