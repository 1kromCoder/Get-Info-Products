import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ReducerContext } from "./context/Context.tsx";
import "./App.css";
createRoot(document.getElementById("root")!).render(
  <ReducerContext>
    <App />
  </ReducerContext>
);
