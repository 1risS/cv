import React, { Component } from "react";

class Navbar extends Component {
  render() {
    const { fixed } = this.props;
    return (
      <nav className={fixed ? "fixed" : ""}>
        <a href="#about">About</a>
        <a href="#technician">Technician</a>
        <a href="#soundspace">Sound Space</a>
        <a href="#other">Other projects</a>
        <a href="#contact">Contact</a>
      </nav>
    );
  }
}

export default Navbar;
