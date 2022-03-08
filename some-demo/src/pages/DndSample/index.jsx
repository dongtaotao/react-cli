import React, { Component } from "react";

import "./index.css"

const list = [];
for (let i = 0; i < 10; i++) {
  list.push(`Item ${i + 1}`);
}

const move = (arr, startIndex, toIndex) => {
  arr = arr.slice();
  arr.splice(toIndex, 0, arr.splice(startIndex, 1)[0]);
  return arr;
};

const lineHeight = 42;
class DndSample extends Component {
  constructor(props) {
    super(props);
    this.state.list = list;
  }
  state = {
    dragging: false,
    draggingIndex: -1,
    startPageY: 0,
    offsetPageY: 0,
  };

  handleMounseDown = (evt, index) => {
    this.setState({
      // 是否处于拖放状态
      dragging: true,
      // 鼠标的开始位置
      startPageY: evt.pageY,
      // 鼠标的当前位置
      currentPageY: evt.pageY,
      // 当前被拖放元素的数组下标
      draggingIndex: index,
    });

  };
  // 结束拖放
  handleMouseUp = () => {
    this.setState({ dragging: false, startPageY: 0, draggingIndex: -1 });
  };
  handleMouseMove = evt => {
    // 鼠标当前位置 减去鼠标开始位置的 差值(偏移值)
    let offset = evt.pageY - this.state.startPageY;
    const draggingIndex = this.state.draggingIndex;
    /* 如果偏移值 大于数据项的行高，

    则调整位置，向下移动
    */
    if (offset > lineHeight && draggingIndex < this.state.list.length - 1) {
      // move down
      offset -= lineHeight;
      this.setState({
        // 调换数组元素的位置
        list: move(this.state.list, draggingIndex, draggingIndex + 1),
        draggingIndex: draggingIndex + 1,
        startPageY: this.state.startPageY + lineHeight,
      });
    } else if (offset < -lineHeight && draggingIndex > 0) {
      /* 如果偏移值 小于数据项的行高，

      则调整位置，向上移动
      */
      // move up
      offset += lineHeight;
      this.setState({
        list: move(this.state.list, draggingIndex, draggingIndex - 1),
        draggingIndex: draggingIndex - 1,
        startPageY: this.state.startPageY - lineHeight,
      });
    }
    this.setState({ offsetPageY: offset });
  };

  // 设置被拖动时的元素 跟随鼠标移动时的样式
  getDraggingStyle(index) {
    if (index !== this.state.draggingIndex) return {};
    return {
      backgroundColor: "#eee",
      transform: `translate(10px, ${this.state.offsetPageY}px)`,
      opacity: 0.5,
    };
  }

  render() {
    return (
      <div className="dnd-sample">
        <ul>
          {this.state.list.map((text, i) => (
            <li
              key={text}
              onMouseDown={evt => this.handleMounseDown(evt, i)}
              style={this.getDraggingStyle(i)}
            >
              {text}
            </li>
          ))}
        </ul>
        {this.state.dragging && (
          <div
            className="dnd-sample-mask"
            onMouseMove={this.handleMouseMove}
            onMouseUp={this.handleMouseUp}
          />
        )}
      </div>
    );
  }
}

export default DndSample;
