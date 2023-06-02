import styles from './DayView.styles';
import React from 'react';
import { View, Text } from 'react-native';

const DayView = ({ dayData }) => {

  return (
    <View>
      <Text>{dayData.date.date()}</Text>
      <Text>{dayData.title}</Text>
      {dayData.fastTitle && <Text>{dayData.fastTitle}</Text>}
      {dayData.saints.length > 0 ? (
    dayData.saints.map((saint) => (
      <Text key={saint.id}>{saint.name}</Text>
    ))
  ) : (
    <Text>No Saint Data</Text>
  )}
      {/* Other dayData fields */}
    </View>
  );
};

export default DayView;
