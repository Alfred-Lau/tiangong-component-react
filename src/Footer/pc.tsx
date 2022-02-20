import React, { FC } from 'react';

export type FooterProps = { datas: any[] };

const PCFooter: FC<FooterProps> = (props) => {
  const { datas } = props;
  return (
    <div className="footer">
      <div className="footer-main">
        <ul className="footer-main-ul">
          {datas.map((data) => {
            return (
              <li className="item">
                <h4>{data.name}</h4>
                <ul className="products">
                  {data.items.map((item) => {
                    return (
                      <li className="product-item">
                        <a href={item.link} target="_blank">
                          {item.title}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="copyright">烽火彼岸，黄金沙滩</div>
    </div>
  );
};

export default PCFooter;
