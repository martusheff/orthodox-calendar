import React, { useState } from 'react';
import { View, SafeAreaView } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import DayCell from '../DayCell/DayCell';
import WeekdayHeader from '../WeekdayHeader/WeekdayHeader'
import moment from 'moment';
import TopBar from '../TopBar/TopBar';
import styles from './MonthGrid.styles';
import DayDataHelper from '../../DayDataHelper';
import DayData from '../../DayData';
import { getDayData } from '../../DayDataHelper';


const MonthGrid = () => {
  const [currentDate, setCurrentDate] = useState(moment());

  const onSwipeLeft = () => setCurrentDate(currentDate.clone().add(1, 'month'));
  const onSwipeRight = () => setCurrentDate(currentDate.clone().subtract(1, 'month'));

  const daysInMonth = Array.from({ length: currentDate.daysInMonth() }, (_, i) => i + 1);
  const startWeekDay = currentDate.clone().startOf('month').day();
  const endWeekDay = currentDate.clone().endOf('month').day();
  const totalSlots = daysInMonth.length + startWeekDay + (6 - endWeekDay);

  const grid = [];
  for (let i = 0; i < totalSlots; i += 7) {
    const row = [];
    for (let j = i; j < i + 7; j++) {
      const dayNumber = j - startWeekDay + 1;
      const isWithinMonth = dayNumber > 0 && dayNumber <= daysInMonth.length;
      const date = isWithinMonth ? currentDate.clone().date(dayNumber) : null;
      const dayData = isWithinMonth ? getDayData(date) : new DayData();



      row.push(
        <DayCell key={j} dayData={dayData} emptyCell={!isWithinMonth} />
      );
    }
    grid.push(<View key={i} style={styles.row}>{row}</View>);
  }

  return (
    <GestureRecognizer
      onSwipeLeft={onSwipeLeft}
      onSwipeRight={onSwipeRight}
      style={styles.container}
    >
      <TopBar currentMonth={currentDate.format('MMMM YYYY')} />
      <WeekdayHeader />
      {grid}
    </GestureRecognizer>
  );
};

export default MonthGrid;


