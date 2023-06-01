import React from 'react';
import { View, Text } from 'react-native';
import styles from "./DayCell.styles";

const EmptyDayCell = () => (
  <View style={styles.emptyCell}>
  
  </View>
);

const DayCell = ({ dayData, emptyCell }) => {
  if (emptyCell) {
    return <EmptyDayCell />;
  }

  return (
    <View style={styles.cell}>
      <View style={styles.topContainer}>
        <View style={styles.topLeftQuadrant}>
          <Text>{dayData.date.date()}</Text>
        </View>
        <View style={styles.topRightQuadrant}></View>
      </View>
      <View style={styles.bottomContainer}>
        <Text>{dayData.title}</Text>
        {/* <View style={styles.bottomLeftQuadrant}></View>
        <View style={styles.bottomRightQuadrant}></View> */}
      </View>
    </View>
  );
};

export default DayCell;
