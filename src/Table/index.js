import React, {Component} from 'react';
import {connect} from 'react-redux';
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

  render() {
    return (
      <div>
        <Table rowKey={record => record.id} columns={columns} dataSource={this.props.data}/>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    data: state.reducer2
  }
);

const mapDispatchToProps ={
  changeData:data=>{

  }
}

export default connect(mapStateToProps)(TableBox);
