import App from "./App.tsx";
import { StrictMode } from "react";
import "./assets/styles/index.css";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
