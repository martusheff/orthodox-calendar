import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import styles from './TopBar.styles';
import GestureRecognizer from 'react-native-swipe-gestures';
import { Entypo } from '@expo/vector-icons';

const TopBar = ({ toggleGridCollapse, title, isExpanded }) => {
  const navigation = useNavigation()
  
  const handlePress = () => {
    isExpanded ?
    navigation.navigate('Settings')
    :
    toggleGridCollapse();
  }

  const handleToggle = () => {
    toggleGridCollapse();
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleToggle}>
      <Text style={styles.title}>
        {title}
      </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress}>
        {isExpanded ?
         <MaterialIcons name="settings" size={24} color="black" /> 
        :
        <Entypo name="chevron-up" size={24} color="black" />}

      </TouchableOpacity>
    </View>
  );
};

export default TopBar;
