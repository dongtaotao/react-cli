import React from 'react'


const Child = (props) => {
  return (<div>
    {props.children('小李')}
  </div>);
}

export default () => {
  return (<Child>
    你好
    {(name) => <h2>{name}</h2>}
  </Child>)
}
