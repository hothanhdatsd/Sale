import {View, Text, Image} from 'react-native';
import React from 'react';

export default function Navigate({navigation}: any) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#26235C',
        justifyContent: 'space-between',
      }}>
      <View style={{justifyContent: 'flex-end', flex: 1, alignItems: 'center'}}>
        <Image source={require('../Assets/logo.png')}></Image>
        <Image
          style={{marginTop: -20}}
          source={require('../Assets/sale.png')}></Image>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          flexDirection: 'row',
        }}>
        <View
          style={{
            backgroundColor: '#EAB042',
            flex: 1,
            marginHorizontal: 10,
            borderRadius: 30,
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <Text
            style={{
              textAlign: 'center',
              paddingVertical: 17.5,
              fontWeight: '900',
              fontSize: 20,
            }}
            onPress={() => {
              navigation.navigate('login');
            }}>
            Đăng nhập
          </Text>
        </View>
      </View>
    </View>
  );
}
