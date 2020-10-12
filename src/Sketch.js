import React, { Component } from "react";
import p5 from "p5";

class Sketch extends Component {
  componentDidMount() {
    const { children } = this.props;
    this.canvas = new p5(children, this.container);
  }

  componentDidUpdate() {
    const { children } = this.props;
    this.canvas.remove();
    this.canvas = new p5(children, this.container);
  }

  componentWillUnmount() {
    this.canvas.remove();
  }

  render() {
    return (
      <div
        ref={(e) => {
          this.container = e;
        }}
      />
    );
  }
}

export default Sketch;
