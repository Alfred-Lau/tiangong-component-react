---
nav:
  title: Components
  path: /components
---

## Modal

Demo:

```tsx
import React, {useCallback, useState} from 'react';
import { Modal } from 'tiangong-react-component';

export default () => {
  const [visible, setVisible] = useState(false)
  
  const toggleModal = useCallback(()=>{
    setVisible(visible=> !visible)
  },[visible])

  return (<div>
   <button onClick={toggleModal}>显示弹窗</button>
   <Modal title="First Demo" visible={visible} cancel={toggleModal}>
   我是中心内容
   </Modal>
  </div>);
};
```

More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo
