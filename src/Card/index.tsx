import React from 'react';
import CardGroup from './Group';
import './index.less';

export type CardProps = {
  id: number;
  title: string;
  img: string;
  description: string;
  link: string;
};

function Card(props: CardProps) {
  const { title, img, description, link } = props;
  return (
    <div className="card">
      <div className="cardWrapper">
        <h3 className="title">{title}</h3>
        <img src={img} alt="" className="img" />
        <div className="description">{description}</div>
        <span className="link">
          <a href={link}></a>
        </span>
      </div>
    </div>
  );
}

Card.CardGroup = CardGroup;
export default Card;
