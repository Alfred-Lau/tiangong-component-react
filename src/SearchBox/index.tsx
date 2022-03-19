import { FC, useEffect, useRef, useState } from 'react';
import { Select } from 'antd';
import classnames from 'classnames';
import { SearchOutlined } from '@ant-design/icons';
import React from 'react';
import './index.less';

const { Option } = Select;

const data = [
  {
    value: 'hello',
    text: 'hello',
  },
  {
    value: 'world',
    text: 'world',
  },
];

export type SearchBoxProps = {
  value: string;
  onChange: (value: string) => void;
  onSearch: (text: string) => void;
  action: string;
};

// const SearchBox: FC<SearchBoxProps> = (props) => {
//   const { value, onSearch, onChange } = props;
//   return (
//     <div className={'searchBox'}>
//       <Select
//         showSearch
//         value={value}
//         placeholder="请输入数据"
//         defaultActiveFirstOption={false}
//         showArrow={false}
//         bordered={false}
//         filterOption={false}
//         onSearch={onSearch}
//         onChange={onChange}
//         notFoundContent={null}
//       >
//         {data.map((d) => {
//           return <Option key={d.value}>{d.text}</Option>;
//         })}
//       </Select>
//       <div className={'search'}>搜 索</div>
//     </div>
//   );
// };

const SearchBox: FC<SearchBoxProps> = (props) => {
  const { value, onSearch, onChange, action } = props;
  console.log(value, onSearch, onChange, action);

  const [showResult, setShowResult] = useState(false);
  const searchInputRef = useRef(null);
  const smartBoxCls = classnames('smartbox', {
    show: showResult,
  });

  const focusHandler = (e) => {
    setShowResult(true);
    console.log(e.target.value);
  };
  const blurHandler = (e) => {
    setShowResult(false);
    console.log(e.target.value);
  };

  useEffect(() => {
    function addEventListener() {
      (searchInputRef.current! as HTMLInputElement).addEventListener(
        'focus',
        focusHandler,
      );
      (searchInputRef.current! as HTMLInputElement).addEventListener(
        'blur',
        blurHandler,
      );
    }

    function removeEventListener() {
      (searchInputRef.current! as HTMLInputElement).removeEventListener(
        'focus',
        focusHandler,
      );
      (searchInputRef.current! as HTMLInputElement).removeEventListener(
        'blur',
        blurHandler,
      );
    }

    addEventListener();

    return removeEventListener;
  }, []);
  return (
    <div className="searchBox">
      <div className="searchForm">
        <div className="keyword">
          <input type="text" ref={searchInputRef} />
        </div>
        <button className="searchbtn">
          <SearchOutlined />
          全网搜
        </button>
      </div>
      <div className={smartBoxCls}>我是搜索结果</div>
    </div>
  );
};

export default SearchBox;
