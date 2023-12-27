import React, { useState } from 'react';
// import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MonthGrid from './components/MonthGrid/MonthGrid';
import Settings from './components/Settings/Settings';
import styles from './App.styles';
import DayView from './components/DayView/DayView';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const Stack = createSharedElementStackNavigator();




const fetchFonts = () => {
  return Font.loadAsync({
    'TimesNewRomanBold': require('./assets/fonts/TimesNewRomanBold.ttf'),
    'TimesNewRoman': require('./assets/fonts/TimesNewRoman.ttf'), // Update with the correct path to your Times New Roman font file
    'Algerian': require('./assets/fonts/Algerian.otf'), // Update with the correct path to your Times New Roman font file

  });
};

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <SafeAreaProvider>
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer style={styles.container}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={MonthGrid} options={{ headerShown: false }} />
          <Stack.Screen name="DayView" component={DayView} />
          <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
