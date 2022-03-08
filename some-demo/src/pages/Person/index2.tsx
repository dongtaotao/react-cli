import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Button, message } from 'antd'

import {
  addPersonAction,
  deletePersonAction,
  getPersonAction
} from './model/actions'




const Index: React.FC = (props) => {
  const { person,
    handleAddPerson,
    handleDelPerson,
    handleGetPerson } = props;

  const { personList } = person;


  const [newPerson, setNewPerson] = React.useState("");

  console.log('====================================');
  console.log(props);
  console.log('====================================');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const str = newPerson;
    str.replace(/\s+/g, '')

    if (!str) {
      message.warning('请输入有效字符')
      return;
    }

    handleAddPerson(newPerson)
    setNewPerson("");
  };


  return (
    <div>
      <div>
        <ul>
          {personList.map(person => (
            <li key={person.id}>
              <span>{person.name}</span>
              <button onClick={() => { handleDelPerson(person.id) }}>删除</button>
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
            handleGetPerson();
          }}>从后台获取数据</Button>
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    person: state.person
  }
}

function mapDispatchToProps(dispatch) {
  // return {
  //   actions: bindActionCreators({
  //     addPersonAction,
  //     deletePersonAction,
  //     getPersonAction
  //   }, dispatch),
  // }
  return {
    handleAddPerson: data => {
      dispatch(addPersonAction(data))
    },
    handleDelPerson: id => {
      dispatch(deletePersonAction(id))
    },
    handleGetPerson: () => {
      dispatch(getPersonAction())
    },
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Index);
