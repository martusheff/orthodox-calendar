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
      <View style={styles.containerBorderBorder}>
        <View style={styles.containerBorder}>
          <View style={styles.yearContainer}>
            <Text style={styles.year}>
              {2024}
            </Text>
            <Text style={styles.year}>
              {7533}
            </Text>

          </View>
        </View>
      </View>

      <View style={styles.containerBorderBorder}>
        <View style={styles.containerBorder}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>
              {title}
            </Text>
          </View>
        </View>
      </View>


      <View style={styles.containerBorderBorder}>
        <View style={styles.containerBorder}>
          <View style={styles.yearContainer}>
            <TouchableOpacity onPress={handleToggle}>
              <TouchableOpacity onPress={handlePress}>
                {isExpanded ?
                  <MaterialIcons name="settings" size={24} color="rgba(0,0,0,0.7)" />
                  :
                  <Entypo name="chevron-up" size={24} color="rgba(0,0,0,0.7)" />}
              </TouchableOpacity>

            </TouchableOpacity>
          </View>
        </View>
      </View>


    </View>
  );
};

export default TopBar;
