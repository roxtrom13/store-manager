/* @refresh reload */
import { render } from "solid-js/web";
import { Router } from "solid-app-router";

import "./index.css";
import App from "./App";

import "./index.css";

render(() => {
  return (
    <Router>
      <App />
    </Router>
  )
}, document.getElementById("root") as HTMLElement);
