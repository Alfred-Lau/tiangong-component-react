import React from 'react';
import './group.less';
import classname from 'classnames';

export type CardsProps = {
  children: React.ReactElement;
  swipe?: boolean;
};

export default function Group(props: CardsProps) {
  const { children, swipe } = props;
  const cls = classname('cardgroup', {
    swipe: !!swipe,
  });

  if (swipe) {
    console.log('children', React.isValidElement(children), children);

    // const swiperChildren  = React.cloneElement()
    return (
      <div className={cls}>
        <div className="overflow-container">{children}</div>
      </div>
    );
  }
  return <div className="cardgroup">{children}</div>;
}
