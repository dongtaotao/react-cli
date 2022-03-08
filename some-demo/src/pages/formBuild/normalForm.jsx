import React from "react";

// 手动实现一个form逻辑，需要一个个捕获输入事件及其改变的值！ 麻烦得很
export default class FormSubmit extends React.PureComponent {
  state = {
    name: "",
    error: null,
  };

  handleNameChange = evt => {
    this.setState({
      name: evt.target.value,
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    if (!this.state.name) {
      this.setState({ error: "Name is required" });
      return;
    }

    this.setState(
      {
        error: null,
      },
      () => {
        console.log("Form submit: ", this.state);
      },
    );
  };
  render() {
    return (
      <form className="comment-box" onSubmit={this.handleSubmit}>
        <div>
          <label>Name:</label>
          <input value={this.state.name} onChange={this.handleNameChange} />
        </div>
        {this.state.error && (
          <div style={{ color: "red" }}>{this.state.error}</div>
        )}
        <div>
          <button>Submit</button>
        </div>
      </form>
    );
  }
}
