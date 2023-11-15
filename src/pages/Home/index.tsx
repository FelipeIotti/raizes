import { BauruAFundo } from "../Bauro a fundo";
import { Capa } from "../Capa";
import { EntrevistaComExpecialista } from "../EntrevistaComExpecialista";
import { Panorama } from "../Panorama";
import { Bauru } from "../Panorama/Bauru";
import { Brasil } from "../Panorama/Brasil";
import { SaoPaulo } from "../Panorama/SaoPaulo";
import { SobreNos } from "../Sobre nós";

import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <Capa />

      <Panorama />
      <Brasil />
      <SaoPaulo />
      <Bauru />

      <EntrevistaComExpecialista />

      <BauruAFundo />

      <SobreNos />
    </Container>
  );
}
