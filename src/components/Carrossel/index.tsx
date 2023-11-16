import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Container } from "./styles";
import image1 from "../../assets/1.png";
import image2 from "../../assets/2.png";
import image3 from "../../assets/3.png";
import image4 from "../../assets/4.png";
import image5 from "../../assets/5.png";
import image6 from "../../assets/6.png";
import image7 from "../../assets/7.png";
import image8 from "../../assets/8.png";
import image9 from "../../assets/9.png";

export function Carrossel() {
  return (
    <Container>
      <Carousel>
        <div>
          <img src={image1} />
          <p className="legend">
            Barraca de Sulleydis e Júlio estampa a bandeira da Venezuela nas
            feiras itinerantes de Bauru | Giullia Colombo
          </p>
        </div>
        <div>
          <img src={image2} />
          <p className="legend">
            Daniel dá aulas para estudantes de graduação durante o seu mestrado
            na Unesp | Luciana Saravia
          </p>
        </div>
        <div>
          <img src={image3} />
          <p className="legend">
            As receitas de doces da família mudaram com a chegada ao Brasil e a
            adequação ao público brasileiro, incorporando ingredientes como
            leite condensado e doce de leite | Giullia Colombo
          </p>
        </div>
        <div>
          <img src={image4} />
          <p className="legend">
            Filas se formam às quartas-feiras para compra de arepas na feira do
            Vitória Régia | Giullia Colombo
          </p>
        </div>
        <div>
          <img src={image5} />
          <p className="legend">
            Futebol sempre fez parte da vida de Daniel. Na foto, seu avô, que
            foi jogador de um dos times onde Daniel já trabalhou como assessor.
            Ao fundo, seu mate, costume que adquiriu com colegas argentinos |
            Giullia Colombo
          </p>
        </div>
        <div>
          <img src={image6} />
          <p className="legend">
            Empanadas são salgados assados com recheios de queijo, carnes e
            legumes | Giullia Colombo
          </p>
        </div>
        <div>
          <img src={image7} />
          <p className="legend">
            Sully e Júlio recebem famílias de amigos venezuelanos para celebrar
            o dia dos pais | Giullia Colombo
          </p>
        </div>
        <div>
          <img src={image8} />
          <p className="legend">
            Cachapas, um prato típico venezuelano preparado por Sully para o dia
            dos pais | Giullia Colombo
          </p>
        </div>
        <div>
          <img src={image9} />
          <p className="legend">
            Sulleydis mostra orgulhosa seus albuns de fotos para a produção do
            documentário | Giullia Colombo
          </p>
        </div>
      </Carousel>
    </Container>
  );
}
