import React from "react";
import { Heading, Slide, Text } from "spectacle";
import preloader from "spectacle/lib/utils/preloader";

const images = {
  pearlHacks: require("../../../assets/pearlHacks.jpg")
};
preloader(images);
export default (
  <Slide transition={["fade"]} bgImage={images.pearlHacks}>
    <Heading size={6} textColor="primary" caps>Hi. My name is Madi Pfaf</Heading>
  </Slide>
);
