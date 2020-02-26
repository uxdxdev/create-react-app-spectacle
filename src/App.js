import React, { useEffect, useState } from "react";
import "./App.css";
import { Deck } from "spectacle";
import createTheme from "spectacle/lib/themes/default";

const theme = createTheme(
  {
    primary: "#03A9F4"
  },
  {
    primary: {
      name: "IBM Plex Sans",
      googleFont: true
    }
  }
);

// add slide import in the order in which they are shown,
// intro will be shown first, table will be shown last.
const slidesImports = [
  import("./slides/intro"),
  import("./slides/images"),
  import("./slides/codepane"),
  import("./slides/componentplayground"),
  import("./slides/backgroundimage"),
  import("./slides/flexiblelayout"),
  import("./slides/blockquote"),
  import("./slides/inlinemarkdown"),
  import("./slides/transitions"),
  import("./slides/slideset"),
  import("./slides/table")
];

const App = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const importedSlides = [];
    Promise.all(slidesImports).then(slidesImportsResolved => {
      slidesImportsResolved.forEach(slide => {
        importedSlides.push(slide.default);
      });
      setSlides(importedSlides);
    });
  }, []);

  return (
    <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
      {slides.map((slide, index) => {
        return React.cloneElement(slide, { key: index });
      })}
    </Deck>
  );
};

export default App;
