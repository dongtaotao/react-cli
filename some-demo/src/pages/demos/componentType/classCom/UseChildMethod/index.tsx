import React, { Component } from 'react';
import Child from './Child';

class Index extends Component {
  constructor(props) {
    super(props);

    this.childRef = React.createRef();
  }

  handleClick = () => {
    this.childRef.current.childDoSomething();
  };

  render() {
    return (
      <div>
        <Child ref={this.childRef} />
        <button onClick={this.handleClick}>点击调用子组件的方法</button>
      </div>
    );
  }
}
export default Index;
