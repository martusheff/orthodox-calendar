import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MonthGrid from './components/MonthGrid/MonthGrid';
import Settings from './components/Settings/Settings';
import styles from './App.styles';
import DayView from './components/DayView/DayView';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';


const Stack = createSharedElementStackNavigator();


const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer styles={styles.container}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={MonthGrid} options={{ headerShown: false }} />
          <Stack.Screen name="DayView" component={DayView}/>
          <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
