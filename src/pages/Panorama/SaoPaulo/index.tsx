import { useRef } from "react";
import {
  Container,
  Image2,
  Legend,
  LegendContent,
  Space,
  Text,
  TextContent,
  Title,
} from "./styles";
import grafite from "../../../assets/grafites.png";
import divider1 from "../../../assets/divider1.png";

export function SaoPaulo() {
  const saoPauloRef = useRef(null);
  return (
    <>
      <Space id="saoPaulo" ref={saoPauloRef} />

      <Container>
        <Title>Em São Paulo somos todos imigrantes</Title>
        <Image2 src={grafite} alt="grafite" />
        <LegendContent>
          <Legend>
            Mural perto da Praça Kantuta no Pari, em São Paulo, local é
            conhecido por ter uma grande população boliviana residindo na
            capital | Reprodução/Google Street View
          </Legend>
        </LegendContent>
        <TextContent>
          <Text>
            <br />
            No Estado de São Paulo, das 10 nacionalidades mais presentes no
            território em 2023, mantém-se a marca de 5 serem hispano-americanas.
            Contudo, os bolivianos - e não os venezuelanos -, dominam o recorte
            , com um terço dos registros estaduais emitidos para essa população,
            que vem migrando desde os anos 1950, com intensificação a partir de
            1980.
          </Text>

          <Text>
            <br></br>
            Assim como ocorreu no auge do ciclo econômico do café, entre o final
            do século XIX e o início do século XX, a cidade de São Paulo
            continua sendo um ímã para imigrantes. Oportunidades de trabalho,
            serviços públicos relativamente mais eficientes e condições
            propícias para empreender no setor de serviços fazem a multicultural
            capital paulistana brilhar mais e mais.
          </Text>

          <Text>
            <br />
            Fábio Pucci e Maura Véras, da PUC-SP, no artigo
            <>&nbsp;</>
            <a
              href={"https://www.revistas.usp.br/plural/article/view/143006"}
              target="_blank"
            >
              “Bolivianos em São Paulo: territórios e alteridade”
            </a>
            , explicam que as porções de imigrantes acabam se assentando em
            bairros específicos do município, estabelecendo dinâmicas próprias
            entre si, que acabam por preservar a cultura. Em bairros como Brás,
            é possível observar uma variedade de festas, ornamentos, pratos para
            todas as horas do dia e danças com trajes diferentes do que o
            brasileiro está acostumado a ver.
          </Text>

          <Text>
            <br />
            Mas, a nem-sempre-fácil-de-sobreviver cidade de São Paulo tem
            repelido esses grupos em direção ao interior paulista.
          </Text>
        </TextContent>
        <Image2 src={divider1} alt="divider1" />
      </Container>
    </>
  );
}
