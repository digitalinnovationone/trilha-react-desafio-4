import React from "react";
import ReactDOM from "react-dom/client";
import { Login } from "./pages/Login";

import GlobalStyles from "./global";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <Login />
  </React.StrictMode>
);
