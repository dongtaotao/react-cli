/* eslint-disable max-classes-per-file */
import React from "react";

class Child extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    console.log('子组件渲染了');
    return (
      <div style={{ margin: 10, padding: 10 }}>
        <h3>注意文字颜色</h3>
        {this.props.footer()}
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
      color: 'red',

    };
    this.handleClick = this.handleClick.bind(this);
    this.footer = this.footer.bind(this);
  }

  handleClick() {

    this.setState({
      color: getRandomColor()
    })
  }

  // 定义为实例方法，`this.footer`始终
  // 当我们在渲染中使用它时，它指的是相同的函数
  footer() {
    console.log('====================================');
    console.log(this.state.color);
    console.log('====================================');
    return <h3 style={{ color: this.state.color }}>我来组成脚</h3>;
  }

  render() {
    return (
      <div>
        <h1>Render Props 与 React.PureComponent 一起使用时</h1>
        <h2>将render prop 作为实例方法产生新的问题</h2>
        <h2>
          如果render prop依赖了状态, 但是 render prop的 函数只绑定可一次,
          <br />
          导致 render prop不会更新
        </h2>
        <hr />
        <button onClick={this.handleClick}>修改子组件的状态</button>

        <Child footer={this.footer} />

      </div>
    );
  }
}
