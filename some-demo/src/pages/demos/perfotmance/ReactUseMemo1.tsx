import React, { useState, useMemo } from "react";


const Child = ({ color }) => {
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

function getRandomColor() {
  const colorAngle = Math.floor(Math.random() * 360);
  return `hsla(${colorAngle},100%,50%,1)`;
}

function Parent({ a, b }) {
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

  // Only re-rendered if `a` changes:
  const child1 = useMemo(() => <Child color={childColor} />, [childColor]);

  return (
    <>
      <div>
        <h1>React.useMemo使用示例</h1>
        <h2>当某个依赖项被改变才更新子组件</h2>
        <button onClick={handleClick} >修改子组件的状态</button>

        <button onClick={handleClick2} >修改父组件自己的状态</button>
        <div>{parentWord}</div>
      </div >

      {child1}

    </>
  );
}

export default Parent
