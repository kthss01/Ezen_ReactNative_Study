import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import Person from '~/Screens/Person';
import * as D from 'data';

// 활용 : 100개의 Person 배열을 스크롤뷰에 출력
// callback 함수는 함수명만 작성
const people = D.makeArray(100).map(D.createRandomPerson);

export default function App() {
  const children = people.map(person => (
    <Person key={person.id} person={person} />
  ));

  return (
    <SafeAreaView>
      <ScrollView>{children}</ScrollView>
    </SafeAreaView>
  );
}
