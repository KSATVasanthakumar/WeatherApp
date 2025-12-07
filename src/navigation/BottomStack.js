import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Map, MyCity, SearchScreen, Settings } from '../screen';
import imageFile from '../constants/imageFile';
import colors from '../styles/colors';

const Tab = createBottomTabNavigator();
const BottomStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: colors.CERULEAN },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <Image
              tintColor={focused ? colors.WHITE : colors.LIGHT_SEA_BLUE}
              source={imageFile.home}
              style={styles.imageStyle}
            />
          ),
        }}
      />
      <Tab.Screen
        name="MyCity"
        component={MyCity}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <Image
              tintColor={focused ? colors.WHITE : colors.LIGHT_SEA_BLUE}
              source={imageFile.city}
              style={styles.imageStyle}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={Map}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <Image
              tintColor={focused ? colors.WHITE : colors.LIGHT_SEA_BLUE}
              source={imageFile.map}
              style={styles.imageStyle}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <Image
              tintColor={focused ? colors.WHITE : colors.LIGHT_SEA_BLUE}
              source={imageFile.settings}
              style={styles.imageStyle}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomStack;

const styles = StyleSheet.create({
  imageStyle: {
    height: 25,
    width: 25,
    marginTop: 40,
  },
});
