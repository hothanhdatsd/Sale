import {View, Text, TextInput} from 'react-native';
import React from 'react';

export default function changePassword() {
  return (
    <View style={{height: 424}}>
      <Text
        style={{
          color: '#26235C',
          fontSize: 24,
          fontWeight: '900',
          textAlign: 'center',
        }}>
        Đổi mật khẩu
      </Text>
      <View>
        <Text style={{color: '#000', fontWeight: '700', fontSize: 20}}>
          Mật khẩu
        </Text>
        <TextInput
          style={{
            borderColor: '#000',
            borderWidth: 0.5,
            borderRadius: 5,
            marginTop: 5,
          }}
          placeholder="Nhập mật khẩu"></TextInput>
      </View>
      <View>
        <Text style={{color: '#000', fontWeight: '700', fontSize: 20}}>
          Xác nhận mật khẩu
        </Text>
        <TextInput
          style={{
            borderColor: '#000',
            borderWidth: 0.5,
            borderRadius: 5,
            marginTop: 5,
          }}
          placeholder="Nhập lại mật khẩu"></TextInput>
      </View>
      <View
        style={{
          backgroundColor: '#26235C',
          borderRadius: 5,
          paddingVertical: 10,
          paddingHorizontal: 10,
          alignItems: 'center',
        }}>
        <Text style={{color: '#fff'}}>ĐỔI MẬT KHẨU</Text>
      </View>
    </View>
  );
}
