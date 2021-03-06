import React, { useEffect, useState } from 'react';
import styles from './index.less';

// 执行多次
function throttle(this: void, fn: any, wait: number = 50) {
  // 滚动节流 只执行一次
  let timer: NodeJS.Timeout | null = null;
  let previous = +new Date();

  return (...args: any[]) => {
    const now = +new Date();
    if (now - previous < wait) {
      // 还在节流的时间区
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        previous = now;
        fn.apply(this as unknown as typeof window, args);
      }, wait);
    } else {
      previous = now;
      fn.apply(this, args);
    }
  };
}

export default function FixedHeader() {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    function scrollHandler() {
      const top = document.getElementById('top');

      if (top?.getBoundingClientRect().top! < 0) {
        // 开始设置滚动的底色
        setIsTop(false);
      } else {
        setIsTop(true);
      }
    }

    window.addEventListener('scroll', throttle(scrollHandler));
    return () => {
      window.removeEventListener('scroll', throttle(scrollHandler));
    };
  }, []);
  return (
    <div
      className={styles.fixedHeader}
      style={isTop ? { backdropFilter: 'blur(10px)', background: 'none' } : {}}
    >
      woshi fixedheader
    </div>
  );
}
