import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, Image } from 'react-native';

import { ImageAssets } from '@/assets/images';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarLabel: 'Home',
          tabBarInactiveTintColor: '#5D6B98',
          tabBarActiveTintColor: '#087443',
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image source={ImageAssets.activeHome} className="h-4 w-4" />
            ) : (
              <Image source={ImageAssets.home} className="h-4 w-4" />
            ),
        }}
      />
      <Tabs.Screen
        name="transaction"
        options={{
          title: 'Transaction',
          //inactive color
          tabBarInactiveTintColor: '#5D6B98',
          tabBarActiveTintColor: '#087443',

          // add tab icon
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image source={ImageAssets.activeTransaction} className="h-4 w-4" />
            ) : (
              <Image source={ImageAssets.transaction} className="h-4 w-4" />
            ),
        }}
      />
    </Tabs>
  );
}
