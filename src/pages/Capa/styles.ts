import styled from "styled-components";

import capa from "../../assets/capa.png";

export const Container = styled.div`
  flex: 1;
  display: flex;
  height: 100%;
  width: 100vw;
  min-height: 2123px;
  background-size: contain;
  background-position: top;

  background-image: url(${capa});
  background-size: 1160px auto cover;
  background-position: top;
  background-repeat: no-repeat;
  margin-top: 7vh;
  margin-bottom: -700px;
`;
