/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

//Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Screens
import LoadingScreen from './src/screens/Loading';
import LoginScreen from './src/screens/Login';
import AccountScreen from './src/screens/Account';

import {AuthContextProvider} from './src/context/AuthContext';


const Stack = createNativeStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AuthContextProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Loading" component={LoadingScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Account" component={AccountScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </AuthContextProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;