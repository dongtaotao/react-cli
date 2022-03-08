
import React, { useState } from 'react';
import Immutable from 'immutable'

const ChildOrigin = ({ childPrams }) => {

  console.log('子组件渲染了');
  return (
    <div style={{ margin: 10, padding: 10 }}>
      <h3>{childPrams.getIn(['b', 'c', 'd', 'e'])}</h3>
    </div>
  );
}

function areEqual(prevProps, nextProps) {
  // 使用Immutable.is  直接比较对象的值
  if (!Immutable.is(prevProps.childPrams, nextProps.childPrams)) {
    return false;
  }
  // 不重新渲染
  return true;
}

const Child = React.memo(ChildOrigin, areEqual)

const data = Immutable.fromJS({
  a: "1",
  b: { c: { d: { e: "e" } } },
})


const Parent = () => {
  const [childPrams, setChildPrams] = useState(data);
  const [newchildPrams, setNewchildPrams] = useState(data);

  const handleClick = () => {
    const newchildPramsData = childPrams.updateIn(['b', 'c', 'd', 'e'], value => `${value}${(Math.random() * 100).toFixed(3)}`)
    setNewchildPrams(newchildPramsData)
  }

  return (
    <div>
      <h1>React.memo+ immutable 使用示例</h1>
      <button onClick={handleClick}>修改子组件的状态</button>

      <Child childPrams={newchildPrams} />
      <div>{`childPrams: ${childPrams.getIn(['b', 'c', 'd', 'e'])}`}</div>
    </div>
  );
}

export default Parent


