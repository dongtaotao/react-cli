import React, { useContext } from 'react';
import { LocaleContext } from './LocaleProvider'

const CusForm = () => {
  const locale = useContext(LocaleContext);

  return (<div>
    <div>
      {locale.phone}<input type="number" name="" id="" />
    </div>
    <div>
      {locale.name}<input type="text" name="" id="" />
    </div>
    <div>
      <button>{locale.submit}</button>
      <button>{locale.cancel}</button>
    </div>
  </div>);
}

export default CusForm
