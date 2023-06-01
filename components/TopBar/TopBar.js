import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
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
      </TouchableOpacity>
    </View>
  );
};

export default TopBar;
