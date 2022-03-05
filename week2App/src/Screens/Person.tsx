import React from 'react';
import type {FC} from 'react';
import {Text} from 'react-native';
import * as D from '../data';

// 타입스크립트로 컴포넌트 구현한 경우
export type PersonProps = {
  person: D.IPerson;
};

const Person: FC<PersonProps> = ({person}) => {
  return <Text>{JSON.stringify(person, null, 2)}</Text>;
};

export default Person;
