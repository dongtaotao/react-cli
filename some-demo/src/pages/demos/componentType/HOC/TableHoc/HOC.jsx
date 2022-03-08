import React from 'react';

// 静态模拟数据
const mockData = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Disabled User',
    age: 99,
    address: 'Sidney No. 1 Lake Park',
  },
];

const PPHoc = (param) => (WrappedComponent) =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        // antd-table 的数据
        dataSource: [],
        // antd-table 复选框选中的数据
        selectedRows: [],
      };
    }
    /*
    HOC 创建的容器组件会与任何其他组件一样，会显示在` React Developer Tools` 中。
    为了方便调试，通过`displayName`设置一个名称，以表明它是 HOC 的产物。
    */
    static displayName = `PPHoc(${WrappedComponent.displayName})`;

    componentDidMount() {
      this.fetchData();
    }

    componentDidUpdate(prevProps) {
      // （不要忘记比较 props）
      if (this.props.apiUrl !== prevProps.apiUrl) {
        this.fetchData();
      }
    }

    // antd-table 的复选框选择事件
    rowSelectionChange(selectedRowKeys, selectedRows) {
      this.setState({
        selectedRows,
      });
    }
    // ------调用API接口获取数据，这里为了演示方便，直接使用模拟数据
    async fetchData() {
      // const { apiUrl } = this.props;
      // if (apiUrl) {
      //   const response = await fetch(apiUrl).then((res) => res.json());
      //   if (Array.isArray(response)) {
      //     this.setState({
      //       dataSource: response,
      //     });
      //   }
      // }

      this.setState({
        dataSource: mockData,
      });
    }

    //
    addData() {}

    deleteData() {}

    modifyData() {}
    //-----------

    render() {
      // 构造出新组件的props
      const newProps = {
        // 原始组件的props
        ...this.props,
        ref: (instanceComponent) => {
          this.instanceComponent = instanceComponent;
        },
        // 高阶组件的state
        ...this.state,
        rowSelection: { onChange: this.rowSelectionChange.bind(this) },
      };

      return <WrappedComponent {...newProps} />;
    }
  };

export default PPHoc;
