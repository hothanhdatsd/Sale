import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

export default function RoomDetail({navigation, route}: any) {
  const {item} = route.params;
  console.log(item);
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View
          style={{
            backgroundColor: '#26235C',
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexDirection: 'row',
            paddingLeft: 30,
            height: 110,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Image source={require('../Assets/back.png')}></Image>
          </TouchableOpacity>
          <Text
            style={{
              color: '#fff',
              textAlign: 'center',
              fontSize: 20,
              paddingLeft: 52,
              fontWeight: '500',
            }}>
            Thông tin phòng
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            paddingTop: 15,
            paddingRight: 30,
            paddingBottom: 20,
          }}>
          <View style={{paddingLeft: 30, flex: 1}}>
            <Image
              source={require('../Assets/image.png')}
              style={{width: 350, height: 200, borderRadius: 20}}></Image>
            <Text style={{color: '#000'}}>Số phòng: {item.name}</Text>
            <Text style={{color: '#000'}}>
              Giá: <Text style={{color: '#808080'}}>{item.price}</Text>
            </Text>
            <Text style={{color: '#000'}}>Trạng thái phòng: {item.status}</Text>
            <Text style={{color: '#000'}}>Khu trọ: TĐ - 41 Đường 30 </Text>
            <Text style={{color: '#000'}}>Vùng: Thành phố Thủ Đức </Text>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: '#000',
                paddingBottom: 5,
              }}>
              Giảm giá:
            </Text>
            <View
              style={{
                borderRadius: 20,
                borderWidth: 0.5,
                paddingVertical: 10,
                paddingHorizontal: 15,
              }}>
              <Text style={{color: '#000'}}>Loại giảm giá: Phòng</Text>
              <Text style={{color: '#000'}}>Hình thức giảm giá: Phần trăm</Text>
              <Text style={{color: '#000'}}>Số phần trăm giảm: 15%</Text>
              <Text style={{color: '#000'}}>
                Tháng hiệu lực: 03/2023 -&gt; 03/2023
              </Text>
              <Text style={{color: '#000'}}>Lý do giảm: KM</Text>
              <Text style={{color: '#000'}}>Giá : {item.price}</Text>
              <Text style={{color: '#000'}}>
                Giá sau khi giảm: <Text style={{color: 'red'}}> 3,825,000</Text>
              </Text>
            </View>
            <Text
              style={{
                paddingBottom: 5,
                fontSize: 20,
                fontWeight: 'bold',
                color: '#000',
              }}>
              Tiện ích:
            </Text>
            <TextInput
              placeholder="Tiện ích đang cập nhật..."
              placeholderTextColor={'#000'}
              style={{
                color: '#000',
                borderWidth: 0.5,
                borderRadius: 20,
                marginBottom: 5,
              }}></TextInput>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 5,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <BouncyCheckbox fillColor="#1036FF"></BouncyCheckbox>
                <Text style={{color: '#000'}}>Phòng có gác</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <BouncyCheckbox fillColor="#1036FF"></BouncyCheckbox>
                <Text style={{color: '#000'}}>Phòng có ban công</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{flex: 1, color: '#000'}}>Điện: {item.elec}</Text>
              <Text style={{flex: 1, color: '#000'}}>Nước: {item.water}</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{flex: 1, color: '#000'}}>Wifi: {item.wifi}</Text>
              <Text style={{flex: 1, color: '#000'}}>Rác: {item.trash}</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{flex: 1, color: '#000'}}>
                Máy giặc: {item.washing}
              </Text>
              <Text style={{flex: 1, color: '#000'}}>Xe: {item.motor}</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{flex: 1, color: '#000'}}>
                Số xe tối đa: {item.numberMotor}
              </Text>
              <Text style={{flex: 1, color: '#000'}}>
                Số người tối đa: {item.numberPerson}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{flex: 1, color: '#000'}}>
                Dịch vụ: {item.service}
              </Text>
              <Text style={{flex: 1, color: '#000'}}>Khác: {item.orther}</Text>
            </View>
            <Text style={{color: '#000'}}>
              Số tiền phụ thu khi vượt quá SL người: 300,000
            </Text>
            <Text style={{color: '#000'}}>
              Giá phòng tương lai: 6,000,000 (VND)
            </Text>
            <Text style={{color: '#000'}}>
              Ngày hiệu lực giá mới: 01/04/2023
            </Text>
            <Text style={{textAlign: 'center', color: 'red', fontSize: 20}}>
              Liên hệ: {item.contact}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 80,
            backgroundColor: '#fff',
            borderTopStartRadius: 20,
            borderTopRightRadius: 20,
            paddingLeft: 30,
            paddingRight: 30,
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
      </ScrollView>
    </SafeAreaView>
  );
}
