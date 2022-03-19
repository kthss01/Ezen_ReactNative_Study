// 각각의 상세보기가 들어있는 화면
import React, {useLayoutEffect} from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Container = styled.View`
  flex: 1;
  justify-content: center
  align-items: center;
`;

const StyledText = styled.Text`
  font-size: 30px;
  margin-bottom: 10px;
`;

const Item = ({navigation, route}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitleVisible: false, // 뒤로가기 보일지
      headerTiniColor: '#ffffff',
      headerLeft: ({onPress, tintColor}) => {
        return (
          <Icon.Button
            name="keyboard-backspace"
            size={30}
            style={{
              marginLeft: 11,
            }}
            color={tintColor}
            onPress={onPress}
          />
        );
      }, // 헤더의 왼쪽에 표시할 아이콘에 대한 설정
      headerRight: ({tintColor}) => {
        return (
          <Icon.Button
            name="home-variant"
            size={30}
            style={{
              marginRight: 11,
            }}
            color={tintColor}
            onPress={() => navigation.popToTop()} // 메인화면으로 돌아가게 하는 함수
          />
        );
      }, // 헤더의 오른쪽에 표시할 아이콘에 대한 설정
    });
  }, []); // 화면에 보여질 때 효과 적용

  return (
    <Container>
      <StyledText>Item</StyledText>
      <StyledText>ID : {route.params.id}</StyledText>
      <StyledText>NAME : {route.params.name}</StyledText>
    </Container>
  );
};

export default Item;
