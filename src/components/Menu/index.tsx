import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useOnHoverOutside } from "../../hooks/useOnHoverOutside";
import {
  Container,
  Content,
  DropDownContainer,
  DropDownSelect,
  Text,
} from "./styles";

export function Menu() {
  const navigate = useNavigate();

  const dropdownRef = useRef<HTMLDivElement>(null);
  const panoramaRef = useRef<HTMLDivElement>(null);
  const brasilRef = useRef<HTMLDivElement>(null);
  const saoPauloRef = useRef<HTMLDivElement>(null);
  const bauruRef = useRef<HTMLDivElement>(null);
  const entrevistaComEspecialistaRef = useRef<HTMLDivElement>(null);
  const bauruAFundoRef = useRef<HTMLDivElement>(null);
  const sobreNosRef = useRef<HTMLDivElement>(null);

  const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false);

  const closeHoverMenu = () => {
    setMenuDropDownOpen(false);
  };

  useOnHoverOutside(dropdownRef, closeHoverMenu);

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
          <Link
            to="/#panorama"
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

                  <Link
                    to="/#brasil"
                    onClick={() => handleNavigation(brasilRef, "brasil")}
                    data-id="brasil"
                  >
                    Brasil
                  </Link>
                  <Link
                    to="/#saoPaulo"
                    onClick={() => handleNavigation(saoPauloRef, "saoPaulo")}
                    data-id="saoPaulo"
                  >
                    São Paulo
                  </Link>
                  <Link
                    to="/#bauru"
                    onClick={() => handleNavigation(bauruRef, "bauru")}
                    data-id="bauru"
                  >
                    Bauru
                  </Link>
                </DropDownSelect>
              )}
            </DropDownContainer>
          </Link>

          <Link
            to="/#entrevistaComExpecialista"
            onClick={() =>
              handleNavigation(
                entrevistaComEspecialistaRef,
                "entrevistaComExpecialista"
              )
            }
            data-id="entrevistaComExpecialista"
          >
            <Text>Entrevista com especialista</Text>
          </Link>

          <Link
            to="/#bauruAFundo"
            onClick={() => handleNavigation(bauruAFundoRef, "bauruAFundo")}
            data-id="bauruAFundo"
          >
            <Text>Bauru a fundo</Text>
          </Link>
          <Link
            to="/#sobreNos"
            onClick={() => handleNavigation(sobreNosRef, "sobreNos")}
            data-id="sobreNos"
          >
            <Text>Sobre nós</Text>
          </Link>
        </nav>
      </Content>
    </Container>
  );
}
