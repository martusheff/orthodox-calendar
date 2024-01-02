import React, { useState } from 'react';
import { View, SafeAreaView, TouchableOpacity } from 'react-native';
import DayCell from '../DayCell/OCDayCell';
import WeekdayHeader from '../WeekdayHeader/OCWeekdayHeader'
import moment from 'moment';
import TopBar from '../TopBar/OCTopBar';
import styles from './OCMonthGrid.styles';
import DayData from '../../models/DayData';
import Collapsible from 'react-native-collapsible';
import DayView from '../DayView/OCDayView';
import { PageIndicator } from 'react-native-page-indicator';
import { MaterialIcons } from '@expo/vector-icons';
import Settings from '../Settings/OCSettings';
import { PanGestureHandler, State, GestureHandlerRootView } from 'react-native-gesture-handler';
import { getDayData, getNewDayData } from '../../utilities/OCDayHelper';
import { getCellPosition } from '../../utilities/OCGridHelper';


const MonthGrid = () => {
  const [currentDate, setCurrentDate] = useState(moment());
  const [isGridCollapsed, setIsGridCollapsed] = useState(false);
  const [selectedDayData, setSelectedDayData] = useState(null);
  const [showSettings, setShowSettings] = useState(false);
  const [selectedNewDayData, setSelectedNewDayData] = useState(null);
  const [isSwiping, setIsSwiping] = useState(false);

  const onSwipeLeft = () => {
    if (isGridCollapsed && !showSettings) {

      const nextDay = selectedDayData.date.clone().add(1, 'day')

      if (nextDay.year() == 2024) {
        const dayData = getDayData(nextDay)
        const newDayData = getNewDayData(nextDay)
        setSelectedDayData(dayData)
        setSelectedNewDayData(newDayData)
        setCurrentDate(nextDay)
      }

    } else {
      const nextMonth = currentDate.clone().add(1, 'month');
      if (nextMonth.year() === 2024) {
        setCurrentDate(nextMonth);
      }
    }
  };

  const onSwipeRight = () => {
    if (isGridCollapsed && !showSettings) {
      const prevDay = selectedDayData.date.clone().subtract(1, 'day')

      if (prevDay.year() == 2024) {
        const dayData = getDayData(prevDay)
        const newDayData = getNewDayData(prevDay)
        setSelectedDayData(dayData)
        setSelectedNewDayData(newDayData)
        setCurrentDate(prevDay)
      }

    } else {
      const prevMonth = currentDate.clone().subtract(1, 'month');
      if (prevMonth.year() === 2024) {
        setCurrentDate(prevMonth);
      }
    }
  };

  const onSwipeGestureEvent = (event) => {
    if (event.nativeEvent.state === State.ACTIVE && !isSwiping) {
      setIsSwiping(true);

      if (event.nativeEvent.velocityX > 0) {
        onSwipeRight()
      } else {
        onSwipeLeft()
      }
    }
  };

  const onSwipeHandlerStateChange = (event) => {
    if (event.nativeEvent.state === State.END) {
      setIsSwiping(false);
    }
  };

  const daysInMonth = Array.from({ length: currentDate.daysInMonth() }, (_, i) => i + 1);
  const startWeekDay = currentDate.clone().startOf('month').day();
  const endWeekDay = currentDate.clone().endOf('month').day();
  const totalSlots = daysInMonth.length + startWeekDay + (6 - endWeekDay);

  const toggleGridCollapse = () => {
    setIsGridCollapsed(!isGridCollapsed);
  };

  const handleDayCellTap = (dayData, newDayData) => {
    setSelectedDayData(dayData);
    setSelectedNewDayData(newDayData)
  };

  const grid = [];
  grid.push(
    <Collapsible key={"header"} collapsed={isGridCollapsed}>
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

  return (
    <SafeAreaView style={styles.container}>
      <TopBar title={isGridCollapsed ? showSettings ? "Settings" : selectedDayData.date.format("MMM DD") : currentDate.format('MMMM')} toggleGridCollapse={toggleGridCollapse} isExpanded={!isGridCollapsed} setIsShowSettings={setShowSettings} year={currentDate.year()} ccYear={7532} />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <PanGestureHandler onGestureEvent={onSwipeGestureEvent} onHandlerStateChange={onSwipeHandlerStateChange} minDeltaX={50}>
          <View style={{ flex: 1 }}>
            {grid}
            {isGridCollapsed ? showSettings ? <Settings></Settings> : <DayView dayData={selectedDayData} newDayData={selectedNewDayData}></DayView> : null}
          </View>
        </PanGestureHandler>
      </GestureHandlerRootView>
      {
        !isGridCollapsed &&
        <View style={styles.pageRow}>
          <TouchableOpacity onPress={onSwipeRight}>
            <MaterialIcons name="arrow-left" size={36} color="rgba(0,0,0,0.7)" />

          </TouchableOpacity>

          <PageIndicator activeColor={'#ee018c'} variant='train' gap={6} borderRadius={0} size={4} count={12} current={currentDate.month()} />
          <TouchableOpacity onPress={onSwipeLeft}>
            <MaterialIcons name="arrow-right" size={36} color="rgba(0,0,0,0.7)" />
          </TouchableOpacity>
        </View>
      }
    </SafeAreaView>
  );
};

export default MonthGrid;