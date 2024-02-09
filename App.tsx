/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { auth } from './Firebase';
import Home from './Home';
import SignIn from './SignIn';
import Weather from './Weather';


enableScreens();

const Tab = createBottomTabNavigator();


const App = () => {
  // Créez un état pour savoir si l'utilisateur est connecté ou non
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Vérifiez si l'utilisateur est connecté
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // Si l'utilisateur est connecté, mettez à jour l'état
        setIsAuthenticated(true);
      }
    });
    return unsubscribe;

  }), [];

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
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