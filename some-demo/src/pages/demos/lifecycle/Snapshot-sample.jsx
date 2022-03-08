import React, { PureComponent } from "react";

import styles from "./SnapshotSample.less";

/*

有一个现实最新动态的列表-list,

1. 每来一条新动态的时候都出现在 list 的最顶端
2. list 支持滚动，以便用户查看历史消息

如果没有使用`getSnapshotBeforeUpdate` 那么每来一条消息，滚动条都会不停的往下滚动，导致无法固定在当前位置

因为每来一条消息都会在最顶部产生一个新的 DOM 节点，

为了避免这个问题，那我们就需要知道

1. 在页面更新之前知道当前整个容器的高度，
2. 在页面更新之后知道容器的新的高度
3. 对比新旧高度的区别
4. 每次页面更新完成后都将高度的差 加到容器的`scrollTop` 上

这样就可以保证 即使有新消息的时候，滚动条也是固定在当前位置的
*/


export default class SnapshotSample extends PureComponent {
  constructor(props) {
    super(props);
    this.listRef = React.createRef();
    this.state = {
      list: [],
    };
  }



  handleNewMessage() {
    this.setState(prev => ({
      list: [`msg ${prev.list.length}`, ...prev.list],
    }));
  }

  componentDidMount() {
    for (let i = 0; i < 20; i++) this.handleNewMessage();
    this.interval = setInterval(() => {
      if (this.state.list.length > 200) {
        clearInterval(this.interval);
        return;
      }
      this.handleNewMessage();
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    //  我们是否在 list 中添加新的 items ？
    //  捕获滚动​​位置以便我们稍后调整滚动位置。
    if (prevState.list.length < this.state.list.length) {
      const list = this.listRef.current;
      return list.scrollHeight - list.scrollTop;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // 如果我们 snapshot 有值，说明我们刚刚添加了新的 items，
    // 调整滚动位置使得这些新 items 不会将旧的 items 推出视图。
    // （这里的 snapshot 是 getSnapshotBeforeUpdate 的返回值）
    if (snapshot !== null) {
      const list = this.listRef.current;
      list.scrollTop = list.scrollHeight - snapshot;
    }
  }

  render() {
    return (
      <div className={styles.snapshotSample} ref={this.listRef}>
        {this.state.list.map(msg => (
          <div key={msg}>{msg}</div>
        ))}
      </div>
    );
  }
}
