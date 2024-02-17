import React, { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from "./OCContactCell.styles";
import { TextInput } from 'react-native-gesture-handler';
import { OCMediumImpact } from '../../utilities/OCHapticHelper';
import { MaterialIcons } from '@expo/vector-icons';
import { Divider } from 'react-native-elements';


const OCContactDropdown = ({ }) => {
    const [expanded, setExpanded] = useState(false);
    const [name, setName] = useState('');
    const [message, setBody] = useState('');

    const toggleExpand = async () => {

        await OCMediumImpact()
        setExpanded(!expanded);

    };

    const handleSend = async () => {
        await OCMediumImpact()
        Keyboard.dismiss()
    }

    const setMessage = (text) => {
        const maxLines = 5;
        const numLines = text.split(/\r*\n/).length;
      
        if (numLines <= maxLines) {
          setBody(text); // Assuming setMessageState is the function to update your message state
        }
      };

      
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.titleRow} onPress={toggleExpand}>
                <Text style={styles.titleText}>{"Contact"}</Text>

                <MaterialIcons
                    name="chevron-right"
                    size={24}
                    style={[
                        styles.icon,
                        expanded ? styles.iconExpanded : null,
                    ]}
                />

            </TouchableOpacity>
            {expanded &&
                <Divider style={styles.divider} width={2} color={'grey'}></Divider>
            }
            {expanded &&
                <View>
                    <View>
                        <Text style={styles.inputHeader}>Name</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={setName}
                            value={name}
                        />
                    </View>
                    <View>
                        <Text style={styles.inputHeader}>Message</Text>
                        <TextInput
                            multiline
                            maxLines={5}
                            style={styles.textArea}
                            onChangeText={setMessage}
                            value={message}
                        />
                    </View>
                    <View style={styles.readMoreContainer}>
                        <View style={styles.readMoreButton}>
                            <TouchableOpacity onPress={handleSend}>
                                <Text style={styles.readMoreLabel}>Send</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            }

        </View>
    );
};

export default OCContactDropdown;

