import { render } from "react-dom";
import React from "react";
import { setup } from "goober";
import { prefix } from "goober/prefixer";
import SingleColumn from "./components/layout/SingleColumn";
import { Center, FullSize } from "./styles/layout";
import { majorThird } from "./styles/Typograhy";
import CardLayout from "./components/layout/CardLayout";
import LayerdContainer from "./components/layout/LayerdContainer";
import Card from "./sample/Card";
import FlexibleGridLayout from "./components/layout/FlexibleGridLayout";

// Bootstrap goober
setup(React.createElement, prefix);

render(
  <LayerdContainer className={FullSize}>
    <SingleColumn>
      <header>is header</header>
      <nav>is nav</nav>
      <div style={{ flexGrow: 10, height: 1000 }}>
        <FlexibleGridLayout baseSize="200px">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </FlexibleGridLayout>
      </div>
      <footer>is footer</footer>
    </SingleColumn>
  </LayerdContainer>,
  document.getElementById("root")
);
