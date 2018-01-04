import React, { PureComponent } from 'react';
import moment from 'moment';
import { Table, Alert, Badge, Divider } from 'antd';
import styles from './index.less';

// RegisterSumTable

export default class StandardTable extends React.PureComponent {
  state = {
    data: [],
    pagination: {},
    loading: false,
  };
  // componentDidMount() {
  //   this.fetch();
  // }

  // handleTableChange = (pagination, filters, sorter) => {
  //   const pager = { ...this.state.pagination };
  //   pager.current = pagination.current;
  //   this.setState({
  //     pagination: pager,
  //   });
  //   this.fetch({
  //     results: pagination.pageSize,
  //     page: pagination.current,
  //     sortField: sorter.field,
  //     sortOrder: sorter.order,
  //     ...filters,
  //   });
  // }

  // fetch = (params = {}) => {
  //   console.log('params:', params);
  //   this.setState({ loading: true });
  //   request({
  //     url: 'https://randomuser.me/api',
  //     method: 'get',
  //     data: {
  //       results: 10,
  //       ...params,
  //     },
  //     type: 'json',
  //   }).then((data) => {
  //     const pagination = { ...this.state.pagination };
  //     // Read total count from server
  //     // pagination.total = data.totalCount;
  //     pagination.total = 200;
  //     this.setState({
  //       loading: false,
  //       data: data.results,
  //       pagination,
  //     });
  //   });
  // }

  render() {
    const { data: { list, pagination }, loading } = this.props;
    console.log("渲染table，")
    // const paginationProps = {
    //   showSizeChanger: true,
    //   showQuickJumper: true,
    //   ...pagination,
    // };

    const columns =
      [
        { title: '预约挂号统计表',

          children: [{
            title: '序号',
            dataIndex: 'index',
            width: 10,
            fixed: 'left',
            sortOrder:'ascend',
            sorter: (a, b) => a.index - b.index
          },

            {
            title: '科别',
            dataIndex: 'DEPTNAME',
            // key: 'DEPTNAME',
            width: 80,
            fixed: 'left',
          },
          { title: '时段',
            dataIndex: 'TIME',
            // key: 'BC',
            width: 50,
            fixed: 'left',
          },
          { title: '当日可提供号源数量(个)',

            children: [
              { title: '合计',
                children: [
                  { title: '就诊总数',
                    width: 50,
                    dataIndex: 'KHJJZZS' },
                  { title: '预约总数',
                    width: 50,
                    dataIndex: 'KHJYYZS' },
                ] },
              { title: '普通号',
                children: [{ title: '就诊总数',
                  width: 50,
                  dataIndex: 'KPTJZZS' },
                { title: '预约总数',
                  width: 50,
                  dataIndex: 'KPTYYZS' }] },
              { title: '专家号',
                children: [{ title: '就诊总数',
                  width: 50,
                  dataIndex: 'KZJJJZS' },
                { title: '预约总数',
                  width: 50,
                  dataIndex: 'KZJYYZS' }] },
            ],
          },
          { title: '当日实际就诊人次(人次)',

            children: [{ title: '合计',
              width: 50,
              dataIndex: 'JZHJ' },
            { title: '初诊',
              width: 50,
              dataIndex: 'JZCZ' },
            { title: '复诊',
              width: 50,
              dataIndex: 'JZFZ' },
            { title: '出院复诊',
              width: 50,
              dataIndex: 'JZCYFZ' }],
          },
          { title: '当日实际预约就诊挂号数量(个)',

            children: [{ title: '合计',
              width: 50,
              dataIndex: 'YHJ' },
            { title: '按号源',
              children: [
                { title: '普通号',
                  width: 50,
                  dataIndex: 'YHYPT' },
                { title: '专家号',
                  width: 50,
                  dataIndex: 'YHYZJ' },

              ] },
            { title: '按预约方式',
              children: [{ title: '窗口预约',
                width: 50,
                dataIndex: 'YCKYY' },
              { title: '电话预约',
                width: 50,
                dataIndex: 'YDHYY' },
              { title: '网络预约',
                width: 50,
                dataIndex: 'YWLYY' },
              { title: '其他预约',
                width: 50,
                dataIndex: 'YQTYY' }] },
            { title: '按就诊类别',
              children: [{ title: '初诊预约',
                width: 50,
                dataIndex: 'YLCZYY' },
              { title: '复诊预约',
                width: 50,
                dataIndex: 'YLFZYY' },
              { title: '出院复诊预约',
                width: 50,
                dataIndex: 'YLCYFZYY' },
              ],
            },

            { title: '预约失约号数(个)',
              // dataIndex: '预约失约号数(个)',
              dataIndex: 'YYSYHS',
              width: 50 },

              { title: '预约比例',
              // dataIndex: '预约比例',
              dataIndex: 'YYBL',
              width: 50 },

              { title: '复诊预约率',
              // dataIndex: '复诊预约率',
              dataIndex: 'FZYYL',
              width: 50 },
              { title: '出院复诊率',
              // dataIndex: '出院复诊率',
              dataIndex: 'CYFZL',
              width: 50 },
              { title: '预约失约率',
              dataIndex: 'YYSYL',
              // key: 'YYSYL',
              width: 50 },

            ],
          },
          ] },
      ];
    return (

      <div style={{ margin: 0 }}>
        <hr />
        <br />
        <Table
          columns={columns}
          bordered
          size="middle"
          // scroll={{ x: '130%', y: 240 }}
          // rowKey={record => record.registered}
          dataSource={list}
          pagination={pagination}
          loading={loading}
          // onChange={this.handleTableChange}
        />
      </div>
    );
  }
}
