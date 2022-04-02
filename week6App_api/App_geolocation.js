// Geolocation api : 사용자의 위치 정보 확인, 위치 추적시에 사용
// 권한 설정이 필요함
import React, {Component} from 'react';
import {TouchableHighlight, View, Text, StyleSheet} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

let styles = StyleSheet.create({});

export default class App extends Component {
  constructor() {
    super();

    // originalCoords, updateCoords, id로 구성된 초기 state
    // originalCoords, updateCoords 빈 객체, id는 빈 문자열
    this.state = {
      originalCoords: {},
      updateCoords: {},
      id: '',
    };

    this.clearWatch = this.clearWatch.bind(this);
  }

  // compoment mount 될 때
  componentDidMount() {
    // geolocation.getCurrentPosition 을 호출함
    Geolocation.getCurrentPosition(
      info => {
        // originalCoords state 에 success.coords
        this.setState({
          originalCoords: info.coords,
        });
      },
      err => console.log('err', err),
    );

    // watchPosition 을 호출하고 함수 결과를 id 변수에 저장함
    // 위치 추적을 중단할 때 id를 이용
    let id = Geolocation.watchPosition(
      // id state의 값을 저장함
      success => {
        this.setState({
          id,
          updateCoords: success.coords,
        });
      },
      err => console.log('err', err),
      {enableHighAccuracy: true, timeout: 10000, maximumAge: 3000},
    );
  }

  // 위치 추적을 중단하는 clearWatch 메소드 작성
  clearWatch() {
    Geolocation.clearWatch(this.state.id);
  }

  // 원래 위치와 최근 위치의 위도와 경도를 화면에 표시함
  render() {
    const {originalCoords, updateCoords} = this.state;
    return (
      <View style={styles.container}>
        <Text>Original Coordinates</Text>
        <Text>Longitude : {originalCoords.longitude}</Text>
        <Text>Latitude : {originalCoords.latitude}</Text>
        <Text>Updated Coordinates</Text>
        <Text>Longitude : {updateCoords.longitude}</Text>
        <Text>Latitude : {updateCoords.latitude}</Text>

        <TouchableHighlight onPress={this.clearWatch} style={styles.button}>
          <Text>ClearWatch</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
