import { useRef } from "react";
import { Container, Space, Text, TextContent } from "./styles";

export function SobreNos() {
  const sobreNosRef = useRef(null);
  return (
    <>
      <Space id="sobreNos" ref={sobreNosRef} />

      <Container>
        <TextContent>
          <Text>
            Reportagem, produção, roteiro e direção: Giullia Colombo e Luciana
            <br />
            Saravia Orientação: Francisco Rolfsen Belda
            <br />
            Edição de vídeo: Gabriela Tiemi
            <br />
            Site: Felipe Iotti
            <br />
            Projeto gráfico: Juliana Bueno e Daniel Coutinho
          </Text>
        </TextContent>
      </Container>
    </>
  );
}
