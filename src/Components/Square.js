// 1: a.) Navigate to localhost:3000 in the web browser.
// b.) Add a header and a square on the screen with the word "Off" in the middle.
// c.) When I click the square the word toggles from "Off" to "On" and then back to "Off" again.
// d.) If the text says "Off", the background color of the box is white. Else the text says "On", the background color of the box is yellow.

import React, { Component } from "react";
import "./Square.css";

export default class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: "Off",
      boxColor: "White",
    };
  }

  switchOnOff = () => {
    if (this.state.toggle === "Off") {
      this.setState({ toggle: "On", boxColor: "Yellow" });
    } else {
      this.setState({ toggle: "Off", boxColor: "White" });
    }
  };

  render() {
    return (
      <>
        <button
          className="Square"
          style={{ backgroundColor: this.state.boxColor }}
          onClick={this.switchOnOff}
        >
          {this.state.toggle}
        </button>
      </>
    );
  }
}
