import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import styles from './OCSettings.styles';
import OCExpandable from '../Expandable/OCExpandable';
import { Switch, Text } from 'react-native-elements';
import { loadHapticSetting, loadStyleSetting, saveHapticSetting, saveStyleSetting } from '../../utilities/OCPreferencesHelper';
import OCColor from '../../styles/OCColor';
import OCContactCell from '../Contact/OCContactCell';
import OCContactDropdown from '../Contact/OCContactCell';
import { ScrollView } from 'react-native-gesture-handler';

const OCSettings = () => {

  const [isHapticEnabled, setIsHapticEnabled] = useState(false);
  const [isModernEnabled, setIsModernEnabled] = useState(false);

  useEffect(() => {
    const initSettings = async () => {
      const loadedHapticSetting = await loadHapticSetting();
      const loadedStyleSetting = await loadStyleSetting();
      setIsHapticEnabled(loadedHapticSetting);
      setIsModernEnabled(loadedStyleSetting);
    };

    initSettings();
  }, []);

  const handleHapticChange = async (newValue) => {
    setIsHapticEnabled(newValue);
    await saveHapticSetting(newValue);
  };

  const handleStyleChange = async (newValue) => {
    setIsModernEnabled(newValue);
    await saveStyleSetting(newValue);
  };

  const about = "This calendar project began in 1983 in the village of Nikolaevsk, Alaska. Russian Old believers needed a calendar to live by day to day. All of the information is put into the calendar according to those who live by the faith. It has been made annually, as a guide to the Old Believers traditional way of life, including all celebrated holidays, weekly liturgy reading, periods of lent, specific fasting requirements of days, and words of scripture, in both Russian and English languages. The project has since been made available digitally for all to include into modern daily life."
  
  return (
    <ScrollView>
    <View style={styles.container}>

      {/* <View style={styles.switchCell}>
        <Text style={styles.switchTitle}>{isModernEnabled ? "Modern" : "Traditional"}</Text>
        <Switch
          value={isModernEnabled}
          onValueChange={handleStyleChange}
          trackColor={{ false: "gray", true: OCColor.pink }}
        />
      </View> */}


      <View style={styles.switchCell}>
        <Text style={styles.switchTitle}>Tap Vibrations</Text>
        <Switch
          value={isHapticEnabled}
          onValueChange={handleHapticChange}
          trackColor={{ false: "gray", true: OCColor.pink }}
        />
      </View>

      {/* <View style={[styles.cell, { borderRadius: isModernEnabled ? 12 : 0 }]}>
        <OCContactDropdown/>
      </View> */}

      <View style={[styles.cell, { borderRadius: isModernEnabled ? 12 : 0}]}>
        <OCExpandable title={"About the Calendar"} description={about} showDivider={true} />
      </View>
    </View>
    </ScrollView>
  );
};

export default OCSettings;
