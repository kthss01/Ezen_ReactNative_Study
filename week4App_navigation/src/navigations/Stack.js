import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import List from '../screens/List';
import Item from '../screens/Item';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Platform} from 'react-native'; // iOS Android에 대한 플랫폼 설정

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home" // 첫번재로 나올 화면
      screenOptions={{
        cardStyle: {
          backgroundColor: '#ffffff',
        },
        headerStyle: {
          height: 110,
          backgroundColor: '#95a5a6',
          borderBottomWidth: 5,
          borderBottomColor: '#34495e',
        },
        headerTitleStyle: {
          color: '#ffffff',
          fontSize: 24,
        },
        headerTitleAlign: 'center',
        headerTitle: ({style}) => <Icon.Button name="react" style={style} />,
      }}>
      {/* 여러개 필요하면 Stack.Screen 여러개 */}
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false, // 헤더 숨기기
        }}
      />
      <Stack.Screen
        name="List"
        component={List}
        options={({navigation}) => ({
          headerTitle: 'List Screen',
          headerBackTitleVisible: false,
          headerBackTitle: 'Prev',
          headerTitleStyle: {fontSize: 24},
          headerTintColor: '#e74c3c',
          headerBackImage: ({tintColor}) => {
            const style = {
              marginRight: 5,
              marginLeft: Platform.OS === 'ios' ? 11 : 0,
            };

            return (
              <Icon.Button
                name="keyboard-backspace"
                size={30}
                color={tintColor}
                style={style}
                onPress={() => {
                  //   debugger; // props로 navigation 안받음
                  // navigation.navigate('Home'); // 이거 없음
                  navigation.popToTop();
                }}
                // onPress={() => navigation.popToTop()}
                // 여기에 onPress 걸려면 navigation을 받아야 하는데 애매한듯
              />
            );
          },
        })}
      />
      <Stack.Screen name="Detail" component={Item} />
      {/* <Stack.Screen name="Default" component={}/> */}
    </Stack.Navigator>
  );
};

export default StackNavigation;
