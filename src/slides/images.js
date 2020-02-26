import React from "react";
import { Heading, Slide, Image } from "spectacle";

export default (
  <Slide
    id="wait-what"
    transition={["slide"]}
    bgColor="black"
    notes="You can even put notes on your slide. How awesome is that?"
  >
    <Image
      src={
        "https://github.com/FormidableLabs/spectacle/raw/master/example/assets/kat.png"
      }
      margin="0px auto 40px"
      height="293px"
    />
    <Heading size={2} caps fit textColor="primary" textFont="primary">
      Wait what?
    </Heading>
  </Slide>
);
