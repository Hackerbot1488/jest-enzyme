import React, { Component } from "react";

export class Info extends Component {
  state = {
    value: "Test value",
    width: 0,
  };

  componentDidMount() {
    this.handleChangeTitle();
    window.addEventListener("resize", this.handleWidth);
  }

  componentDidUpdate() {
    this.handleChangeTitle();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWidth);
  }

  handleChangeTitle = () => {
    document.title = this.state.value;
  };

  handleWidth = () => {
    this.setState({
      width: window.innerWidth,
    });
  };

  render() {
    return <h1>{this.state.width}</h1>;
  }
}

