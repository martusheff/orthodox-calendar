import React from 'react';
import { View, Text } from 'react-native';
import styles from './OCWeekdayHeader.styles';

const OCWeekdayHeader = () => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <View style={styles.row}>
      {days.map((day, index) => (
        <View
          key={index}
          style={[
            styles.cell,
            index === 0 ? styles.firstCell : index === days.length - 1 ? styles.lastCell : styles.middleCell,
            day === "Sun" ? styles.sunday : {}
          ]}>
          <Text style={[styles.title]}>{day.toUpperCase()}</Text>
        </View>
      ))}
    </View>
  );
}

export default OCWeekdayHeader;

