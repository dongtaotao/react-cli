import React from 'react';
import { LocaleProvider } from './LocaleProvider'
import Form from './Form'

import './index.less'

function FormDemo() {
  return (
    <div>
      <Form />
    </div>
  );
}

const Index = () => {
  return (
    <LocaleProvider>
      <FormDemo />
    </LocaleProvider>
  )
}

class Test extends React.Component {
  state = {
    a: 'a'
  }

  render() {
    return (<h2>6666</h2>)
  }
}


export default Index;


