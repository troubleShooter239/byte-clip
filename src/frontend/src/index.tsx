import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { CssVarsProvider } from "@mui/joy/styles/CssVarsProvider";
// import darkTheme from "./themes/dark";
import "@fontsource/nunito";
import "./index.css";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      {/* <CssVarsProvider theme={darkTheme}> */}
      <CssVarsProvider>
        <App />
      </CssVarsProvider>
    </BrowserRouter>
  </StrictMode>
);

reportWebVitals();
