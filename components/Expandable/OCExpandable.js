import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './OCExpandable.styles';
import { Divider } from 'react-native-elements';
import { OCMediumImpact } from '../../utilities/OCHapticHelper';

const OCExpandable = ({ title, description, showDivider }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = async () => {
    await OCMediumImpact()
    setExpanded(!expanded);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.titleRow} onPress={toggleExpand}>
        <Text style={styles.titleText}>{title}</Text>
        <MaterialIcons
          name="chevron-right"
          size={24}
          style={[
            styles.icon,
            expanded ? styles.iconExpanded : null,
          ]}
        />
      </TouchableOpacity>
      {expanded && showDivider &&
        <Divider style={styles.divider} width={2} color={'grey'}></Divider>
      }

      {expanded && <Text style={styles.descriptionText}>{description}</Text>}
    </View>
  );
};

export default OCExpandable;
