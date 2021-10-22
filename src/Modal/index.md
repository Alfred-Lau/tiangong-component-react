---
nav:
  title: 组件
  path: /components
---

## Modal

基本用法:

```tsx
import React, { useCallback, useState } from 'react';
import { Modal } from '@tiangongkit/react-component';

export default () => {
  const [visible, setVisible] = useState(false);

  const toggleModal = useCallback(() => {
    setVisible((visible) => !visible);
  }, [visible]);

  return (
    <div>
      <button onClick={toggleModal}>显示弹窗</button>
      <Modal title="First Demo" visible={visible} cancel={toggleModal}>
        我是中心内容
      </Modal>
    </div>
  );
};
```

## API

| 参数     | 说明           | 类型               | 默认值 | 版本  |
| :------- | :------------- | :----------------- | :----- | :---- |
| title    | 模态框标题     | string             |        | 1.0.0 |
| visible  | 模态框是否可见 | boolean            |        | 1.0.0 |
| cancel   | 停止展示       | function           |        | 1.0.0 |
| footer   | modal 页脚     | React.ReactElement | false  | 1.0.0 |
| children | 子元素         | React.ReactElement |        | 1.0.0 |
