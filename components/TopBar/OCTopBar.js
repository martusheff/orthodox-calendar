import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './OCTopBar.styles';
import { Entypo } from '@expo/vector-icons';
import { OCMediumImpact } from '../../utilities/OCHapticHelper';
import OCColor from '../../styles/OCColor';



const OCTopBar = ({ toggleGridCollapse, title, isExpanded, setIsShowSettings, year, ccYear }) => {

  const handlePress = () => {
    OCMediumImpact()
    if (isExpanded) {
      setIsShowSettings(isExpanded)
    } else {
      setIsShowSettings(false)
    }
    toggleGridCollapse();
  }

  const handleToggle = () => {
    toggleGridCollapse();
  }

  

  return (
    <View>
      <View style={styles.container}>

        <View style={styles.containerBorderBorder}>
          <View style={styles.containerBorder}>
            <View style={styles.yearContainer}>
              <Text style={styles.year}>
                {year}
              </Text>
              <Text style={styles.year}>
                {ccYear}
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
                    <MaterialIcons name="settings" size={24} color={OCColor.black70} />
                    :
                    <Entypo name="chevron-up" size={24} color={OCColor.black70} />}
                </TouchableOpacity>

              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default OCTopBar;
