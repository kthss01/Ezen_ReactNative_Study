import React from 'react';
import {LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './navigations/Stack';
import TabNavigation from './navigations/Tab';

const App = () => {
  //   LogBox.ignoreAllLogs(); //Ignore all log notifications

  return (
    <NavigationContainer>
      {/* <StackNavigation /> */}
      <TabNavigation />
    </NavigationContainer>
  );
};

export default App;
