import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Chart({navigation}: any) {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 1.5,
          backgroundColor: '#26235C',
          justifyContent: 'flex-start',
          flexDirection: 'row',
          alignItems: 'center',
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}>
        <TouchableOpacity
          style={{marginLeft: 30}}
          onPress={() => {
            navigation.goBack();
          }}>
          <Image source={require('../Assets/back.png')}></Image>
        </TouchableOpacity>
        <Text
          style={{
            paddingLeft: 30,
            color: '#fff',
            fontSize: 24,
            fontWeight: '400',
          }}>
          Thống kê
        </Text>
      </View>
      <View
        style={{
          flex: 8,
          paddingLeft: 30,
          paddingRight: 30,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 30, color: '#000'}}>Comming soon :D</Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          alignItems: 'center',
          backgroundColor: '#fff',
          marginTop: 10,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}>
        <TouchableOpacity
          style={{alignItems: 'center', justifyContent: 'center'}}
          onPress={() => {
            navigation.navigate('chart');
          }}>
          <Image source={require('../Assets/chart.png')}></Image>
          <Text>Thống kê</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{alignItems: 'center', justifyContent: 'center'}}
          onPress={() => {
            navigation.navigate('listquarter');
          }}>
          <Image source={require('../Assets/computer.png')}></Image>
          <Text style={{textAlign: 'center'}}>Bán phòng</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{alignItems: 'center'}}
          onPress={() => {
            navigation.navigate('detailuser');
          }}>
          <Image source={require('../Assets/user.png')}></Image>
          <Text style={{color: '#000'}}>Tài khoản</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
