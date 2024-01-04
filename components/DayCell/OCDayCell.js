import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from "./OCDayCell.styles";
import { getHolidayData, getHolidayIcon } from '../../utilities/OCHolidayHelper';
import { getSaintData } from '../../utilities/OCSaintHelper';
import { getFastIcon } from '../../utilities/OCFastHelper';
import { OCMediumImpact } from '../../utilities/OCHapticHelper';

const OCEmptyDayCell = () => (
  <View style={styles.emptyCell} />
);

const OCDayCell = ({ dateString, dayData, emptyCell, toggleGridCollapse, handleDayCellTap, pos }) => {
  if (emptyCell) {
    return <OCEmptyDayCell />;
  }
  const handlePress = async () => {
    await OCMediumImpact()
    toggleGridCollapse();
    handleDayCellTap(dateString, dayData);
  };

  let date = new Date(dateString)
  
  const today = new Date();
  const holidays = getHolidayData(dateString)
  const isToday = today.getDate() === date.getDate() &&
    today.getMonth() === date.getMonth() &&
    today.getFullYear() === date.getFullYear();

  const saints = getSaintData(dateString)
  const uniqueSaintNames = [...new Set(saints.map(saint => saint.name))];

  return (
    <View style={[styles.cell, styles[pos], dayData.isHoliday || date.getDay() === 0 ? styles.holidayCell : {}]}>
      <TouchableOpacity onPress={handlePress}>
        <View style={styles.topContainer}>
          <View style={[styles.topLeftQuadrant, isToday ? styles.todayIndicator : {}]}>
            <Text style={[styles.topLeftDate, isToday ? styles.todayIndicator : {}]}>{dateString.date()}</Text>
          </View>
          <View style={[styles.topRightQuadrant]}>
            <View style={styles.topRightQuadrantTop}>
              <Text style={styles.topRightDate}>{dayData.cc_day}</Text>
            </View>
            <View style={styles.topRightQuadrantBottom}>
              {
                holidays.length > 0 && holidays.map((holiday, index) => (
                  <Image key={`holiday-icon-${index}`} source={getHolidayIcon(holiday.level)} style={styles.holidayIcon} />
                ))
              }
            </View>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.iconWrapper}>
            <View>
              {<Image source={getFastIcon(dayData.fast_level)} style={[{ width: 20, height: 20, marginTop: 4 }]} />}
            </View>
            <View style={styles.holidayContainer}>
              {holidays.length > 0 && holidays.map((holiday, index) => (
                <Text key={`holiday-title-${index}`} style={styles.holiday}>{holiday.title}</Text>
              ))}
            </View>
            <View style={styles.saintsWrapper}>
              {
                uniqueSaintNames.map((saint, index) => (
                  <Text style={styles.names} key={`saint-title-${index}`} >{saint}</Text>
                ))
              }
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>

  );
};

export default OCDayCell;
