import React, { Component } from 'react';
import { Table } from 'antd';

import PPHoc from './HOC';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text) => <a href="#">{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

class AntTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      originalState: 23333,
    };
  }

  render() {
    const { dataSource, rowSelection } = this.props;
    return (
      <>
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={dataSource}
        />
      </>
    );
  }
}

const config = { type: 'add-style', style: { color: 'red' } };

const Index = PPHoc(config)(AntTable);

export default Index;
