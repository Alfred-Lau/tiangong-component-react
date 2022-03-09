import type { FC } from 'react';
import { Card } from 'antd';
import React from 'react';
import './index.less';

export type HoverCardProps = {
  title: string;
  description: string;
  background: string;
};

const HoverCard: FC<HoverCardProps> = (props) => {
  const { title, description, background } = props;
  return (
    <div className="hovercard">
      <Card bordered={false} hoverable>
        <div
          className={'container'}
          style={{
            background: background.startsWith('http')
              ? `url(${background})`
              : '#0f0',
          }}
        >
          <div className="content">
            <h3>{title}</h3>
            <p className="description">{description}</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default HoverCard;
