
import React, { useState } from 'react';

const Child = React.memo(({ header, footer }) => {

  console.log('子组件渲染了');
  return (
    <div style={{ margin: 10, padding: 10 }}>
      {header()}
      <h3>body</h3>
      {footer()}
    </div>
  );
})


const Parent = () => {
  const [count, setCount] = useState(1);

  const header = () => <h2>我来组成头部</h2>
  const newHeader = React.useCallback(header, [])

  const footer = () => <h2>我来组成腿部</h2>
  const newFooter = React.useCallback(footer, [])

  return (
    <div>
      <h1>React.memo+ React.useCallback</h1>
      <h2>使用React.useCallback包裹render prop不会导致重复渲染</h2>
      <button onClick={() => { setCount((prev) => prev + 1) }}>修改父组件自己的状态：{count}</button>
      <Child header={newHeader} footer={newFooter} />
    </div>
  );
}

export default Parent


