import React, {Component} from 'react';
import {Table, Tag} from 'antd';

const columns = [
  {
    title: 'id',
    dataIndex: 'id',
    render: text => <Tag color="blue">{'编号' + text}</Tag>,
  },
  {
    title: 'title',
    dataIndex: 'title',
  }
];

class TableBox extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Table rowKey={record => record.id} columns={columns} dataSource={this.props.data}/>
      </div>
    );
  }
}

export default TableBox;
