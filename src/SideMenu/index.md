---
nav:
  title: 组件
  description: 用来渲染官网类的侧部边栏
  path: /components
---

## SideMenu

基本用法:

```tsx
import React from 'react';
import { SideMenu } from '@tiangongkit/react-component';

export default () => {
  return <SideMenu title="title" />;
};
```

## API

| 参数  | 说明              | 类型   | 默认值 | 版本  |
| :---- | :---------------- | :----- | :----- | :---- |
| title | 楼层标题          | string |        | 1.0.0 |
| mode  | ['row'\|'normal'] | string |        | 1.0.0 |
| title | 渲染列表数据      | string |        | 1.0.0 |
