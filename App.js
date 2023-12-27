import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import MonthGrid from './components/MonthGrid/MonthGrid';
import Settings from './components/Settings/Settings';
import DayView from './components/DayView/DayView';
import styles from './App.styles';

const Stack = createSharedElementStackNavigator();

const fetchFonts = () => {
  return Font.loadAsync({
    'TimesNewRomanBold': require('./assets/fonts/TimesNewRomanBold.ttf'),
    'TimesNewRoman': require('./assets/fonts/TimesNewRoman.ttf'),
    'Algerian': require('./assets/fonts/Algerian.otf'),
  });
};

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        await SplashScreen.preventAutoHideAsync();
        // Load fonts
        await fetchFonts();
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setFontLoaded(true);
        await SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!fontLoaded) {
    return null; // Or return a loading indicator if you have one
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={[{ flex: 1 }, styles.container]}>
        <NavigationContainer>
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
