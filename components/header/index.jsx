import React, { useState } from 'react';
import {get} from '../../pages/api'

import { Affix, PageHeader, Descriptions } from 'antd';

import styles from './header.module.css';

const HeaderPage = (props) => {
  const [headerInfo, setHeaderInfo] = useState([
    {
      title: '性别',
      msg: '男',
    },
    {
      title: '邮箱',
      msg: '525534167@qq.com',
    },
    {
      title: '生日',
      msg: '1994-05-01',
    },
    {
      title: '婚育',
      msg: '已婚/已育',
    },
    {
      title: '年限',
      msg: '3年',
    },
    {
      title: '期望',
      msg: '一亿/月/税后',
    },
  ]);
  get('http://localhosts:3001/basicInfoList')
      .then(res => {
        console.log(res)
      })
  return (
    <>
      <Affix offsetTop={0}>
        <div className={styles.wrapper}>
          <PageHeader
            ghost={false}
            title="杨皓明"
            subTitle="一个肥胖的前端开发攻城狮"
          >
            <Descriptions size="small" column={3}>
              {headerInfo.map((item) => (
                <Descriptions.Item key={item.title} label={item.title}>
                  {item.msg}
                </Descriptions.Item>
              ))}
            </Descriptions>
          </PageHeader>
        </div>
      </Affix>
    </>
  );
};
export default HeaderPage;
