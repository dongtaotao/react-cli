
import React, { useState } from 'react';

const Child = React.memo(({ header, footer, count }) => {

  console.log('子组件渲染了');
  return (
    <div style={{ margin: 10, padding: 10 }}>
      {header(count)}
      <h3>body</h3>
      {footer()}
    </div>
  );
})


const Parent = () => {
  const [count, setCount] = useState(1);

  const header = (data) => <h2>我来组成头部: {data}</h2>
  const newHeader = React.useCallback(() => header(count), [count])

  const footer = () => <h2>我来组成腿部</h2>
  const newFooter = React.useCallback(footer, [])

  return (
    <div>
      <h1>React.memo+ React.useCallback</h1>
      <h2>给React.useCallback传递参数的例子</h2>
      <button onClick={() => { setCount((prev) => prev + 1) }}>修改父组件自己的状态：{count}</button>
      <Child header={newHeader} footer={newFooter} count={count} />
    </div>
  );
}

export default Parent


