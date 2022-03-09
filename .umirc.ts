import { defineConfig } from 'dumi';

export default defineConfig({
  // title: '天工 React 组件库',
  // favicon:
  //   'https://lazy-minus-your-intelligence.oss-cn-qingdao.aliyuncs.com/favicon.ico',
  // logo: 'https://lazy-minus-your-intelligence.oss-cn-qingdao.aliyuncs.com/favicon.ico',
  outputPath: 'docs-dist',
  mode: 'site',
  // more config: https://d.umijs.org/config
  menus: {
    '/components': [
      {
        title: '提效组件',
        children: [
          'Modal',
          'Card',
          'HoverCard',
          'Foo',
          'Calendar',
          'Nav',
          'Footer',
          'Table',
          'Form',
          'Part',
          'SideMenu',
          'FixedHeader',
          'SearchBox',
        ],
      },
    ],
  },
});
