import React, { useState } from 'react';
import { View, SafeAreaView, TouchableOpacity } from 'react-native';
import OCDayCell from '../DayCell/OCDayCell';
import OCWeekdayHeader from '../WeekdayHeader/OCWeekdayHeader'
import moment from 'moment';
import OCTopBar from '../TopBar/OCTopBar';
import styles from './OCMonthGrid.styles';
import Collapsible from 'react-native-collapsible';
import OCDayView from '../DayView/OCDayView';
import { PageIndicator } from 'react-native-page-indicator';
import { MaterialIcons } from '@expo/vector-icons';
import OCSettings from '../Settings/OCSettings';
import { PanGestureHandler, State, GestureHandlerRootView } from 'react-native-gesture-handler';
import { getDayData } from '../../utilities/OCDayHelper';
import { getCellPosition } from '../../utilities/OCGridHelper';
import { OCMediumImpact } from '../../utilities/OCHapticHelper';
import OCColor from '../../styles/OCColor';
import { getYearData } from '../../utilities/OCYearHelper';

const OCMonthGrid = () => {
  const [currentDate, setCurrentDate] = useState(moment());
  const [isGridCollapsed, setIsGridCollapsed] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [selectedDayData, setSelectedDayData] = useState(null);
  const [isSwiping, setIsSwiping] = useState(false);

  const onSwipeLeft = (tapped) => {

    if(tapped == true) {
      OCMediumImpact()
    }

    if (isGridCollapsed && !showSettings) {

      const nextDay = currentDate.clone().add(1, 'day')

      if (nextDay.year() == 2024) {
        const dayData = getDayData(nextDay)
        setSelectedDayData(dayData)
        setCurrentDate(nextDay)
      }

    } else {
      const nextMonth = currentDate.clone().add(1, 'month');
      if (nextMonth.year() === 2024) {
        setCurrentDate(nextMonth);
      }
    }
  };

  const onSwipeRight = (tapped) => {

    if(tapped == true) {
      OCMediumImpact()
    }

    if (isGridCollapsed && !showSettings) {
      const prevDay = currentDate.clone().subtract(1, 'day')

      if (prevDay.year() == 2024) {
        const dayData = getDayData(prevDay)
        setSelectedDayData(dayData)
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

  const handleDayCellTap = (date, dayData) => {
    setCurrentDate(date)
    setSelectedDayData(dayData)
  };

  const grid = [];
  grid.push(
    <Collapsible key={"header"} collapsed={isGridCollapsed}>
      <OCWeekdayHeader />
    </Collapsible>
  )
  for (let i = 0; i < totalSlots; i += 7) {

    const row = [];

    for (let j = i; j < i + 7; j++) {
      const dayNumber = j - startWeekDay + 1;
      const isWithinMonth = dayNumber > 0 && dayNumber <= daysInMonth.length;
      const date = isWithinMonth ? currentDate.clone().date(dayNumber) : null;
      const dayData = isWithinMonth ? getDayData(date) : null;
      const pos = getCellPosition(dayNumber, j, daysInMonth, i)

      row.push(
        <OCDayCell key={j} dateString={date} dayData={dayData} emptyCell={!isWithinMonth} toggleGridCollapse={toggleGridCollapse} handleDayCellTap={handleDayCellTap} pos={pos} />
      );
    }
    grid.push(
      <Collapsible key={i} collapsed={isGridCollapsed}>
        <View style={styles.row}>{row}</View>
      </Collapsible>
    );
  }

  let yearData = getYearData(currentDate)

  return (
    <SafeAreaView style={styles.container}>
      <OCTopBar title={isGridCollapsed ? showSettings ? "Settings" : currentDate.format("MMM DD") : currentDate.format('MMMM')} toggleGridCollapse={toggleGridCollapse} isExpanded={!isGridCollapsed} setIsShowSettings={setShowSettings} year={currentDate.year()} ccYear={yearData.cc_year} />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <PanGestureHandler onGestureEvent={onSwipeGestureEvent} onHandlerStateChange={onSwipeHandlerStateChange} minDeltaX={50}>
          <View style={{ flex: 1 }}>
            {grid}
            {isGridCollapsed ? showSettings ? <OCSettings/> : <OCDayView date={currentDate} dayData={selectedDayData}></OCDayView> : null}
          </View>
        </PanGestureHandler>
      </GestureHandlerRootView>

      {
        !isGridCollapsed &&
        <View style={styles.pageRow}>
          <TouchableOpacity onPress={() => onSwipeRight(true)}>
            <MaterialIcons name="arrow-left" size={36} color={OCColor.black70} />

          </TouchableOpacity>

          <PageIndicator activeColor={OCColor.pink} variant='train' gap={6} borderRadius={0} size={4} count={12} current={currentDate.month()} />
          <TouchableOpacity onPress={() => onSwipeLeft(true)}>
            <MaterialIcons name="arrow-right" size={36} color={OCColor.black70} />
          </TouchableOpacity>
        </View>
      }
    </SafeAreaView>
  );
};

export default OCMonthGrid;