/* eslint-disable max-classes-per-file */
import React from "react";
import Immutable from 'immutable'

class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  shouldComponentUpdate(nextProps, nextState) {
    // 使用Immutable.is  直接比较对象的值
    if (!Immutable.is(this.props.childPrams, nextProps.childPrams)) {
      // 重新渲染
      return true;
    }
    // 不重新渲染
    return false;
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
        <h3>{this.props.childPrams.getIn(['b', 'c', 'd', 'e'])}</h3>
      </div>
    );
  }
}

const data = {
  a: "1",
  b: { c: { d: { e: "e" } } },
}

export default class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      childPrams: Immutable.fromJS(data),
      newchildPrams: Immutable.fromJS(data)
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { childPrams } = this.state;
    const newchildPrams = childPrams.updateIn(['b', 'c', 'd', 'e'], value => `${value}1111`)

    this.setState({
      newchildPrams
    })
  }

  render() {
    return (
      <div>
        <h1>immutable使用示例</h1>
        <button onClick={this.handleClick}>修改子组件的状态</button>

        <Child childPrams={this.state.newchildPrams} />
        <div>{`this.state.childPrams: ${this.state.childPrams.getIn(['b', 'c', 'd', 'e'])}`}</div>
      </div>
    );
  }
}
