import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import styles from './OCSettings.styles';
import OCExpandable from '../Expandable/OCExpandable';
import { Switch, Text } from 'react-native-elements';
import { loadHapticSetting, saveHapticSetting } from '../../utilities/OCPreferencesHelper';

const OCSettings = () => {

  const [isHapticEnabled, setIsHapticEnabled] = useState(false);

  useEffect(() => {
    const initSettings = async () => {
      const loadedHapticSetting = await loadHapticSetting();
      setIsHapticEnabled(loadedHapticSetting);
    };

    initSettings();
  }, []);

  const handleHapticChange = async (newValue) => {
    setIsHapticEnabled(newValue);
    await saveHapticSetting(newValue);
  };

  const about = "This calendar project began in 1983 in the village of Nikolaevsk, Alaska. Russian Old believers needed a calendar to live by day to day. All of the information is put into the calendar according to those who live by the faith. It has been made annually, as a guide to the Old Believers traditional way of life, including all celebrated holidays, weekly liturgy reading, periods of lent, specific fasting requirements of days, and words of scripture, in both Russian and English languages. The project has since been made available digitally for all to include into modern daily life."
  
  return (
    <View style={styles.container}>
      <View style={styles.cell}>
        <OCExpandable title={"About the Calendar"} description={about} showDivider={true} />
      </View>
      <View style={styles.switchCell}>
        <Text style={styles.switchTitle}>Haptic Feedback</Text>
        <Switch
          value={isHapticEnabled}
          onValueChange={handleHapticChange}
          trackColor={{ false: "gray", true: '#ee018c' }}
        />
      </View>
    </View>

  );
};

export default OCSettings;
