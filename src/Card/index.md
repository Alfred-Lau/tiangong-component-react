---
nav:
  title: 组件
  path: /components
---

## Card

基本用法:

```tsx
import React, { useCallback, useState } from 'react';
import { Card } from '@tiangongkit/react-component';

const { CardGroup } = Card;

export default () => {
  const cards = [
    {
      id: 0,
      title: '静水流深',
      description: '我是第一个描述',
      src: 'https://lazy-minus-your-intelligence.oss-cn-qingdao.aliyuncs.com/blog/bgimgs/bg.jpg',
      link: '了解详情...',
    },
    {
      id: 1,
      title: '静水流深',
      description: '我是第一个描述',
      src: 'https://lazy-minus-your-intelligence.oss-cn-qingdao.aliyuncs.com/blog/bgimgs/bg.jpg',
      link: '了解详情...',
    },
    {
      id: 2,
      title: '静水流深',
      description: '我是第一个描述',
      src: 'https://lazy-minus-your-intelligence.oss-cn-qingdao.aliyuncs.com/blog/bgimgs/bg.jpg',
      link: '了解详情...',
    },
    {
      id: 3,
      title: '静水流深',
      description: '我是第一个描述',
      src: 'https://lazy-minus-your-intelligence.oss-cn-qingdao.aliyuncs.com/blog/bgimgs/bg.jpg',
      link: '了解详情...',
    },
    {
      id: 4,
      title: '静水流深',
      description: '我是第一个描述',
      src: 'https://lazy-minus-your-intelligence.oss-cn-qingdao.aliyuncs.com/blog/bgimgs/bg.jpg',
      link: '了解详情...',
    },
    {
      id: 5,
      title: '静水流深',
      description: '我是第一个描述',
      src: 'https://lazy-minus-your-intelligence.oss-cn-qingdao.aliyuncs.com/blog/bgimgs/bg.jpg',
      link: '了解详情...',
    },
    {
      id: 6,
      title: '静水流深',
      description: '我是第一个描述',
      src: 'https://lazy-minus-your-intelligence.oss-cn-qingdao.aliyuncs.com/blog/bgimgs/bg.jpg',
      link: '了解详情...',
    },
  ];

  return (
    <div>
      <CardGroup>
        {cards?.map((card) => {
          return (
            <Card
              title={card.title}
              key={card.id}
              description={card.description}
              link={card.link}
              img={card.src}
            />
          );
        })}
      </CardGroup>
    </div>
  );
};
```

## API

| 参数  | 说明       | 类型   | 默认值 | 版本  |
| :---- | :--------- | :----- | :----- | :---- |
| title | 模态框标题 | string |        | 1.0.0 |
