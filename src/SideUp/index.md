---
nav:
  title: 组件
  description: 用来渲染官网类的SideUp
  path: /components
---

## SideUp

基本用法:

```tsx
import React from 'react';
import { SideUp } from '@tiangongkit/react-component';

export default () => {
  return <SideUp title="title" />;
};
```

## API

| 参数  | 说明     | 类型   | 默认值 | 版本  |
| :---- | :------- | :----- | :----- | :---- |
| title | 楼层标题 | string |        | 1.0.0 |
