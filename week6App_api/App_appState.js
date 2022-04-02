// AppState api
// 현재 앱이 활성화된 상태인지, 비활성화된 상태인지, 백그라운드 상태인지
// 'active', 'inactive', 'background' 반환함
// 앱의 상태에 따라 플랫폼의 특정 기능을 수행하게 하거나, 원하는 메서드를 호출함
// 주로 활용하는 이벤트는 change와 memorywarning 임
// 앱의 상태가 변하면 이벤트가 발생하고, 이벤트 리스너를 통해 메서드를 호출함
// 인증에도 사용됨 : 포그라운드 실행시 앱의 잠금 화면을 풀기 위해 비밀번호 입력, 지문인식
// 등의 보안 단계를 추가할 수 있음
// 예제는 componentDidMount에 change 이벤트를 감지하는 이벤트 리스너를 추가해서
//  앱의 현재 상태를 콘솔에 출력 표시함
// 실행시 안드로이드는 home을 눌러서 상태 변화시켜 봄
// 맥은 cmd - shift - h

import React, {Component} from 'react';
// react-native에서 AppState api 가져옴
import {AppState, View, Text, StyleSheet} from 'react-native';

let styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
});

class App extends Component {
  componentDidMount() {
    // AppState.addEventListener 를 호출하고, change와 callback 함수를 인수로 전달
    AppState.addEventListener('change', this.handleAppStateChange);
  }

  handleAppStateChange(currentAppState) {
    // currentAppState 를 콘솔에 출력 표시
    console.log('currentAppState : ', currentAppState);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Test AppState API</Text>
      </View>
    );
  }
}

export default App;
