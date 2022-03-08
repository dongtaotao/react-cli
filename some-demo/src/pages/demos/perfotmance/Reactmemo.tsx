
import React, { useState } from 'react';

const ChildOrigin = ({ color }) => {
  const [count, setCount] = useState(1);

  console.log('子组件渲染了');
  return (
    <div style={{ margin: 10, padding: 10 }}>
      <div style={{ color }}>文字字字字字</div>
      <button
        onClick={() => { setCount((prev) => prev + 1) }}>
        Count: {count}
      </button>
    </div>
  );
}

const Child = React.memo(ChildOrigin)


function getRandomColor() {
  const colorAngle = Math.floor(Math.random() * 360);
  return `hsla(${colorAngle},100%,50%,1)`;
}

const Parent = () => {
  const [childColor, setChildColor] = useState('red');
  const [parentWord, setParentWord] = useState('');

  const handleClick = () => {
    const newcolor = getRandomColor()
    setChildColor(newcolor);
  }

  const handleClick2 = () => {
    const newparentWord = `${(Math.random() * 100).toFixed(3)}`
    setParentWord(newparentWord)
  }

  return (
    <div>
      <h1>Reactmemo模拟PureComponent</h1>
      <h2>自动进行props的浅比较来决定是否更新</h2>
      <button onClick={handleClick} >修改子组件的状态</button>
      <Child color={childColor} />
      <button onClick={handleClick2} >修改父组件自己的状态</button>
      <div>{parentWord}</div>
    </div >
  );
}

export default Parent


