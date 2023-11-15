import { useRef } from "react";

import { Container } from "./styles";

export function Capa() {
  const capa = useRef(null);
  return <Container id="capa" ref={capa}></Container>;
}
