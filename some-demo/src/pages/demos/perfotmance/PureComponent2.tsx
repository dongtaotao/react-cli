/* eslint-disable max-classes-per-file */
import React from "react";

class Child extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    {
      /*
        尽管 props.childPrams 的值不同了,但是每次传进来的 props.childPrams 引用地址是相同的,因此不会渲染
      */
    }
    console.log("子组件渲染了");
    return (
      <div style={{ margin: 10, padding: 10 }}>
        <h3>{this.props.childPrams.b.c.d.e}</h3>
      </div>
    );
  }
}

const data = {
  a: "1",
  b: { c: { d: { e: "e" } } },
};

export default class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      childPrams: data,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // 修改原来的状态
    this.state.childPrams.b.c.d.e = "eeeee";
  }

  render() {
    return (
      <div>
        <h1>直接修改引用类型的 state/props导致的后果</h1>
        <h2>尽管 props.childPrams 的值被修改了,,但是引用地址还是相同的,导致子组件不会更新</h2>

        <button onClick={this.handleClick}>修改子组件的状态</button>

        <Child childPrams={this.state.childPrams} />
        <div>{`this.state.childPrams: ${this.state.childPrams.b.c.d.e}`}</div>
      </div>
    );
  }
}
