import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './OCExpandable.styles';
import { Divider } from 'react-native-elements';
import { OCMediumImpact } from '../../utilities/OCHapticHelper';

const OCExpandable = ({ title, description, showDivider, actionButton = false }) => {
  const [expanded, setExpanded] = useState(false);

  const isExpandable = description !== "Additional information is being gathered."

  const toggleExpand = async () => {
    if (isExpandable) {
      await OCMediumImpact()
      setExpanded(!expanded);
    }
  };

  const handleReadMore = async () => {
    await OCMediumImpact()
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.titleRow} onPress={toggleExpand}>
        <Text style={styles.titleText}>{title}</Text>
        {isExpandable &&
          <MaterialIcons
            name="chevron-right"
            size={24}
            style={[
              styles.icon,
              expanded ? styles.iconExpanded : null,
            ]}
          />
        }
      </TouchableOpacity>
      {expanded && showDivider &&
        <Divider style={styles.divider} width={2} color={'grey'}></Divider>
      }
      {expanded &&
        <View>
          <Text style={styles.descriptionText}>{description}</Text>
          { actionButton &&
          <View style={styles.readMoreContainer}>
            <View style={styles.readMoreButton}>
              <TouchableOpacity onPress={handleReadMore}>
                <Text style={styles.readMoreLabel}>Read More</Text>
              </TouchableOpacity>
            </View>

          </View>
          }

        </View>
      }

    </View>
  );
};

export default OCExpandable;
