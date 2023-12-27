import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from "./DayCell.styles";
import { useNavigation } from '@react-navigation/native';
import { SharedElement } from 'react-navigation-shared-element';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { getHolidayData, getHolidayIcon, getSaintData } from '../../DayDataHelper';

const EmptyDayCell = () => (
  <View style={styles.emptyCell}/>
);

const DayCell = ({ dayData, newDayData, emptyCell, toggleGridCollapse, handleDayCellTap, pos }) => {
  if (emptyCell) {
    return <EmptyDayCell />;
  }

  const navigation = useNavigation();

  const handlePress = () => {
    toggleGridCollapse();
    handleDayCellTap(dayData, newDayData);
  };

  const getFastIcon = (fl) => {

    switch (fl) {
      case 0:
        return require('../../assets/images/blank.png')
      case 1:
        return require('../../assets/images/fish.png')
      case 2:
        return require('../../assets/images/olive-oil.png')
      case 3:
        return require('../../assets/images/no-oil.png')
      case 4:
        return require('../../assets/images/milk-eggs4.png')
      case 6:
        return require('../../assets/images/oil-after-church.png')
      case 7:
        return require('../../assets/images/fish-caviat.png')
      default:
        return require('../../assets/images/blank.png')
    }
  }

  let date = new Date(dayData.date)
  const today = new Date();

  const holidays = getHolidayData(dayData.date)


  const isToday = today.getDate() === date.getDate() &&
    today.getMonth() === date.getMonth() &&
    today.getFullYear() === date.getFullYear();

  
    const saints = getSaintData(dayData.date)

    const uniqueSaintNames = [...new Set(saints.map(saint => saint.name))];

  return (
    <View style={[styles.cell, styles[pos], newDayData.isHoliday || date.getDay() === 0 ? styles.holidayCell : {}]}>
      <TouchableOpacity onPress={handlePress}>
        <View style={styles.topContainer}>
          <View style={[styles.topLeftQuadrant, isToday ? styles.todayIndicator : {}]}>
            <Text style={[styles.topLeftDate, isToday ? styles.todayIndicator : {}]}>{dayData.date.date()}</Text>
          </View>
          <View style={[styles.topRightQuadrant]}>
            <View style={styles.topRightQuadrantTop}>
              <Text style={styles.topRightDate}>{newDayData.cc_day}</Text>
            </View>
            <View style={styles.topRightQuadrantBottom}>
              {
                holidays.length > 0 && holidays.map((holiday, index) => (
                  <Image key={`holiday-icon-${index}`} source={getHolidayIcon(holiday.level)} style={styles.holidayIcon}/>
                ))
              }
             
            </View>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.iconWrapper}>
            <View>
              { <Image source={getFastIcon(newDayData.fast_level)} style={[{ width: 20, height: 20, marginTop: 4 }]} />}
            </View>
            <View style={styles.holidayContainer}>
              { holidays.length > 0 && holidays.map((holiday, index) => (
                <Text key={`holiday-title-${index}`} style={styles.holiday}>{holiday.title}</Text>
              ))}
              {/* {newDayData.isHoliday && <Text style={styles.holiday}>{newDayData.holiday_description}</Text>} */}
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

export default DayCell;
