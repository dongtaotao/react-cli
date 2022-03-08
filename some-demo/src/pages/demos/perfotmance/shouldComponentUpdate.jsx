/* eslint-disable max-classes-per-file */
import React from "react";

class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 1 };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.color !== nextProps.color) {
      // 重新渲染
      return true;
    }
    if (this.state.count !== nextState.count) {
      // 重新渲染
      return true;
    }
    // 不重新渲染
    return false;
  }

  render() {
    console.log("子组件渲染了");
    return (
      <div style={{ margin: 10, padding: 10 }}>
        <div style={{ color: this.props.color }}>文字字字字字</div>
        <button
          color={this.props.color}
          onClick={() =>
            this.setState((state) => ({ count: state.count + 1 }))
          }>
          Count: {this.state.count}
        </button>
      </div>
    );
  }
}

function getRandomColor() {
  const colorAngle = Math.floor(Math.random() * 360);
  return `hsla(${colorAngle},100%,50%,1)`;
}

export default class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      childColor: "red",
      parentWord: "",
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
  }

  handleClick() {
    this.setState({
      childColor: getRandomColor(),
    });
  }

  handleClick2() {
    this.setState({ parentWord: `${(Math.random() * 100).toFixed(3)}` });
  }

  render() {
    return (
      <div>
        <h1>shouldComponentUpdate使用示例</h1>
        <button onClick={this.handleClick}>修改子组件的状态</button>
        <Child color={this.state.childColor} />
        <button onClick={this.handleClick2}>修改父组件自己的状态</button>
        <div>{this.state.parentWord}</div>
      </div>
    );
  }
}
