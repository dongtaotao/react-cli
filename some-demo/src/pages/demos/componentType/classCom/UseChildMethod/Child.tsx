import React, { Component } from 'react';

class Index extends Component {
  childDoSomething = () => {
    console.log('子组件方法');
  };

  render() {
    return (
      <div>
        <h2>子组件</h2>
      </div>
    );
  }
}

export default Index;
