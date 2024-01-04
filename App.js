import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import styles from './App.styles';
import OCMonthGrid from './components/MonthGrid/OCMonthGrid';


const fetchFonts = () => {
  return Font.loadAsync({
    'TimesNewRomanBold': require('./assets/fonts/TimesNewRomanBold.ttf'),
    'TimesNewRoman': require('./assets/fonts/TimesNewRoman.ttf'),
    'Algerian': require('./assets/fonts/Algerian.otf'),
  });
};

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect( () => {

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
       <OCMonthGrid/>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
