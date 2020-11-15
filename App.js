//@flow
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicon from 'react-native-vector-icons/Ionicons';


import Homescreen from './pages/home';
import Settingscreen from './pages/setting';
import Contentscreen from './pages/content';

import { styles } from './styles';

const Tab = createBottomTabNavigator();

export default function App() {

  return (

    <NavigationContainer>
      <Tab.Navigator screenOptions={({route}) => ({
        tabBarIcon: ({ focused, color, size }) => {

          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          }else if (route.name === 'Settings') {
            iconName = focused ? 'md-settings' : 'md-settings-outline';
          }else if (route.name === 'Activities') {
            iconName = focused ? 'list' : 'list-outline';
          }

          return <Ionicon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#fff',
        inactiveTintColor: '#000',
        labelStyle: {
          fontSize: 16,
          lineHeight: 18,
        },
        style: {
          backgroundColor: '#FD8F33',
          borderBottomWidth: 2, 
          borderTopWidth: 1,
          borderTopColor: 'black',
          borderBottomColor: 'black',
          height: 60,
        },
      }}>
        <Tab.Screen name="Home" component={Homescreen} />
        <Tab.Screen name="Activities" component={Contentscreen} />
        <Tab.Screen name="Settings" component={Settingscreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
