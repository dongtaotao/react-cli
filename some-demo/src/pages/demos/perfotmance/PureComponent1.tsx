/* eslint-disable max-classes-per-file */
import React from "react";
// 深拷贝工具
const deepClone = (obj) => {
  let clone = obj;
  if (obj && typeof obj === "object") {
    clone = new obj.constructor();

    Object.getOwnPropertyNames(obj).forEach(
      (prop) => (clone[prop] = deepClone(obj[prop])),
    );
  }
  return clone;
};

class Child extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    {
      /*
        尽管 props.childPrams 的值是相同的,但是每次传进来的 props.childPrams 引用地址不相同,因此会重新渲染
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
      newchildPrams: data,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // 避免修改原来的状态,我们深拷贝生成一个新的对象
    const newchildPrams = deepClone(this.state.childPrams);

    newchildPrams.b.c.d.e = "eeeee";
    this.setState({
      newchildPrams,
    });
  }

  render() {
    return (
      <div>
        <h1>给子组件传递复杂的引用类型</h1>
        <h2>尽管 props.childPrams 的值是相同的,但是子组件还是会渲染</h2>

        <button onClick={this.handleClick}>修改子组件的状态</button>

        <Child childPrams={this.state.newchildPrams} />
        <div>
          {`this.state.childPrams.b.c.d.e:  ${this.state.childPrams.b.c.d.e}`}
        </div>
        <hr />
        <div>
          {`this.state.newchildPrams.b.c.d.e:  ${this.state.newchildPrams.b.c.d.e}`}
        </div>
      </div>
    );
  }
}
