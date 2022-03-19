---
nav:
  title: 组件
  path: /components
---

是否进行移动端适配：否

## SearchBox

基本用法:

```tsx
import React, { useCallback, useState } from 'react';
import { SearchBox } from '@tiangongkit/react-component';

export default () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = useCallback(() => {
    // 发起搜索
  }, [searchValue]);

  return (
    <SearchBox
      value={searchValue}
      onSearch={handleSearch}
      onChange={handleSearch}
      action={'/api/search'}
    />
  );
};
```

## API

| 参数     | 说明           | 类型   | 默认值 | 版本  |
| :------- | :------------- | :----- | :----- | :---- |
| value    | 搜索受控关键词 | string |        | 1.0.0 |
| action   | 搜索服务地址   | string |        | 1.0.0 |
| onChange | 输入回调       | string |        | 1.0.0 |
| onSearch | 搜索回调       | string |        | 1.0.0 |
