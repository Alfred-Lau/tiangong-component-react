import React from 'react';
import './group.less';

export type CardsProps = {
  children: React.ReactElement;
};

export default function Group(props: CardsProps) {
  const { children } = props;
  return <div className="cardgroup">{children}</div>;
}
