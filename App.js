import React from 'react';  
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Ionicons} from "@expo/vector-icons";

import DashboardScreen from './screens/DashboardScreen';
import SettingsScreen from './screens/SettingsScreen';
import DevicesScreen from './screens/DevicesScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#ffffff' },
          headerShadowVisible: false,
          headerTitleStyle: { fontWeight: '800', fontSize: 20 },
        }}
      >
        <Tab.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{
            headerShown: false,
          tabBarIcon:({color,size}) => (
          <Ionicons name= "thermometer-outline" color={color} size={size}/>
          )
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ 
            headerShown: false,
             tabBarIcon:({color,size}) => (
          <Ionicons name= "settings-outline" color={color} size={size}/>
          )
           }}
        />
        <Tab.Screen
          name="Devices"
          component={DevicesScreen}
          options={{  
            headerShown: false,
            tabBarIcon:({color,size}) => (
          <Ionicons name= "phone-portrait-outline" color={color} size={size}/>
          ) 
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
