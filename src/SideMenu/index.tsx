import React, { FC } from 'react';
import './index.less';

export type SideMenuProps = {
  title?: string;
  subTitle?: string;
};

const SideMenu: FC<SideMenuProps> = (props) => {
  return <div className="sideMenu">{props.children}</div>;
};

export default SideMenu;
