import { useRef } from "react";
import {
  Container,
  Image2,
  SubTitle,
  Text,
  TextContent,
  Title,
} from "./styles";
import grafite from "../../../assets/grafites.png";
import divider1 from "../../../assets/divider1.png";

export function SaoPaulo() {
  const saoPauloRef = useRef(null);
  return (
    <Container id="saoPaulo" ref={saoPauloRef}>
      <Title>Panorama Geral - São Paulo</Title>
      <Image2 src={grafite} alt="grafite" />
      <TextContent>
        <SubTitle>Intertítulo</SubTitle>
        <Text>
          <br />
          <>&nbsp;</>
          <>&nbsp;</>
          <>&nbsp;</>
          <>&nbsp;</>
          No Estado de São Paulo, das 10 nacionalidades mais presentes no
          território em 2023, mantém-se a marca de 5 serem hispano-americanas.
          Contudo, os bolivianos - e não os venezuelanos -, dominam o recorte ,
          com um terço dos registros estaduais emitidos para essa população, que
          vem migrando desde os anos 1950, com intensificação a partir de 1980.
        </Text>

        <Text>
          <br></br>
          <>&nbsp;</>
          <>&nbsp;</>
          <>&nbsp;</>
          <>&nbsp;</>
          Assim como ocorreu no auge do ciclo econômico do café, entre o final
          do século XIX e o início do século XX, a cidade de São Paulo continua
          sendo um ímã para imigrantes. Oportunidades de trabalho, serviços
          públicos relativamente mais eficientes e condições propícias para
          empreender no setor de serviços fazem a multicultural capital
          paulistana brilhar mais e mais.
        </Text>

        <Text>
          <br />
          <>&nbsp;</>
          <>&nbsp;</>
          <>&nbsp;</>
          <>&nbsp;</>
          As porções de imigrantes acabam se assentando em bairros específicos
          do município, estabelecendo dinâmicas próprias entre si, que acabam
          por preservar a cultura. Em bairros como Brás, é possível observar uma
          variedade de festas, ornamentos, pratos para todas as horas do dia e
          danças com trajes diferentes do que o brasileiro está acostumado a
          ver.
        </Text>

        <Text>
          <br />
          <>&nbsp;</>
          <>&nbsp;</>
          <>&nbsp;</>
          <>&nbsp;</>
          Mas, a nem-sempre-fácil-de-sobreviver cidade de São Paulo tem repelido
          esses grupos em direção ao interior paulista.
        </Text>
      </TextContent>
      <Image2 src={divider1} alt="divider1" />
    </Container>
  );
}
