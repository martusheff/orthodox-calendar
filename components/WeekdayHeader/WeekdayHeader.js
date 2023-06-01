import React from 'react';
import { View, Text } from 'react-native';
import styles from './WeekdayHeader.styles';

const WeekdayHeader = () => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <View style={styles.row}>
      {days.map((day, index) => (
        <View key={index} style={styles.cell}>
          <Text>{day}</Text>
        </View>
      ))}
    </View>
  );
}

export default WeekdayHeader;
