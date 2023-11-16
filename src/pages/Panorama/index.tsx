import { useRef } from "react";

import { Container, Space, Text, Title } from "./styles";
import { TextContent } from "./Bauru/styles";

export function Panorama() {
  const panoramaRef = useRef(null);
  return (
    <>
      <Space id="panorama" ref={panoramaRef} />
      <Container>
        <TextContent>
          <Title>Introdução</Title>
          <Text>
            Aos brasileiros mais atentos ao contexto político e social da
            América do Sul, não é surpresa que a diversidade de sotaques
            espanhóis tenha aumentado de maneira exponencial. Só os
            venezuelanos, por exemplo, correspondem à metade do total de
            imigrantes que estão hoje no Brasil, segundo a Polícia Federal (PF).
            Esse fluxo, intensificado a partir de 2014, é um retrato típico da
            imigração na porção sul do continente americano.
          </Text>
        </TextContent>
      </Container>
    </>
  );
}
