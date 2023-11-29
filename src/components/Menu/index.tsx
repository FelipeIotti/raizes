import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useOnHoverOutside } from "../../hooks/useOnHoverOutside";
import {
  Container,
  Content,
  DropDownContainer,
  DropDownContainer2,
  DropDownSelect,
  DropDownSelect2,
  Text,
} from "./styles";

export function Menu() {
  const navigate = useNavigate();

  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownRef2 = useRef<HTMLDivElement>(null);
  const panoramaRef = useRef<HTMLDivElement>(null);
  const brasilRef = useRef<HTMLDivElement>(null);
  const saoPauloRef = useRef<HTMLDivElement>(null);
  const bauruRef = useRef<HTMLDivElement>(null);
  const entrevistaComEspecialistaRef = useRef<HTMLDivElement>(null);
  const bauruAFundoRef = useRef<HTMLDivElement>(null);
  const bauruAFundoDocumentarioRef = useRef<HTMLDivElement>(null);
  const bauruAFundoGaleriaRef = useRef<HTMLDivElement>(null);
  const sobreNosRef = useRef<HTMLDivElement>(null);

  const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false);
  const [isMenuDropDownOpen2, setMenuDropDownOpen2] = useState(false);

  const closeHoverMenu = () => {
    setMenuDropDownOpen(false);
  };

  const closeHoverMenu2 = () => {
    setMenuDropDownOpen2(false);
  };

  useOnHoverOutside(dropdownRef, closeHoverMenu);
  useOnHoverOutside(dropdownRef2, closeHoverMenu2);

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleNavigation = (
    ref: React.RefObject<HTMLDivElement>,
    customId?: string
  ) => {
    const targetId =
      customId || (ref.current && ref.current.getAttribute("data-id"));
    if (targetId) {
      navigate(`#${targetId}`);
      scrollToRef(ref);
    }
  };

  return (
    <Container>
      <Content>
        <nav>
          <a
            href="/#panorama"
            onClick={() => handleNavigation(panoramaRef, "panorama")}
            data-id="panorama"
          >
            <DropDownContainer
              ref={dropdownRef}
              onMouseOver={() => setMenuDropDownOpen(true)}
            >
              <Text>Panorama</Text>
              {isMenuDropDownOpen && (
                <DropDownSelect>
                  <Text>Panorama</Text>

                  <a
                    href="/#brasil"
                    onClick={() => handleNavigation(brasilRef, "brasil")}
                    data-id="brasil"
                  >
                    Brasil
                  </a>
                  <a
                    href="/#saoPaulo"
                    onClick={() => handleNavigation(saoPauloRef, "saoPaulo")}
                    data-id="saoPaulo"
                  >
                    São Paulo
                  </a>
                  <a
                    href="/#bauru"
                    onClick={() => handleNavigation(bauruRef, "bauru")}
                    data-id="bauru"
                  >
                    Bauru
                  </a>
                </DropDownSelect>
              )}
            </DropDownContainer>
          </a>

          <a
            href="/#entrevistaComExpecialista"
            onClick={() =>
              handleNavigation(
                entrevistaComEspecialistaRef,
                "entrevistaComExpecialista"
              )
            }
            data-id="entrevistaComExpecialista"
          >
            <Text>Entrevista com especialista</Text>
          </a>

          <a
            href="/#bauruAFundo"
            onClick={() => handleNavigation(bauruAFundoRef, "bauruAFundo")}
            data-id="bauruAFundo"
          >
            <DropDownContainer2
              ref={dropdownRef2}
              onMouseOver={() => setMenuDropDownOpen2(true)}
            >
              <Text>Bauru a fundo</Text>
              {isMenuDropDownOpen2 && (
                <DropDownSelect2>
                  <Text>Bauru a fundo</Text>

                  <a
                    href="/#bauruAFundoDocumentario"
                    onClick={() =>
                      handleNavigation(
                        bauruAFundoDocumentarioRef,
                        "bauruAFundoDocumentario"
                      )
                    }
                    data-id="bauruAFundoDocumentario"
                  >
                    Documentário
                  </a>
                  <a
                    href="/#bauruAFundoGaleria"
                    onClick={() =>
                      handleNavigation(
                        bauruAFundoGaleriaRef,
                        "bauruAFundoGaleria"
                      )
                    }
                    data-id="bauruAFundoGaleria"
                  >
                    Galeria
                  </a>
                </DropDownSelect2>
              )}
            </DropDownContainer2>
          </a>
          <a
            href="/#sobreNos"
            onClick={() => handleNavigation(sobreNosRef, "sobreNos")}
            data-id="sobreNos"
          >
            <Text>Sobre nós</Text>
          </a>
        </nav>
      </Content>
    </Container>
  );
}
