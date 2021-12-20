import React, { FC } from 'react';
import './index.less';

export type PartProps = {
  title?: string;
  subTitle?: string;
};

const Part: FC<PartProps> = (props) => {
  return <div className="part">{props.children}</div>;
};

export default Part;
