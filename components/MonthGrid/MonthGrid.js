import React, { useState } from 'react';
import { View, SafeAreaView } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import DayCell from '../DayCell/DayCell';
import WeekdayHeader from '../WeekdayHeader/WeekdayHeader'
import moment from 'moment';
import TopBar from '../TopBar/TopBar';
import styles from './MonthGrid.styles';
import DayDataHelper, { getNewDayData } from '../../DayDataHelper';
import DayData from '../../DayData';
import { getDayData } from '../../DayDataHelper';
import Collapsible from 'react-native-collapsible';
import DayView from '../DayView/DayView';
import { PageIndicator } from 'react-native-page-indicator';


export const DayCellPosition = {
  LEFT: 'left',
  MIDDLE: 'middle',
  RIGHT: 'right',
  CENTER_LEFT: 'centerLeft',
  CENTER_MIDDLE: 'centerMiddle',
  CENTER_RIGHT: 'centerRight',
  LAST: 'last',
  FIRST_LAST: 'firstLast',
  FIRST_FIRST: 'firstFirst',
  CENTER_LAST: 'centerLast',
  CENTER_LEFT_LEADING: 'centerLeftLeading',
  CENTER_MIDDLE_LEADING: 'centerMiddleLeading'
};

const MonthGrid = () => {
  const [currentDate, setCurrentDate] = useState(moment());
  const [isGridCollapsed, setIsGridCollapsed] = useState(false);
  const [selectedDayData, setSelectedDayData] = useState(null);
  const [selectedNewDayData, setSelectedNewDayData] = useState(null);

  // const onSwipeLeft = () => setCurrentDate(currentDate.clone().add(1, 'month'));
  // const onSwipeRight = () => setCurrentDate(currentDate.clone().subtract(1, 'month'));

  const onSwipeLeft = () => {
    // Clone and add 1 month to the current date
    const nextMonth = currentDate.clone().add(1, 'month');
    // Check if the next month's year is 2024
    if (nextMonth.year() === 2024) {
      setCurrentDate(nextMonth); // Update the current date only if it's within 2024
    }
  };
  
  const onSwipeRight = () => {
    // Clone and subtract 1 month from the current date
    const prevMonth = currentDate.clone().subtract(1, 'month');
    // Check if the previous month's year is 2024
    if (prevMonth.year() === 2024) {
      setCurrentDate(prevMonth); // Update the current date only if it's within 2024
    }
  };
  

  const daysInMonth = Array.from({ length: currentDate.daysInMonth() }, (_, i) => i + 1);
  const startWeekDay = currentDate.clone().startOf('month').day();
  const endWeekDay = currentDate.clone().endOf('month').day();
  const totalSlots = daysInMonth.length + startWeekDay + (6 - endWeekDay);

  const toggleGridCollapse = () => {
    setIsGridCollapsed(!isGridCollapsed);
  };

  const handleDayCellTap = (dayData) => {
    setSelectedDayData(dayData);
  };

  const getCellPosition = (i, j, dim, r) => {
    console.log("I: " + i)
    console.log("J: " + j)
    console.log("\n")
    if(i == 1) {
      if(j == 0) {
        return DayCellPosition.FIRST_FIRST;
      }
      if(j == 6) {
        return DayCellPosition.FIRST_LAST;
      }
      return r > 1 && r < 35 ? DayCellPosition.CENTER_LEFT : DayCellPosition.LEFT;
    } else if(i == dim.length) {
      return r > 1 && r < 35 ? DayCellPosition.CENTER_LAST : DayCellPosition.LAST;
    } else if(j % 7 == 0) {
      return r > 1 && r < 35 ? j < 8 ? DayCellPosition.CENTER_LEFT_LEADING : DayCellPosition.CENTER_LEFT : DayCellPosition.LEFT;
    } else if(j % 7 == 6) {
      return r > 1 && r < 35 ? DayCellPosition.CENTER_RIGHT : DayCellPosition.RIGHT;
    } else if(i < 8) {
      print("WERE IN THE MIDDLE")
      return DayCellPosition.CENTER_MIDDLE_LEADING;
    }
    return r > 1 && r < 35 ? DayCellPosition.CENTER_MIDDLE : DayCellPosition.MIDDLE;
  }

  const grid = [];
  grid.push(
    <Collapsible collapsed={isGridCollapsed}>
      <WeekdayHeader />
    </Collapsible>
  )
  for (let i = 0; i < totalSlots; i += 7) {

    const row = [];

    for (let j = i; j < i + 7; j++) {
      const dayNumber = j - startWeekDay + 1;
      const isWithinMonth = dayNumber > 0 && dayNumber <= daysInMonth.length;
      const date = isWithinMonth ? currentDate.clone().date(dayNumber) : null;
      const dayData = isWithinMonth ? getDayData(date) : new DayData();
      const newDayData = isWithinMonth ? getNewDayData(date) : null;
      const pos = getCellPosition(dayNumber, j, daysInMonth, i)

      console.log("ABC1234:")
      console.log(newDayData)

      row.push(
        <DayCell key={j} dayData={dayData} newDayData={newDayData} emptyCell={!isWithinMonth} toggleGridCollapse={toggleGridCollapse} handleDayCellTap={handleDayCellTap} pos={pos} />
      );
    }
    grid.push(
      <Collapsible key={i} collapsed={isGridCollapsed}>
        <View style={styles.row}>{row}</View>
      </Collapsible>
    );
  }

  // console.log(selectedDayData)
  return (
    <SafeAreaView style={styles.container}>
      <TopBar title={isGridCollapsed ? selectedDayData.date.format("MMM DD") : currentDate.format('MMMM')} toggleGridCollapse={toggleGridCollapse} isExpanded={!isGridCollapsed} />

      <GestureRecognizer
        onSwipeLeft={onSwipeLeft}
        onSwipeRight={onSwipeRight}
        style={{ flex: 1 }}
      >
        {grid}
        {isGridCollapsed && <DayView dayData={selectedDayData}></DayView>}
      </GestureRecognizer>
      <PageIndicator variant='train' count={12} current={currentDate.month()} />
    </SafeAreaView>
  );
};

export default MonthGrid;
