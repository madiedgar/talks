import React from "react";
import { Heading, Slide, Text, Code } from "spectacle";

export default (
  <Slide transition={["zoom"]} bgColor="secondary">
    <Heading size={4} fit caps lineHeight={1} textColor="primary">
      Thank you!
    </Heading>
    <Text textColor="tertiary" size={10} lineHeight={2}>Resources/slides: <Code>github.com/madipfaff/hackconV</Code></Text>
    <Text textColor="tertiary" size={10} lineHeight={2}>Contact: <Code>@madipfaff</Code> <Code>pfaffmadison@gmail.com</Code></Text>
  </Slide>
);
