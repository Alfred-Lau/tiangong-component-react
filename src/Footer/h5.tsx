import React, { FC } from 'react';

export type FooterProps = { datas: { title: string; link: string } };

const H5Footer: FC<FooterProps> = (props) => {
  const { datas } = props;
  return <div>h5 footer</div>;
};

export default H5Footer;
