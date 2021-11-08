import React, { useState } from 'react';
import { get } from "../../pages/api";

import styles from './content.module.css';

import Icon from '../icons';
import { Experience } from '../experience';
import { Skills } from '../skills';
import { Hobby } from '../hobby';
const Content = (props) => {
  const [titleList, setTitleList] = useState([]);
  // get('http://localhost:3001/list').then((data) => {
  //   console.log(data)
  // })
  return (
    <div className={styles.content}>
      {titleList.map((item) => (
        <div key={item.className} className={styles[item.className]}>
          <h4 className={styles.modularTitle}>
            <Icon iconName={item.iconName}></Icon>
            <span className={styles.modularTitleMessage}>{item.title}</span>
          </h4>
          <div>{item.className}</div>
          {() =>
            item.className === 'experience' ? (
              <Experience></Experience>
            ) : item.className === 'skills' ? (
              <Skills></Skills>
            ) : item.className === 'hobby' ? (
              <Hobby></Hobby>
            ) : (
              <div>404页面</div>
            )
          }
        </div>
      ))}
    </div>
  );
};
export default Content;
