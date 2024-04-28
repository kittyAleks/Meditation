import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomSheetProvider from '../components/BottomSheet.tsx';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {RootNavigator} from './Private.tsx';

export const Navigation: FC = () => {
  return (
    <NavigationContainer>
      <GestureHandlerRootView>
        <BottomSheetProvider>
          <RootNavigator />
        </BottomSheetProvider>
      </GestureHandlerRootView>
    </NavigationContainer>
  );
};
