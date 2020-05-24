import React, {useContext} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Provider as AuthProvider } from './src/context/authContext';
import AccountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import SplashScreen from "./src/screens/SplashScreen";
import { Context as AuthContext } from "./src/context/authContext";
import StackNavigator from "@react-navigation/stack/src/navigators/createStackNavigator";

const Stack = createStackNavigator();
const TrackListStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TrackListFlow = () => {
  return (
    <TrackListStack.Navigator initialRouteName="TrackList">
      <TrackListStack.Screen name="TrackList" component={TrackListScreen} />
      <TrackListStack.Screen name="TrackDetail" component={TrackDetailScreen} />
    </TrackListStack.Navigator>
  )
};

const App = () => {
  const { state } = useContext(AuthContext);
  if (state.isLoading) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
  return (
    <NavigationContainer>
      {state.token ? (
        <Tab.Navigator>
          <Tab.Screen name="TrackListFlow" component={TrackListFlow} />
          <Tab.Screen name="TrackCreate" component={TrackCreateScreen} />
          <Tab.Screen name="Account" component={AccountScreen} />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator
          initialRouteName="SignUp"
        >
          <Stack.Screen
            name="SignUp"
            component={SignupScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignIn"
            component={SigninScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default () => {
  return (
    <AuthProvider>
      <SafeAreaProvider>
        <App />
      </SafeAreaProvider>
    </AuthProvider>
  )
}
