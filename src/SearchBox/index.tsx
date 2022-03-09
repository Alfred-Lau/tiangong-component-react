import { FC } from 'react';
import { Select } from 'antd';
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
};

const SearchBox: FC<SearchBoxProps> = (props) => {
  const { value, onSearch, onChange } = props;
  return (
    <div className={'searchBox'}>
      <Select
        showSearch
        value={value}
        placeholder="请输入数据"
        defaultActiveFirstOption={false}
        showArrow={false}
        filterOption={false}
        onSearch={onSearch}
        onChange={onChange}
        notFoundContent={null}
      >
        {data.map((d) => {
          return <Option key={d.value}>{d.text}</Option>;
        })}
      </Select>
      <div className={'search'}>搜 索</div>
    </div>
  );
};

export default SearchBox;
