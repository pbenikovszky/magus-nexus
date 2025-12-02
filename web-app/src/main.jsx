import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import LoginPage from "./pages/LoginPage.jsx";
import "./assets/styles/base.css";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <LoginPage />
    </StrictMode>
);
