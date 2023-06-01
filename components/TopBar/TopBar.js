import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import styles from './TopBar.styles';

const TopBar = ({ currentMonth }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {currentMonth}
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <MaterialIcons name="settings" size={24} color="black" />
        {/* <MaterialCommunityIcons name="fish" size={24} color="black" />
        <FontAwesome5 name="oil-can" size={24} color="black" />
        <MaterialCommunityIcons name="food-steak" size={24} color="black" /> */}

      </TouchableOpacity>
    </View>
  );
};

export default TopBar;
