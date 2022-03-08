import React, { Component } from 'react';
import Child from './Child1';

class Index extends Component {
  constructor(props) {
    super(props);

    this.childRef = null;
  }

  handleClick = () => {
    this.childRef.childDoSomething();
  };

  render() {
    return (
      <div>
        <Child
          handleRef={(ref) => {
            this.childRef = ref;
          }}
        />
        <button onClick={this.handleClick}>点击调用子组件的方法</button>
      </div>
    );
  }
}
export default Index;
