/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import SignIn from './SignIn';
import Weather from './Weather';
import { auth } from './Firebase';

enableScreens();

type RootStackParamList = {
  Home: any;
  SignIn: any;
  Weather: any;
};

const Tab = createBottomTabNavigator();


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {

    if (!auth.currentUser) {
      // L'utilisateur est connecté
      setIsAuthenticated(false);
    } else {
      // L'utilisateur n'est pas connecté
      setIsAuthenticated(true);
    }
  }), [];



  return (

    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            {/* <Tab.Screen name="SignIn" component={SignIn} /> */}
            {/* <Tab.Screen name="Weather" component={Weather} /> */}

            {isAuthenticated ? (
              // Si l'utilisateur est connecté, affichez l'écran Weather
              <Tab.Screen name="Weather" component={Weather} />
            ) : (
              // Sinon, affichez l'écran de connexion
              <Tab.Screen name="SignIn" component={SignIn} />
            )}

          </Tab.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  )
}

export default App;