import {
  View,
  Text,
  Image,
  TextInput,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import React from 'react';
export default function Login({navigation}: any) {
  return (
    <KeyboardAwareScrollView contentContainerStyle={{flex: 1}}>
      <TouchableWithoutFeedback
        style={{flex: 1}}
        onPress={() => {
          Keyboard.dismiss();
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#26235C',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              justifyContent: 'center',
              flex: 1,
              alignItems: 'center',
            }}>
            <Image source={require('../Assets/logo.png')}></Image>
            <Image
              style={{marginTop: -20}}
              source={require('../Assets/sale.png')}></Image>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: '#fff',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              marginTop: 10,
            }}>
            <View
              style={{
                flex: 5,
                justifyContent: 'space-around',
                width: '90%',
              }}>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Text
                  style={{
                    fontSize: 22,
                    fontWeight: '800',
                    textAlign: 'center',
                  }}>
                  Đăng nhập
                </Text>
              </View>
              <View>
                <Text style={{fontSize: 20, fontWeight: '700'}}>Tài khoản</Text>
                <TextInput
                  style={{paddingLeft: 30}}
                  placeholder="Nhập tài khoản"></TextInput>
              </View>
              <View>
                <Text style={{fontSize: 20, fontWeight: '700'}}>Mật khẩu</Text>
                <TextInput
                  style={{paddingLeft: 30}}
                  placeholder="Nhập mật khẩu"></TextInput>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  marginBottom: 20,
                }}>
                <BouncyCheckbox
                  fillColor="#1036FF"
                  onPress={(isChecked: boolean) => {}}
                />
                <Text style={{textAlign: 'center'}}>Lưu đăng nhập</Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('listquarter');
              }}
              style={{
                backgroundColor: '#EAB042',
                flex: 1,
                marginHorizontal: 10,
                borderRadius: 30,
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 10,
                width: '90%',
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: '900',
                  fontSize: 20,
                }}>
                Đăng nhập
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
}
