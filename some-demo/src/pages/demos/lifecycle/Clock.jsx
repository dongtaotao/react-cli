import React from 'react'


export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date()
    }

    this.interval = null;
  }

  componentDidMount() {
    setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    this.interval = null;

  }

  componentDidUpdate() {

  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    return (
      <>
        <h1>hello world</h1>
        {this.state.date.toLocaleTimeString()}
      </>
    );
  }
}


