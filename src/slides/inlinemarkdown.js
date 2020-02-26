import React from "react";
import { Heading, Slide, Markdown } from "spectacle";

export default (
  <Slide transition={["spin", "zoom"]} bgColor="tertiary">
    <Heading caps fit size={1} textColor="primary">
      Inline Markdown
    </Heading>
    <Markdown>
      {`
  ![Markdown Logo](https://cdn.rawgit.com/FormidableLabs/spectacle/master/example/assets/markdown.png)

  You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
  * Lists too!
  * With ~~strikethrough~~ and _italic_
  * And let's not forget **bold**
                  `}
    </Markdown>
  </Slide>
);
