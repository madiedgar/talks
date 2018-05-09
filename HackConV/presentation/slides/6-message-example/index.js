import React from "react";
import { Heading, Slide, Text, CodePane } from "spectacle";

export default (
  <Slide transition={["zoom"]} bgColor="tertiary">
    <CodePane lang="markdown" source={require("../../../assets/example-email.md")}></CodePane>
  </Slide>
);
