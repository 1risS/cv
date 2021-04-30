import React, { Component } from "react";

class Navbar extends Component {
  render() {
    const { fixed } = this.props;
    return (
      <nav className={fixed ? "fixed" : ""} id="navBar">
        <a href="#about" className="navBarContent">
          About
        </a>
        <a href="#technician" className="navBarContent">
          Technician
        </a>
        <a href="#soundspace" className="navBarContent">
          Sound Space
        </a>
        <a href="#other" className="navBarContent">
          Other projects
        </a>
        <a href="#contact" className="navBarContent">
          Contact
        </a>
      </nav>
    );
  }
}

export default Navbar;
