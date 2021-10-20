---
nav:
  title: 组件
  path: /components
---

## Calendar

基本用法:

```tsx
import React, {useCallback, useState} from 'react';
import { Calendar } from 'tiangong-react-component';



export default () => {


  return (<div>
    <Calendar>

    </Calendar>
  </div>);
};
```

## API

| 参数  | 说明       | 类型   | 默认值 | 版本  |
| :---- | :--------- | :----- | :----- | :---- |
| title | 模态框标题 | string |        | 1.0.0 |
