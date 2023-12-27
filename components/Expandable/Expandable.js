import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './Expandable.styles';
import { Divider } from 'react-native-elements';

const Expandable = ({ title, description, showDivider }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);  // Toggle expanded state
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
            expanded ? styles.iconExpanded : null,  // Apply conditional rotation
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

export default Expandable;
