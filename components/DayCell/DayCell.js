import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from "./DayCell.styles";
import { useNavigation } from '@react-navigation/native';
import { SharedElement } from 'react-navigation-shared-element';
import { MaterialCommunityIcons } from '@expo/vector-icons';



const EmptyDayCell = () => (
  <View style={styles.emptyCell}>

  </View>
);

const DayCell = ({ dayData, emptyCell }) => {
  if (emptyCell) {
    return <EmptyDayCell />;
  }

  const navigation = useNavigation();

  const handlePress = () => {
    if (!emptyCell) {
      navigation.navigate('DayView', { dayData });
    }
  };

  return (

    <View style={styles.cell}>
      <TouchableOpacity onPress={handlePress}>
        <View style={styles.topContainer}>
          <View style={styles.topLeftQuadrant}>
            <Text>{dayData.date.date()}</Text>
          </View>
          <View style={styles.topRightQuadrant}></View>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.iconWrapper}>
            {dayData.title && <MaterialCommunityIcons name="cross" size={24} color="black" />}
            {dayData.fastTitle && <MaterialCommunityIcons name="fish" size={24} color="black" />}
            {dayData.saints.length > 0 ? (
              dayData.saints.map((saint) => (
                <Text style={styles.names} key={saint.id}>{saint.name}</Text>
              ))
            ) : null}

          </View>
        </View>
      </TouchableOpacity>
    </View>

  );
};

export default DayCell;
