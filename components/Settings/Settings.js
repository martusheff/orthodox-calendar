import React from 'react';
import { View, Text } from 'react-native';
import styles from './Settings.styles';
import { Divider } from 'react-native-elements';

const Settings = () => {

  const about = "This calendar project began in 1983 in the village of Nikolaevsk, Alaska. Russian Old believers needed a calendar to live by day to day. All of the information is put into the calendar according to those who live by the faith. It has been made annually, as a guide to the Old Believers traditional way of life, including all celebrated holidays, weekly liturgy reading, periods of lent, specific fasting requirements of days, and words of scripture, in both Russian and English languages. The project has since been made available digitally for all to include into modern daily life."

  return (
    <View style={styles.container}>
      <Text style={styles.aboutTitle}>About the Calendar</Text>
      <Divider style={styles.divider} width={2} color={'grey'}></Divider>
      <Text style={styles.aboutBody}>{about}</Text>
    </View>
  );
};

export default Settings;
