import React, { FC } from 'react';
import { MessageOutlined } from '@ant-design/icons';
import './index.less';

export type SideUpProps = {
  title: React.ReactNode | string;
};

const SideUp: FC<SideUpProps> = (props) => {
  return (
    <div className={'sideup'}>
      <div className="container">
        <ul className={'fns'}>
          <li>
            {/*<MessageOutlined*/}
            {/*  style={{*/}
            {/*    fontSize: 30,*/}
            {/*    color: 'rgb(159 141 141)',*/}
            {/*  }}*/}
            {/*/>*/}
            dsds
          </li>
          <li>dsds</li>
          <li>dsds</li>
        </ul>
      </div>
    </div>
  );
};

export default SideUp;
