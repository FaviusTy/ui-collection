import { render } from "react-dom";
import React from "react";
import SingleColumn from "./components/layout/SingleColumn";

render(
  <SingleColumn>
    <header>is header</header>
    <nav>is nav</nav>
    <div style={{ flexGrow: 10, height: 1000 }}>Hello world</div>
    <footer>is footer</footer>
  </SingleColumn>,
  document.getElementById("root")
);
