// step 1 : Date를 이용한 시간 정보 출력
/* import React from 'react';
import {StyleSheet, SafeAreaView, Text} from 'react-native';

export default function App() {
  const time = new Date();
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Text style={[styles.digitFont, styles.time]}>
        {time.toLocaleTimeString()}
      </Text>
      <Text style={styles.digitFont}>{time.toLocaleDateString()}</Text>
    </SafeAreaView>
  );
} // App close */

// step 2 : setInterval 함수 사용 (시간 정보 갱신)
// 리액트 훅(hook)은 react 모듈에서 제공됨
/* import React, {useEffect, useState} from 'react';
import {StyleSheet, SafeAreaView, Text} from 'react-native';

export default function App() {
  const [time, setTime] = useState(new Date());
  // useState 훅 : 갱신한 시간데이터를 화면에 반영 (reRendering)
  // useEffect 훅 : setInterval() 이 한번만 실행되게 할 때 씀
  // deq (의존성 항목) -> 빈값이면 한번만 실행시키게됨
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date()); // 시간 상태 갱신
    }, 1000); // 1000 ms => 1초

    // setInterval() 함수 실행 종료시에는 반드시 메모리 누수 방지 처리
    return () => clearInterval(id);
  }, []);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Text style={[styles.digitFont, styles.time]}>
        {time.toLocaleTimeString()}
      </Text>
      <Text style={styles.digitFont}>{time.toLocaleDateString()}</Text>
    </SafeAreaView>
  );
} // App close */

// step 3 : 외부에 따로 구현된 코드를 import 해서 사용 처리
// 리액트 훅 관련 코드 import 해서 사용
import React from 'react';
import {StyleSheet, SafeAreaView, Text} from 'react-native';
import {useClock} from './src/hooks';

export default function App() {
  const time = useClock();
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Text style={[styles.digitFont, styles.time]}>
        {time.toLocaleTimeString()}
      </Text>
      <Text style={styles.digitFont}>{time.toLocaleDateString()}</Text>
    </SafeAreaView>
  );
} // App close */

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  digitFont: {
    fontFamily: 'MajorMonoDisplay-Regular',
    fontWeight: '400',
  },
  time: {
    fontSize: 50,
  },
});
