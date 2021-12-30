import React, {FC, useEffect, useState} from 'react';
import styles from './index.less'

export type FilterHeaderProps = {
  logo:string
}

const FilterHeader:FC<FilterHeaderProps> = (props) => {
  const [isTop ,setIsTop] = useState(false)

  useEffect(()=>{
    function scrollHandler(e){
      console.log(e)

    }

    wid
  },[])
  const {logo} = props
  return (
    <div className={styles.filterHeader} style={isTop? {backdropFilter:'blur(0)'}:{}}>
      FilterHeader
    </div>
  );
};

export default FilterHeader ;
