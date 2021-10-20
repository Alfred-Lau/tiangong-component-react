import React, { useState, useCallback } from 'react';
import './index.less';

/* 
技术方案：
1. 设计功能
  1.1 支持基础展示
  1.2 支持某一特定日期选择
2. 设计参数
  1.1 value 使用日期
  1.2 onChange 日起变化回调
3. 写模板
4. 写样式
5. 写交互
6. 调试


*/

export type CalendarType = {
  defaultValue: string;
  handleSelectrDate: (date: string) => void;
};

type DateType = {
  year: number;
  month: number;
};

export default function Calendar() {
  const d = new Date();
  const [now, setNow] = useState<DateType>({
    year: d.getFullYear(),
    month: d.getMonth(),
  });
  const dates = [1, 2, 3, 4, 5];
  const currentDate = new Date().getDate();

  const handleClickDate = (e: React.MouseEvent<HTMLElement>) => {
    console.log((e.target as HTMLElement).innerText);
  };

  const chooseToday = () => {
    alert(`当前时间是 ${currentDate}`);
  };

  const prevYear = useCallback(() => {}, []);

  const prevMonth = useCallback(() => {
    setNow((now) => {
      const ret: any = {};
      if (now.month + 1 > 12) {
        ret.month = 1;
        ret.year += 1;
      } else {
        ret.month += 1;
      }
      return ret;
    });
  }, []);

  const nextYear = useCallback(() => {}, []);

  const nextMonth = useCallback(() => {
    setNow((now) => {
      const ret: any = {};
      console.log('ret now', now, now.month, typeof now.month);

      if (now.month + 1 > 12) {
        ret.month = 1;
        ret.year += 1;
      } else {
        ret.month += 1;
        ret.year = now.year;
      }

      console.log('ret', ret);
      return ret;
    });
  }, []);

  return (
    <div className="calendar">
      当前时间是：{currentDate}
      <div className="calendar-header">
        <span className="calendar-header-prev-year" onClick={prevYear}>
          {'<<'}
        </span>
        <span className="calendar-header-prev-month" onClick={prevMonth}>
          {'<'}
        </span>
        <span>
          {now.year}/{now.month}
        </span>
        <span className="calendar-header-next-year" onClick={nextYear}>
          {'>>'}
        </span>
        <span className="calendar-header-next-month" onClick={nextMonth}>
          {'>'}
        </span>
      </div>
      <div className="calendar-body">
        <div className="calendar-body-week">
          <ul>
            <li>一</li>
            <li>二</li>
            <li>三</li>
            <li>四</li>
            <li>五</li>
            <li>六</li>
            <li>日</li>
          </ul>
        </div>
        <div className="calendar-body-days" onClick={handleClickDate}>
          <table>
            {dates.map((date) => {
              const { days = [1, 2, 3, 4, 5, 6, 7] } = date as any;
              return (
                <tr>
                  {days.map((day: any) => {
                    return <td>{day}</td>;
                  })}
                </tr>
              );
            })}
          </table>
        </div>
      </div>
      <div className="calendar-footer" onClick={chooseToday}>
        今天
      </div>
    </div>
  );
}
