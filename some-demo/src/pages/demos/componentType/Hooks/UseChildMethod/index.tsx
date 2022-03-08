import React from 'react';
import Child from './Child';

const Index = () => {
  const childRef = React.createRef<JSX.Element | null>(null);

  const handleClick = () => {
    childRef?.current?.childDo1();
    childRef?.current?.childDo2();
  };

  return (
    <div>
      <Child ref={childRef} />
      <button onClick={handleClick}>点击调用子组件的方法</button>
    </div>
  );
};

export default Index;
