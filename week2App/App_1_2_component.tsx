// JSX 사용하기 위해 React가 JSX를 자바스크립트로 변환
import React from 'react';
// 사용할 component import
import {SafeAreaView, Text} from 'react-native';
// 파일 상대경로 import
import * as D from './src/data';
// 파일 절대경로 import babel 설정인가 그걸로 잡는거
import Ass from 'Components/Ass';
import ClassComponent from '~/Screens/ClassComponent';
import ArrowComponent from '~/Screens/ArrowComponent';
import Person from '~/Screens/Person';

const person = D.createRandomPerson();

// 활용 : 100개의 Person 배열을 스크롤뷰에 출력

export default function App() {
  return (
    <SafeAreaView>
      {/* <Text>{JSON.stringify(person, null, 2)}</Text> */}
      <ClassComponent />
      <ArrowComponent />
      <Person person={person} />
    </SafeAreaView>
  );
}
