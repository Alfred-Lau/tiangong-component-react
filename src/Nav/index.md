---
nav:
  title: 组件
  path: /components
---

## Nav

基本用法:

```tsx
import React from 'react';
import { Nav } from '@tiangongkit/react-component';

export default () => {
  const menus = [
    { id: 0, title: '技术体系', link: '', items: ['产品', '服务'] },
    { id: 1, title: '团队管理', link: '', items: ['理财', '油腻'] },
    { id: 2, title: '人生逆旅', link: '', items: ['慈善', '春风十里'] },
  ];
  return (
    <Nav
      menus={menus}
      fixed
      logo="https://lazy-minus-your-intelligence.com/assets/avatar.png"
    />
  );
};
```

## API

| 参数       | 说明                      | 类型           | 默认值 | 版本  |
| :--------- | :------------------------ | :------------- | :----- | :---- |
| menus      | 渲染列表数据              | MenuItemType[] |        | 1.0.0 |
| scrollable | main 区域超宽是否可以滚动 | boolean        |        | 1.0.0 |
| fixed      | 是否吸顶                  | fixedOption    |        | 1.0.0 |
