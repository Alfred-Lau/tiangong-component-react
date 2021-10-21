---
nav:
  title: 组件
  path: /components
---

## Nav

基本用法:

```tsx
import React from 'react';
import { Nav } from 'tiangong-react-component';

export default () => {
  const menu = []
  return <Nav menu={menu}/>;
};
```

## API


| 参数       | 说明                      | 类型    | 默认值 | 版本  |
| :--------- | :------------------------ | :------ | :----- | :---- |
| scrollable | main 区域超宽是否可以滚动 | boolean |        | 1.0.0 |
| fixed      | 是否吸顶                  | boolean |        | 1.0.0 |
