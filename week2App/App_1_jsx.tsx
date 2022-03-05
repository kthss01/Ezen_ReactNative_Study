// JSX 사용하기 위해 React가 JSX를 자바스크립트로 변환
import React from 'react';
// 사용할 component import
import {SafeAreaView, Text} from 'react-native';

// App 생성
export default function App() {
  const isLoading = false;

  // 이렇게는 안됨
  // if (isLoading) {
  //   <SafeAreaView>
  //     <Text>isLoading...</Text>
  //   </SafeAreaView>
  // }

  //////////////////////////////////////////////////////////////////////

  // return (
  //   // 짧은 조건문 사용
  //   <SafeAreaView>
  //     {isLoading && <Text>isLoading...</Text>}
  //     {!isLoading && <Text>Hello JSX World!</Text>}
  //   </SafeAreaView>
  // );

  //////////////////////////////////////////////////////////////////////

  // JSX 변수 사용
  // const children = isLoading ? (
  //   <Text>isLoading...</Text>
  // ) : (
  //   <Text>Hello JSX World!</Text>
  // );

  //console.log(children);

  //////////////////////////////////////////////////////////////////////

  // // 배열 적용
  // const children = [
  //   <Text>Hello JSX World!</Text>,
  //   <Text>Hello JSX World!</Text>,
  //   <Text>Hello JSX World!</Text>,
  // ];

  //////////////////////////////////////////////////////////////////////

  // // JSX 문법 : 데이터 배열을 컴포넌트 배열로 만들기 => map() 사용
  // const children = [1, 2, 3].map(i => <Text>Hello JSX World!</Text>);

  // 활용 : 100개의 Text 컴포넌트 만들기
  // fill 채우는 메소드
  const children = new Array(100)
    .fill(null)
    .map((notUsed, index) => <Text>Hello JSX World! {index}</Text>);

  // 한개 항목이 나갈 때는 ()로 안묶어도 된다고 하심 JSX 규칙
  return <SafeAreaView>{children}</SafeAreaView>;
}
