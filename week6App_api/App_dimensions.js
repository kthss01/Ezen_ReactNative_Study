// Dimensions api : 디바이스의 화면 정보 확인 용도
import React, {Component} from 'react';
// react-native 에서 Dimensions 가져오기
import {View, Text, Dimensions, StyleSheet} from 'react-native';

let styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
});

// width와 height 조회해 오기
const {width, height} = Dimensions.get('window');

// 또는 width 객체 속성(object property)을 직접 조회해 오기
const windowWidth = Dimensions.get('window').width;

// View 컴포넌트에서 조회해 와서 변수에 저장한 디바이스 정보를 뷰에 렌더링함
const App = () => {
  return (
    <View style={styles.container}>
      <Text>{width}</Text>
      <Text>{height}</Text>
      <Text>{windowWidth}</Text>
    </View>
  );
};

export default App;
