import { render } from "react-dom";
import React from "react";
import SingleColumn from "./components/layout/SingleColumn";
import { Center, FullSize } from "./styles/layout";
import { majorThird } from "./styles/Typograhy";
import CardLayout from "./components/layout/CardLayout";
import LayerdContainer from "./components/layout/LayerdContainer";
import Card from "./sample/Card";

render(
  <LayerdContainer className={FullSize}>
    <SingleColumn>
      <header>is header</header>
      <nav>is nav</nav>
      <CardLayout style={{ flexGrow: 10, height: 1000 }}>
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
      </CardLayout>
      <footer>is footer</footer>
    </SingleColumn>
  </LayerdContainer>,
  document.getElementById("root")
);
