import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './TopBar.styles';
import { Entypo } from '@expo/vector-icons';


const TopBar = ({ toggleGridCollapse, title, isExpanded, setIsShowSettings, year, ccYear }) => {

  const handlePress = () => {

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
                    <MaterialIcons name="info" size={24} color="rgba(0,0,0,0.7)" />
                    :
                    <Entypo name="chevron-up" size={24} color="rgba(0,0,0,0.7)" />}
                </TouchableOpacity>

              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      {/* <Image style={styles.divider} source={require('../../assets/images/divider.png')}></Image> */}
    </View>
  );
};

export default TopBar;
