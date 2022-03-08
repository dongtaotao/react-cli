import React, { useState } from 'react';
import en from './en'
import cn from './cn'

import './index.less'

export const localData = {
  en,
  cn
}

const localDataArray = Object.keys(localData).map((item) => ({ value: item, label: item }))

export const LocaleContext = React.createContext()

export const LocaleProvider = (props) => {
  const [locale, setLocale] = useState(localData.cn);

  const onSelectChange = (e) => {
    const type = e.target.value;
    const data = localData[type]
    if (data) {
      setLocale(data)
    }

  }

  return (
    <LocaleContext.Provider value={locale}>
      <div>
        切换语言
        <select
          className="selectLang"
          onChange={onSelectChange}
          defaultValue='cn'
        >
          {localDataArray.map((item) => (<option key={item.value} value={item.value}>{item.label}</option>))}
        </select>
      </div>
      {props.children}
    </LocaleContext.Provider>
  );
}







