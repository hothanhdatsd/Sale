import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Home from './component/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Navigate from './component/Navigate';
import Login from './component/Login';
import ListQuater from './component/ListQuater';
import StreetDetail from './component/StreetDetail';
import RoomDetail from './component/RoomDetail';
import UserDetail from './component/UserDetail';
import Chart from './component/Chart';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Home"
          component={Home}></Stack.Screen>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="navigate"
          component={Navigate}></Stack.Screen>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="login"
          component={Login}></Stack.Screen>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="listquarter"
          component={ListQuater}></Stack.Screen>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="detailStreet"
          component={StreetDetail}></Stack.Screen>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="detailroom"
          component={RoomDetail}></Stack.Screen>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="detailuser"
          component={UserDetail}></Stack.Screen>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="chart"
          component={Chart}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
