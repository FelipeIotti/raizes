import { BrowserRouter } from "react-router-dom";
import { Menu } from "./components/Menu";
import { Router } from "./router";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />

      <Menu />
      <Router />
    </BrowserRouter>
  );
}
