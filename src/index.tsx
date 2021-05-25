import { render } from "react-dom";
import React from "react";
import SingleColumn from "./components/layout/SingleColumn";
import { Center } from "./styles/layout";
import { majorThird } from "./styles/Typograhy";

render(
  <>
    <SingleColumn>
      <header>is header</header>
      <nav>is nav</nav>
      <div
        className={Center}
        style={{ fontSize: majorThird(5), flexGrow: 10, height: 1000 }}
      >
        Hello world
      </div>
      <footer>is footer</footer>
    </SingleColumn>
  </>,
  document.getElementById("root")
);
