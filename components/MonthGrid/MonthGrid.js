import React, { useState } from 'react';
import { View, SafeAreaView, TouchableOpacity, Platform} from 'react-native';
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
import { MaterialIcons } from '@expo/vector-icons';
import ReactNativeHapticFeedback from "react-native-haptic-feedback";
import Settings from '../Settings/Settings';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import { PanGestureHandler, State } from 'react-native-gesture-handler';


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
  const [showSettings, setShowSettings] = useState(false);
  const [selectedNewDayData, setSelectedNewDayData] = useState(null);
  const [isSwiping, setIsSwiping] = useState(false);

  const onSwipeLeft = () => {
    if (isGridCollapsed) {
      const nextDay = selectedDayData.date.clone().add(1, 'day')

      const dayData = getDayData(nextDay)
      const newDayData = getNewDayData(nextDay)
      setSelectedDayData(dayData)
      setSelectedNewDayData(newDayData)
      setCurrentDate(nextDay)

    } else {
      console.log("swiped left!")
      const nextMonth = currentDate.clone().add(1, 'month');
      if (nextMonth.year() === 2024) {
        setCurrentDate(nextMonth);
      }
    }

  };

  const onSwipeRight = () => {
    if (isGridCollapsed) {
      const prevDay = selectedDayData.date.clone().subtract(1, 'day')

      const dayData = getDayData(prevDay)
      const newDayData = getNewDayData(prevDay)
      setSelectedDayData(dayData)
      setSelectedNewDayData(newDayData)
      setCurrentDate(prevDay)
    } else {
      const prevMonth = currentDate.clone().subtract(1, 'month');
      if (prevMonth.year() === 2024 || (prevMonth.year() === 2023 && prevMonth.month() == 11)) {
        setCurrentDate(prevMonth);
      }
    }

  };


  const onSwipeGestureEvent = (event) => {
    if (event.nativeEvent.state === State.ACTIVE && !isSwiping) {
      // Set the isSwiping state to true to indicate that a swipe is in progress
      setIsSwiping(true);

      // Handle your swipe -- left or right based on velocity or translation
      if (event.nativeEvent.velocityX > 0) {
        if (isGridCollapsed) {
          const prevDay = selectedDayData.date.clone().subtract(1, 'day')
  
          const dayData = getDayData(prevDay)
          const newDayData = getNewDayData(prevDay)
          setSelectedDayData(dayData)
          setSelectedNewDayData(newDayData)
          setCurrentDate(prevDay)
        } else {
          const prevMonth = currentDate.clone().subtract(1, 'month');
          if (prevMonth.year() === 2024 || (prevMonth.year() === 2023 && prevMonth.month() == 11)) {
            setCurrentDate(prevMonth);
          }
        }      } else {
        if (isGridCollapsed) {
          const nextDay = selectedDayData.date.clone().add(1, 'day')
  
          const dayData = getDayData(nextDay)
          const newDayData = getNewDayData(nextDay)
          setSelectedDayData(dayData)
          setSelectedNewDayData(newDayData)
          setCurrentDate(nextDay)
  
        } else {
          console.log("swiped left!")
          const nextMonth = currentDate.clone().add(1, 'month');
          if (nextMonth.year() === 2024) {
            setCurrentDate(nextMonth);
          }
        }      }
    }
  };

  const onSwipeHandlerStateChange = (event) => {
    if (event.nativeEvent.state === State.END) {
      // Once the swipe gesture has ended, reset the isSwiping state
      setIsSwiping(false);
    }
  };

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80, // Adjust this value to control sensitivity
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


  const getCellPosition = (i, j, dim, r) => {
    if (i == 1) {
      if (j == 0) {
        return DayCellPosition.FIRST_FIRST;
      }
      if (j == 6) {
        return DayCellPosition.FIRST_LAST;
      }
      return r > 1 && r < 35 ? DayCellPosition.CENTER_LEFT : DayCellPosition.LEFT;
    } else if (i == dim.length) {
      return r > 1 && r < 35 ? DayCellPosition.CENTER_LAST : DayCellPosition.LAST;
    } else if (j % 7 == 0) {
      return r > 1 && r < 35 ? j < 8 ? DayCellPosition.CENTER_LEFT_LEADING : DayCellPosition.CENTER_LEFT : DayCellPosition.LEFT;
    } else if (j % 7 == 6) {
      return r > 1 && r < 35 ? DayCellPosition.CENTER_RIGHT : DayCellPosition.RIGHT;
    } else if (i < 8) {
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

      <GestureRecognizer
        onSwipeLeft={onSwipeLeft}
        onSwipeRight={onSwipeRight}
        config={config}
        style={{ flex: 1 }}
      >
      {/* <PanGestureHandler
       onGestureEvent={onSwipeGestureEvent}

       onHandlerStateChange={onSwipeHandlerStateChange}
       minDeltaX={50}  // Adjust sensitivity for horizontal swipes
      > */}
        <View style={{flex: 1}}>
        {grid}

        {isGridCollapsed ? showSettings ? <Settings></Settings> : <DayView dayData={selectedDayData} newDayData={selectedNewDayData}></DayView> : null}
        </View>
        </GestureRecognizer>
      {/* </PanGestureHandler> */}
      {
        !isGridCollapsed &&
        <View style={styles.pageRow}>
          <TouchableOpacity onPress={onSwipeRight}>
            <MaterialIcons name="arrow-left" size={36} color="rgba(0,0,0,0.7)" />

          </TouchableOpacity>

          <PageIndicator variant='train' count={12} current={currentDate.month()} />
          <TouchableOpacity onPress={onSwipeLeft}>
            <MaterialIcons name="arrow-right" size={36} color="rgba(0,0,0,0.7)" />
          </TouchableOpacity>
        </View>
      }

    </SafeAreaView>
  );
};

export default MonthGrid;
