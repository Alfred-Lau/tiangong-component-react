import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import './index.less';

/* 
## 技术方案设计

### PC 端
1. 需求描述
2. 参数设计
3. 实现方案设计
4. 模板，样式，交互落地
5. 文档 & 测试

### 移动端【移动优先设计】
- 三明治导航

*/

export function isNullOrUndefined(t: any): boolean {
  return t === null || t === undefined;
}

export type MenuItemType = {
  id: number;
  title: string;
  link: string;
  items: string[];
};

export type fixedOption = {
  top: string;
};

export type NavProps = {
  menus: MenuItemType[];
  scrollable?: boolean;
  fixed?: fixedOption | boolean;
  logo: string;
};

const Nav = (props: NavProps & { children?: React.ReactElement }) => {
  const { children, scrollable, fixed = false, menus, logo } = props;
  const [active, setActive] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.body.scrollTop
        ? document.body.scrollTop
        : document.documentElement.scrollTop;
      const target = document.querySelector('.tiangong-nav') as HTMLElement;

      if (scrollHeight > 80) {
        target.style.position = 'fixed';
        target.style.zIndex = '1000';
        target.style.top = '0';
        target.style.left = '0';
      } else {
        target.style.position = 'relative';
        target.style.zIndex = '0';
      }
    };
    if (fixed) {
      // target：支持吸顶, 默认距离顶部 80px
      window.addEventListener('scroll', handleScroll);
    }

    return window.removeEventListener('scroll', handleScroll);
  }, []);

  const showMore = (id?: number) => {
    setActive(true);
    if (!isNullOrUndefined(id)) {
      setCurrentIndex(id!);
    }
  };
  const showLess = (id?: number) => {
    setActive(false);
    if (!isNullOrUndefined(id)) {
      setCurrentIndex(id!);
    }
  };

  return (
    <div className="tiangong-nav">
      <div className="left">
        <a href="https://work_harder.com">
          <img src={logo} alt="brand" className="brand" height="100%" />
        </a>
      </div>
      <div className="menu">
        <ul className="menu-main">
          {menus.map((menu, index) => {
            return (
              <li
                className="menu-main-item"
                onMouseEnter={() => showMore(index)}
                onMouseLeave={() => showLess(index)}
              >
                {menu.title}
              </li>
            );
          })}
        </ul>
      </div>
      <div
        className={classnames('menu-mask', {
          'menu-mask-active': active,
        })}
        onMouseLeave={() => {
          showLess();
        }}
        onMouseEnter={() => {
          showMore();
        }}
      >
        <div className="popover">
          <ul className="popover-menu">
            {menus[currentIndex]?.items.map((item) => {
              return <li className="popover-menu-item">{item}</li>;
            })}
          </ul>
        </div>
      </div>
      <div className="right">
        <span className="login">登录</span>
        <span className="signup">立即注册</span>
      </div>
    </div>
  );
};

export default Nav;
