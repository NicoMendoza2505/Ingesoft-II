import { createBrowserRouter } from "react-router";
import Home from "./screens/Home";
import Tablas from "./screens/Tablas";
import Localidades from "./screens/Localidades";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/tablas",
    Component: Tablas,
  },
  {
    path: "/localidades",
    Component: Localidades,
  },
]);
