import React, { useImperativeHandle, forwardRef } from 'react';

const Index = (props, ref) => {
  useImperativeHandle(ref, () => ({
    childDo1: () => {
      console.log(`子组件的方法1`);
    },
    childDo2: () => {
      console.log(`子组件的方法2`);
    },
  }));

  return (
    <div>
      <h2>子组件</h2>
    </div>
  );
};

export default forwardRef(Index);
