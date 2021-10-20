import React from 'react';
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

export type MenuItemType = {
  id: string;
  title: string;
  link: string;
};

export type fixedOption = {
  top: string;
};

export type NavProps = {
  menu: MenuItemType[];
  scrollable?: boolean;
  fixed?: fixedOption | boolean;
};

const Nav = (props: NavProps & { children: React.ReactElement }) => {
  const { children, scrollable, fixed = false } = props;
  const menus = [
    ['产品', '服务'],
    ['理财', '油腻'],
    ['慈善', '春风十里'],
  ];

  console.log('props options', fixed);
  return (
    <div className="nav">
      <div className="left">
        <a href="https://work_harder.com">
          <img src="" alt="brand" className="brand" />
        </a>
      </div>
      <div className="menu">
        <ul className="menu-main">
          {menus.map((menu) => {
            return (
              <li className="menu-main-item">
                诛仙
                <div className="popover">
                  <ul className="popover-menu">
                    {menu.map((item) => {
                      return <li className="popover-menu-item">{item}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="right">
        <span className="login">登录</span>
        <span className="signup">立即注册</span>
      </div>
    </div>
  );
};

export default Nav;
