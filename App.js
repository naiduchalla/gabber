import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import ChatScreen from './screens/ChatScreen';
import AddChatScreen from './screens/AddChatScreen';
const Stack = createStackNavigator();
const globalScreenOptions = {
  headerStyle:{ backgroundColor: "#2C6BED"},
  headerTitlestyle:{color:"white"},
  headerTintColor:"white",
};
 
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions}>
      <Stack.Screen name='Login' component={LoginScreen}/>
      <Stack.Screen name='Register' component={RegisterScreen}/>
      <Stack.Screen name='Home' component={HomeScreen}/>
      <Stack.Screen name='AddChat' component={AddChatScreen}/>
      <Stack.Screen name='Chat' component={ChatScreen}/>
      </Stack.Navigator>
  
    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
