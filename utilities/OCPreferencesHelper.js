import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveHapticSetting = async (isEnabled) => {
  try {
    await AsyncStorage.setItem('HapticEnabled', JSON.stringify(isEnabled));
  } catch (error) {
  }
};

export const loadHapticSetting = async () => {
  try {
    const hapticSetting = await AsyncStorage.getItem('HapticEnabled');
    return hapticSetting !== null ? JSON.parse(hapticSetting) : false;
  } catch (error) {
    return false; 
  }
};

export const saveStyleSetting = async (isEnabled) => {
  try {
    await AsyncStorage.setItem('ModernEnabled', JSON.stringify(isEnabled));
  } catch (error) {
  }
};

export const loadStyleSetting = async () => {
  try {
    const styleSetting = await AsyncStorage.getItem('ModernEnabled');
    return styleSetting !== null ? JSON.parse(styleSetting) : false;
  } catch (error) {
    return false; 
  }
};
