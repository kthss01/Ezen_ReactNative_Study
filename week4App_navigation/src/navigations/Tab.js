import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Mail, Meet, Settings} from '../screens/TabScreens';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const TabIcon = ({name, size, color}) => {
  return <Icon name={name} size={size} color={color} />;
};

const Tab = createBottomTabNavigator();

/* const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Settings"
      screenAOptions={{
        labelPosition: 'beside-icon', // 아이콘 오른쪽에 라벨 표시
        showLabel: false, // 탭 바에 라벨 표시 여부
        style: {
          backgroundColor: '#54b7f9',
          borderTopColor: '#ffffff',
          borderTopWidth: 2,
          activeTintColor: '#ffffff', // 라벨 색도 버튼 활성화에 따라 바뀌게 설정
          inactiveTintColor: '#cfcfcf',
        },
      }}>
      <Tab.Screen
        name="mail"
        component={Mail}
        options={props => ({
          // 탭 바의 아이콘/라벨과 연결 설정
          tabBarLabel: 'Inbox',
          tabBarIcon: () =>
            TabIcon({
              ...props,
              name: props.focused ? 'email' : 'email-outline',
              // focused 상태에 따라 아이콘 이미지 다르게 표시함
            }),
        })}
      />
      <Tab.Screen
        name="meet"
        component={Meet}
        options={{
          // 탭 바의 아이콘/라벨과 연결 설정
          tabBarIcon: props =>
            TabIcon({
              ...props,
              name: props.focused ? 'video' : 'video-outline',
              // focused 상태에 따라 아이콘 이미지 다르게 표시함
            }),
        }}
      />
      <Tab.Screen
        name="settings"
        component={Settings}
        options={{
          // 탭 바의 아이콘/라벨과 연결 설정
          tabBarIcon: props =>
            TabIcon({
              ...props,
              name: props.focused ? 'settings' : 'settings-outline',
              // focused 상태에 따라 아이콘 이미지 다르게 표시함
            }),
        }}
      />
    </Tab.Navigator>
  );
}; */

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Settings"
      screenOptions={({route}) => ({
        tabBarIcon: props => {
          let name = '';
          if (route.name === 'Mail') name = 'mailbox';
          else if (route.name === 'Meet') name = 'toolbox';
          else name = 'message-settings';
          return TabIcon({...props, name});
        },
      })}>
      <Tab.Screen name="Mail" component={Mail} />
      <Tab.Screen name="Meet" component={Meet} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
