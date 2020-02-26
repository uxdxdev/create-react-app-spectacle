import React, { Component } from "react";
import { Heading, Slide, SlideSet, List, ListItem, Appear } from "spectacle";

class Interactive extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      count: this.state.count + 1
    });
  }
  render() {
    const styles = {
      padding: 20,
      background: "black",
      minWidth: 300,
      marginTop: 20,
      textTransform: "uppercase",
      border: "none",
      color: "white",
      outline: "none",
      fontWeight: "bold",
      fontSize: "2em"
    };
    return (
      <div>
        {this.state.count < 5 ? (
          <div>
            <Heading size={5} textColor="black">
              The button has been clicked {this.state.count} times
            </Heading>
            <button style={styles} type="button" onClick={this.handleClick}>
              Click Me
            </button>
          </div>
        ) : (
          <Heading size={5} fit caps textColor="black">
            Easy there pal
          </Heading>
        )}
      </div>
    );
  }
}

export default (
  <SlideSet>
    <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
      <List>
        <Appear>
          <ListItem>Inline style based theme system</ListItem>
        </Appear>
        <Appear>
          <ListItem>Autofit text</ListItem>
        </Appear>
        <Appear>
          <ListItem>Flexbox layout system</ListItem>
        </Appear>
        <Appear>
          <ListItem>PDF export</ListItem>
        </Appear>
        <Appear>
          <ListItem>And...</ListItem>
        </Appear>
      </List>
    </Slide>
    <Slide transition={["slide"]} bgColor="primary">
      <Heading size={1} caps fit textColor="tertiary">
        Your presentations are interactive
      </Heading>
      <Interactive />
    </Slide>
  </SlideSet>
);
