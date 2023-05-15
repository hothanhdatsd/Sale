import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import React, {useState} from 'react';

const ContentComponent = () => {
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
          marginTop: 10,
        }}>
        <Text style={{color: '#fff'}}>ĐỔI MẬT KHẨU</Text>
      </View>
    </View>
  );
};

export default function UserDetail({navigation}: any) {
  const [clicked, setClicked] = useState<boolean>(false);
  return (
    <View
      style={{flex: 1}}
      onTouchStart={() => {
        setClicked(false);
      }}>
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
          Tài khoản
        </Text>
      </View>
      <View style={{flex: 8, paddingLeft: 30, paddingRight: 30}}>
        <Image
          style={{alignSelf: 'center'}}
          source={require('../Assets/profile.png')}></Image>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 5,
            marginBottom: 10,
          }}>
          <Text style={{color: '#000'}}>Tài khoản</Text>
          <Text style={{color: '#000'}}>admin</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 5,
            marginBottom: 10,
          }}>
          <Text style={{color: '#000'}}>Mật khẩu</Text>
          <View style={{alignItems: 'flex-end'}}>
            <Text style={{color: '#000'}}>********</Text>
            <Text
              style={{textDecorationLine: 'underline'}}
              onPress={() => {
                if (clicked) {
                } else {
                  setClicked(true);
                }
              }}>
              Đổi mật khẩu
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 5,
            marginBottom: 10,
          }}>
          <Text style={{color: '#000'}}>Tên nhân viên</Text>
          <Text style={{color: '#000'}}>Trần Văn A</Text>
        </View>
        {clicked && <ContentComponent />}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 5,
            marginBottom: 10,
          }}>
          <Text style={{color: '#000'}}>Loại nhân viên</Text>
          <Text style={{color: '#000'}}>Sale Phòng</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 5,
            marginBottom: 10,
          }}>
          <Text style={{color: '#000'}}>Số điện thoại</Text>
          <Text style={{color: '#000'}}>0000555555</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 5,
            marginBottom: 10,
          }}>
          <Text style={{color: '#000'}}>Email</Text>
          <Text style={{color: '#000'}}>ha0919423746@gmail.com</Text>
        </View>
        <View>
          <TouchableOpacity
            style={{
              borderWidth: 0.7,
              borderColor: 'red',
              borderRadius: 20,
              paddingVertical: 10,
              paddingHorizontal: 10,
              marginTop: 50,
              marginRight: 20,
            }}>
            <Text
              style={{
                color: 'red',
                textAlign: 'center',
                fontSize: 22,
                textTransform: 'uppercase',
                fontWeight: '600',
              }}>
              Đăng xuất
            </Text>
          </TouchableOpacity>
        </View>
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
        <TouchableOpacity style={{alignItems: 'center'}}>
          <Image source={require('../Assets/user.png')}></Image>
          <Text style={{color: '#000'}}>Tài khoản</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
