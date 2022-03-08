import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { Button, message } from 'antd'

import type { Person, AppState } from "./model/data.d"

import {
  addPersonAction,
  deletePersonAction,
  getPersonAction
} from './model/actions'



const Index: React.FC = () => {
  const [newPerson, setNewPerson] = React.useState("");
  const dispatch = useDispatch();
  const { personList } = useSelector((state: AppState) => state.person);

  console.log('====================================');
  console.log(personList);
  console.log('====================================');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const str = newPerson;
    str.replace(/\s+/g, '')

    if (!str) {
      message.warning('请输入有效字符')
      return;
    }

    dispatch(addPersonAction(newPerson));
    setNewPerson("");
  };


  return (
    <div>
      <div>
        <ul>
          {personList.map(person => (
            <li key={person.id}>
              <span>{person.name}</span>
              <button onClick={() => { dispatch(deletePersonAction(person.id)) }}>删除</button>
            </li>
          ))}
        </ul>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="请输入名称"
            value={newPerson}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setNewPerson(e.currentTarget.value) }}
          />
          <Button type="primary" htmlType="submit">添加</Button>
        </form>
        <div>
          <Button type="primary" onClick={() => {
            dispatch(getPersonAction());
          }}>从后台获取数据</Button>
        </div>
      </div>
    </div>
  );
}


export default Index
