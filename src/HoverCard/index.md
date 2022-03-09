---
nav:
  title: 组件
  path: /components
---

是否进行移动端适配：否

## HoverCard

基本用法:

```tsx
import React, { useCallback, useState } from 'react';
import { HoverCard } from '@tiangongkit/react-component';

export default () => {
  return (
    <HoverCard
      title={'我是标题'}
      description={'我是二级描述'}
      background={'此处是背景图片'}
    />
  );
};
```

## API

| 参数        | 说明       | 类型   | 默认值 | 版本  |
| :---------- | :--------- | :----- | :----- | :---- |
| title       | 卡片标题   | string |        | 1.0.0 |
| description | 卡片描述   | string |        | 1.0.0 |
| background  | 卡片背景图 | string |        | 1.0.0 |
