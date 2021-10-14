---
nav:
  title: 组件
  path: /components
---

## Card

基本用法:

```tsx
import React, {useCallback, useState} from 'react';
import { Card } from 'tiangong-react-component';

const {CardGroup} = Card;

export default () => {

  const cards = [{id:0, title:'我是第一标题',description:'我是第一个描述',src:'',link:''},{id:1, title:'我是第一标题',description:'我是第一个描述',src:'',link:''},{id:2, title:'我是第一标题',description:'我是第一个描述',src:'',link:''},{id:3, title:'我是第一标题',description:'我是第一个描述',src:'',link:''},{id:4, title:'我是第一标题',description:'我是第一个描述',src:'',link:''},{id:5, title:'我是第一标题',description:'我是第一个描述',src:'',link:''},{id:6, title:'我是第一标题',description:'我是第一个描述',src:'',link:''}]

  return (<div>
    <CardGroup>
      {
        cards?.map(card =>{
          return (
            <Card title={card.title} key={card.id} description={card.description} link={card.link} img={card.src} /> 
          )
        })
      }
    </CardGroup>
  </div>);
};
```

## API

| 参数  | 说明       | 类型   | 默认值 | 版本  |
| :---- | :--------- | :----- | :----- | :---- |
| title | 模态框标题 | string |        | 1.0.0 |
