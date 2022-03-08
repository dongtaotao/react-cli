import React from 'react';

// 一个打印组件 props 的日志-高阶组件
function logProps(Component) {
  class LogProps extends React.Component {
    componentDidUpdate(prevProps) {
      if (prevProps.label !== this.props.label) {
        console.log('old props:', prevProps);
        console.log('new props:', this.props);
      }
    }

    render() {
      const { forwardedRef, ...rest } = this.props;

      // 将自定义的 prop 属性 “forwardedRef” 定义为 ref
      return <Component ref={forwardedRef} {...rest} />;
    }
  }

  // 注意 React.forwardRef 回调的第二个参数 “ref”。
  // 我们可以将其作为常规 prop 属性传递给 LogProps，例如 “forwardedRef”
  // 然后它就可以被挂载到被 LogProps 包裹的子组件上。
  return React.forwardRef((props, ref) => {
    return <LogProps {...props} forwardedRef={ref} />;
  });
}

export default logProps;
