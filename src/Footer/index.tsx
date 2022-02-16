import React from 'react';
import MediaQuery from 'react-responsive';
import PCFooter from '@/Footer/pc';
import H5Footer from '@/Footer/h5';
import { MIN_WIDTH } from '@/constant';
import './index.less';

export type FooterProps = {
  copyright: string | React.ReactElement;
};

const Footer: React.FC = () => {
  const datas = [
    {
      name: '相关站点',
      items: [
        { id: 1, title: '工具类站点', link: '', icon: '' },
        { id: 2, title: '咨询类站点', link: '', icon: '' },
        { id: 3, title: '电商类站点', link: '', icon: '' },
        { id: 4, title: '其他', link: '', icon: '' },
      ],
    },
    {
      name: '明日之屋',
      items: [
        { id: 1, title: '凡有出', link: '', icon: '' },
        { id: 2, title: '必有用', link: '', icon: '' },
        { id: 3, title: '念念不忘', link: '', icon: '' },
        { id: 4, title: '必有回想', link: '', icon: '' },
      ],
    },
    {
      name: '联系我',
      items: [
        {
          id: 1,
          title: '主站',
          link: 'https://lazy-minus-your-intelligence.com/',
          icon: '',
        },
        {
          id: 2,
          title: 'GitHub',
          link: 'https://github.com/Alfred-Lau',
          icon: '',
        },
        { id: 3, title: '掘金', link: '', icon: '' },
        { id: 4, title: '思否', link: '', icon: '' },
        { id: 4, title: '拉勾', link: '', icon: '' },
      ],
    },
    {
      name: '更多套件',
      items: [
        {
          id: 1,
          title: '数据采集',
          link: 'http://docs.lazy-minus-your-intelligence.com/parts/tracert.html',
          icon: '',
        },
        {
          id: 1,
          title: '性能分析',
          link: 'http://docs.lazy-minus-your-intelligence.com/parts/tracert.html',
          icon: '',
        },
        {
          id: 2,
          title: '脚手架',
          link: 'http://docs.lazy-minus-your-intelligence.com/parts/cli.html',
          icon: '',
        },
        {
          id: 3,
          title: '搭建',
          link: 'http://docs.lazy-minus-your-intelligence.com/parts/build.html',
          icon: '',
        },
        {
          id: 4,
          title: '垂直场景解决方案',
          link: 'http://docs.lazy-minus-your-intelligence.com/parts/component.html',
          icon: '',
        },
      ],
    },
  ];
  return (
    <>
      <MediaQuery minWidth={MIN_WIDTH}>
        <PCFooter datas={datas}></PCFooter>
      </MediaQuery>
      <MediaQuery maxWidth={MIN_WIDTH}>
        <H5Footer datas={datas}></H5Footer>
      </MediaQuery>
    </>
  );
};

export default Footer;
