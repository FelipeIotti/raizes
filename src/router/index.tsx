import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Capa } from "../pages/Capa";
import { Panorama } from "../pages/Panorama";
import { EntrevistaComExpecialista } from "../pages/EntrevistaComExpecialista";
import { BauruAFundo } from "../pages/Bauro a fundo";
import { SobreNos } from "../pages/Sobre nós";
import { Brasil } from "../pages/Panorama/Brasil";
import { Bauru } from "../pages/Panorama/Bauru";
import { SaoPaulo } from "../pages/Panorama/SaoPaulo";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/capa" element={<Capa />} />
      <Route path="/#panorama" element={<Panorama />} />
      <Route path="/#brasil" element={<Brasil />} />
      <Route path="/#bauru" element={<Bauru />} />
      <Route path="/#saoPaulo" element={<SaoPaulo />} />
      <Route
        path="/#entrevistaComExpecialista"
        element={<EntrevistaComExpecialista />}
      />
      <Route path="/#bauruAFundo" element={<BauruAFundo />} />
      <Route path="/#sobreNos" element={<SobreNos />} />
    </Routes>
  );
}
