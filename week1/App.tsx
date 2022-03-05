import React from 'react';
import {Text} from 'react-native';

export default function App() {
  console.log('week_1 App call...');
  const testElement = React.createElement(Text, null, 'Success');
  // createElement API
  /*
    가장 저수준의 가상 DOM 객체를 생성한다.
  */
  return testElement;
}
