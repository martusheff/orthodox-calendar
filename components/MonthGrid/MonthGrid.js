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
import Collapsible from 'react-native-collapsible';
import DayView from '../DayView/DayView';


const MonthGrid = () => {
  const [currentDate, setCurrentDate] = useState(moment());
  const [isGridCollapsed, setIsGridCollapsed] = useState(false);
  const [selectedDayData, setSelectedDayData] = useState(null);

  const onSwipeLeft = () => setCurrentDate(currentDate.clone().add(1, 'month'));
  const onSwipeRight = () => setCurrentDate(currentDate.clone().subtract(1, 'month'));

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

  const grid = [];
  grid.push(
    <Collapsible collapsed={isGridCollapsed}>
  <WeekdayHeader/>
  </Collapsible>
  )
  for (let i = 0; i < totalSlots; i += 7) {

    const row = [];

    for (let j = i; j < i + 7; j++) {
      const dayNumber = j - startWeekDay + 1;
      const isWithinMonth = dayNumber > 0 && dayNumber <= daysInMonth.length;
      const date = isWithinMonth ? currentDate.clone().date(dayNumber) : null;
      const dayData = isWithinMonth ? getDayData(date) : new DayData();

      row.push(
        <DayCell key={j} dayData={dayData} emptyCell={!isWithinMonth} toggleGridCollapse={toggleGridCollapse} handleDayCellTap={handleDayCellTap} />
      );
    }
    grid.push(
      <Collapsible key={i} collapsed={isGridCollapsed}>
        <View style={styles.row}>{row}</View>
      </Collapsible>
    );
  }

  console.log(selectedDayData)
  return (
    <SafeAreaView style={styles.container}>
      <TopBar title={isGridCollapsed ? selectedDayData.date.format("dddd, MMMM DD, YYYY") : currentDate.format('MMMM YYYY')} toggleGridCollapse={toggleGridCollapse} isExpanded={!isGridCollapsed} />
     d
      <GestureRecognizer
        onSwipeLeft={onSwipeLeft}
        onSwipeRight={onSwipeRight}
        style={{ flex: 1 }}
      >
        {grid}
        {isGridCollapsed && <DayView dayData={selectedDayData}></DayView>}
      </GestureRecognizer>
    </SafeAreaView>
  );
};

export default MonthGrid;
