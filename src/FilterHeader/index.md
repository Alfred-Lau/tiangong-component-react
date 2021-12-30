---
nav:
title: 组件
description: 用来渲染官网类的楼层
path: /components
---

## FilterHeader

基本用法:

```tsx
import React from 'react';
import { FilterHeader } from '@tiangongkit/react-component';

export default () => {

  return (
    <FilterHeader
      logo='title'
    />
  );
};
```

## API

| 参数    | 说明      | 类型   | 默认值 | 版本  |
|:------|:--------| :----- | :----- | :---- |
| logo     | 网站logo  | string |        | 1.0.0 |
| mode  | ['row'\ |'normal'] | string |        | 1.0.0 |
| title | 渲染列表数据  | string |        | 1.0.0 |
