---
nav:
  title: 组件
  path: /components
---

是否进行移动端适配：否

## ImagePreview

基本用法:

```tsx
import React from 'react';
import { ImagePreview } from '@tiangongkit/react-component';

export default () => {
  return (
    <ImagePreview
      src={
        'https://lazy-minus-your-intelligence.oss-cn-qingdao.aliyuncs.com/blog/bgimgs/bg.jpg'
      }
    />
  );
};
```

## API

| 参数 | 说明     | 类型   | 默认值 | 版本  |
| :--- | :------- | :----- | :----- | :---- |
| src  | 图片地址 | string |        | 1.0.0 |
