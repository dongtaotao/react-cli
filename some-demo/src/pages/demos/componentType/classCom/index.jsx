import React from "react";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "hello world",
    };
  }
  handleClick() {
    // Cannot read property 'state' of undefined
    console.log(this.state);
  }
  render() {
    return <button onClick={this.handleClick}>点击我</button>;
  }
}
export default Index;
