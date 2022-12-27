import {StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import SearchScreen from './SearchScreen';
import EventsScreen from './EventsScreen';
import FavouritesScreen from './FavouritesScreen';
import ProfileScreen from './ProfileScreen';
import {COLORS} from '../assets/colors';

const Tab = createBottomTabNavigator();

const HomeScreen = ({route}) => {
  return (
    <Tab.Navigator
      initialRouteName="EventsScreen"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 75,
          backgroundColor: COLORS.white,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 13,
          fontWeight: '400',
          marginBottom: 10,
          color: COLORS.black,
        },
        tabBarIconStyle: {
          marginTop: 10,
        },
      }}>
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({focused, color, size}) => {
            color = COLORS.black;
            size = focused ? 35 : 25;
            return <AntDesign name="search1" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="EventsScreen"
        component={EventsScreen}
        initialParams={route?.params?.response}
        options={{
          tabBarLabel: 'Events',
          tabBarIcon: ({focused, color, size}) => {
            color = COLORS.black;
            size = focused ? 35 : 25;
            return <FontAwesome name="calendar-o" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="FavouritesScreen"
        component={FavouritesScreen}
        options={{
          tabBarLabel: 'Favourites',
          tabBarIcon: ({focused, color, size}) => {
            color = COLORS.black;
            size = focused ? 35 : 25;
            return <Feather name="heart" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused, color, size}) => {
            color = COLORS.black;
            size = focused ? 35 : 25;
            return <Feather name="user" color={color} size={size} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeScreen;
