// NetInfo api : 네트워크 연결 상태 확인
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import NetInfo from '@react-native-community/netinfo';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
});

export default class App extends Component {
  constructor() {
    super();

    // connectionInfo의 초기 state에 빈 객체 저장함
    this.state = {
      connectionInfo: {},
    };
  }

  componentDidMount() {
    // 초기 연결 상태를 조회해서 state에 저장
    NetInfo.fetch().then(connectionInfo => {
      console.log('Connection Type : ', connectionInfo.type);
      console.log('is Connected : ', connectionInfo.isConnected);
      this.setState(connectionInfo);
    });

    // 새로운 연결 상태를 파악하고 state에 저장
    NetInfo.addEventListener(connectionInfo => {
      console.log('Changed Connection Type : ', connectionInfo.type);
      console.log('is Connected : ', connectionInfo.isConnected);
      this.setState(connectionInfo);
    });
  }

  // 연결 상태를 화면에 렌더링
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.type}</Text>
      </View>
    );
  }
}
