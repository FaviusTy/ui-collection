import { render } from "react-dom";
import React from "react";
import SingleColumn from "./components/layout/SingleColumn";
import { Center } from "./styles/layout";
import { majorThird } from "./styles/Typograhy";
import CardLayout from "./components/layout/CardLayout";

render(
  <>
    <SingleColumn>
      <header>is header</header>
      <nav>is nav</nav>
      <div
        style={{
          display: "flex",
          flexGrow: 10,
          height: 1000,
        }}
      >
        <CardLayout>
          <div className={Center} style={{ fontSize: majorThird(5) }}>
            Hello world
          </div>
          <div className={Center} style={{ fontSize: majorThird(4) }}>
            Hello world
          </div>
          <div className={Center} style={{ fontSize: majorThird(3) }}>
            Hello world
          </div>
          <div className={Center} style={{ fontSize: majorThird(2) }}>
            Hello world
          </div>
          <div className={Center} style={{ fontSize: majorThird(1) }}>
            Hello world
          </div>
          <div className={Center} style={{ fontSize: majorThird(0) }}>
            Hello world
          </div>
          <div className={Center} style={{ fontSize: majorThird(-1) }}>
            Hello world
          </div>
          <div className={Center} style={{ fontSize: majorThird(-2) }}>
            Hello world
          </div>
          <div className={Center} style={{ fontSize: majorThird(-3) }}>
            Hello world
          </div>
        </CardLayout>
      </div>
      <footer>is footer</footer>
    </SingleColumn>
  </>,
  document.getElementById("root")
);
