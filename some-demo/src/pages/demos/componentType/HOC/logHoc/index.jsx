import React, { useState } from 'react';

import hocLog from './hocLog'

class MyButton extends React.Component {

  getData = () => {
    console.log('我被调用了');
  }

  render() {
    const { label, handleClick } = this.props;
    return (<>
      <button onClick={handleClick} >{label}</button>
    </>)
  }
}

const NewMyButton = hocLog(MyButton);


const Index = () => {
  const buttonRef = React.createRef();

  const [label, setLable] = useState("请点击我");

  const handleClick = () => {

    buttonRef.current.getData()

    setLable('我已经被点击过了')
  }

  return (<NewMyButton
    label={label}
    handleClick={handleClick}
    ref={buttonRef}
  />)
};




export default Index;


