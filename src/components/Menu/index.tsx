import {
  Container,
  Content,
  ContentImage,
  DropDownContainer,
  DropDownSelect,
  Text,
} from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { useOnHoverOutside } from "../../hooks/useOnHoverOutside";

export function Menu() {
  const navigate = useNavigate();

  const dropdownRef = useRef(null); // Create a reference for dropdown container
  const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false);

  const closeHoverMenu = () => {
    setMenuDropDownOpen(false);
  };

  useOnHoverOutside(dropdownRef, closeHoverMenu); // Call the hook

  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };
  const handleNavigation = (ref) => {
    navigate(ref);
    scrollToRef(ref);
  };

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/#panorama" onClick={() => handleNavigation(panoramaRef)}>
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
                    onClick={() => handleNavigation(brasilRef)}
                  >
                    Brasil
                  </Link>
                  <Link
                    to="/#saoPaulo"
                    onClick={() => handleNavigation(saoPauloRef)}
                  >
                    São Paulo
                  </Link>
                  <Link to="/#bauru" onClick={() => handleNavigation(bauruRef)}>
                    Bauru
                  </Link>
                </DropDownSelect>
              )}
            </DropDownContainer>
          </Link>

          <Link
            to="/#entrevistaComExpecialista"
            onClick={() => handleNavigation(entrevistaComExpecialistaRef)}
          >
            <Text>Entrevista com expecialista</Text>
          </Link>

          <Link
            to="/#bauruAFundo"
            onClick={() => handleNavigation(bauruAFundoRef)}
          >
            <Text>Bauru a fundo</Text>
          </Link>
          <Link to="/#sobreNos" onClick={() => handleNavigation(sobreNosRef)}>
            <Text>Sobre nós</Text>
          </Link>
        </nav>
      </Content>
    </Container>
  );
}
