import React, {FC, useRef} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text} from 'react-native';

import {Book} from './book';
import {MainStackParamList} from './types';

import CustomTabBar from './CustomTabBar/CustomTabBar';
import {Audio} from '../screens/Audio/Audio.tsx';
import {Articles} from '../screens/Articles/Articles.tsx';
import {ArticleDetails} from '../components/ArticleDetailsScreen.tsx';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {BottomSheet} from '../components/BottomSheet.tsx';

const Tab = createBottomTabNavigator();

const RootStack = createNativeStackNavigator();

export const RootNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      <RootStack.Screen
        name="Main"
        component={Private}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name="ArticleDetails"
        component={ArticleDetails}
        options={{headerShown: true}}
      />
    </RootStack.Navigator>
  );
};

const Private: FC = () => {
  return (
    <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen
        name="Sounds"
        component={Audio}
        options={{headerShown: false, title: 'Sounds'}}
      />
      <Tab.Screen
        name="Articles"
        component={Articles}
        options={{headerShown: true, title: 'Articles'}}
      />
    </Tab.Navigator>
  );
};
