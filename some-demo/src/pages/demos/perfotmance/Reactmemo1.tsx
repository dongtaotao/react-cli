
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

function areEqual(prevProps, nextProps) {
  /*
  如果把 nextProps 传入 render 方法的返回结果与
  将 prevProps 传入 render 方法的返回结果一致则返回 true，
  否则返回 false
  */
  if (prevProps.color !== nextProps.color) {
    // 重新渲染
    return false;
  }
  // 不重新渲染
  return true;
}

const Child = React.memo(ChildOrigin, areEqual)


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
      <h1>Reactmemo模拟shouldComponentUpdate</h1>
      <h2>可以进行props的详细比较来决定是否更新</h2>
      <button onClick={handleClick} >修改子组件的状态</button>
      <Child color={childColor} />
      <button onClick={handleClick2} >修改父组件自己的状态</button>
      <div>{parentWord}</div>
    </div >
  );
}

export default Parent


