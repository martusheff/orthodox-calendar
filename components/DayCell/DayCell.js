import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from "./DayCell.styles";
import { useNavigation } from '@react-navigation/native';
import { SharedElement } from 'react-navigation-shared-element';
import { MaterialCommunityIcons } from '@expo/vector-icons';



const EmptyDayCell = () => (
  <View style={styles.emptyCell}>

  </View>
);


const DayCell = ({ dayData, newDayData, emptyCell, toggleGridCollapse, handleDayCellTap, pos }) => {
  if (emptyCell) {
    return <EmptyDayCell />;
  }

  const navigation = useNavigation();

  const handlePress = () => {
    toggleGridCollapse();
    handleDayCellTap(dayData);
  };



  const getFastIcon = (fl) => {

    switch (fl) {
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

  console.log("FOOBARR:")
  console.log(newDayData)

  return (
    <View style={[styles.cell, styles[pos], newDayData.isHoliday  ? styles.holidayCell : {}]}>
      <TouchableOpacity onPress={handlePress}>
        <View style={styles.topContainer}>
          <View style={styles.topLeftQuadrant}>
            <Text style={styles.topLeftDate}>{dayData.date.date()}</Text>
          </View>
          <View style={styles.topRightQuadrant}>
            <View style={styles.topRightQuadrantTop}>
              <Text style={styles.topRightDate}>{newDayData.cc_day}</Text>
            </View>
            <View style={styles.topRightQuadrantBottom}>
              {dayData.holidays.length > 0 && <Image source={require('../../assets/images/cross1.png')} style={{ width: 9, height: 9 }} />}
              {dayData.holidays.length > 0 && <Image source={require('../../assets/images/cross3.png')} style={{ width: 9, height: 9 }} />}
            </View>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.iconWrapper}>
            <View>
              {newDayData.fast_level != 0 && <Image source={getFastIcon(newDayData.fast_level)} style={[{ width: 20, height: 20, marginTop: 4 }]} />}
            </View>
            <View style={styles.saintsWrapper}>
              {
                newDayData.saints.slice(0, 2).map((saint) => (
                  <Text style={styles.names} key={saint}>{saint}</Text>
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
