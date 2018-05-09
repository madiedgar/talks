import React from "react";
import { Heading, Slide, Text } from "spectacle";
import preloader from "spectacle/lib/utils/preloader";

const images = {
  alumni: require("../../../assets/elderly-people-on-computer.jpg")
};
preloader(images);
export default (
  <Slide transition={["fade"]} bgImage={images.alumni}>
    <Heading size={3} textColor="primary" caps>Who are "Alumni"?</Heading>
  </Slide>
);
