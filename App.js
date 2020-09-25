import React from 'react';

import Feed from './src/feed'
import Details from './src/details'

import Screen1 from './src/screens/drawer/screen1'
import Screen2 from './src/screens/drawer/screen2'
import Screen3 from './src/screens/drawer/screen3'

import Tab1 from './src/screens/tabs/Tab1'
import Tab2 from './src/screens/tabs/Tab2'
import Tab3 from './src/screens/tabs/Tab3'

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
// import { View, Text } from 'react-native';

const Drawer = createDrawerNavigator()
const stack = createStackNavigator()
const MaterialBottomTabs = createMaterialBottomTabNavigator()
const MaterialTopTabs = createMaterialTopTabNavigator()



const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home"/>
        <Drawer.Screen name="Contacts" component={Screen1} />
        <Drawer.Screen name="Favorites" component={Screen2} />
        <Drawer.Screen name="Settings" component={Screen3} />
      </Drawer.Navigator>


    </NavigationContainer>


    // <View>
    //   <Feed />
    //   <Text>Hello World</Text>
    // </View>
  );
};
export default App;
