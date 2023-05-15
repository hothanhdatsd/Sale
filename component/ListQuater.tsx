import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {data, dataStreet} from '../data/data';

export default function ListQuater({navigation}: any) {
  const [selectedID, setSelectedID] = useState<number>();
  const [street, setStreet] = useState<
    {
      id: number;
      idQuarter: number;
      street: string;
      room: number;
      roomAvailible: number;
    }[]
  >([]);
  const handler = () => {
    const matchingStreets = dataStreet.filter(r => r.idQuarter === selectedID);
    setStreet(matchingStreets);
  };

  return (
    <View style={{flex: 1, backgroundColor: '#F7F7F7'}}>
      <View style={{flex: 8}}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#26235C',
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            flexDirection: 'row',
            paddingTop: 10,
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 24,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{marginRight: 20, alignSelf: 'center'}}
              onPress={() => {
                navigation.goBack();
              }}>
              <Image source={require('../Assets/back.png')}></Image>
            </TouchableOpacity>
            <Text style={{color: '#fff', fontSize: 20, textAlign: 'center'}}>
              Danh sách khu
            </Text>
          </View>
          <Image source={require('../Assets/search.png')}></Image>
        </View>
        <View style={{flex: 0.7}}>
          <FlatList
            horizontal={true}
            data={data}
            renderItem={({item}) => (
              <View
                style={[
                  {
                    marginTop: 20,
                    marginLeft: 20,
                    borderWidth: 1,
                    borderColor: '#EAB042',
                    justifyContent: 'center',
                    alignItems: 'center',
                  },
                  selectedID == item.id ? {backgroundColor: '#EAB042'} : {},
                ]}>
                <Text
                  onPressIn={() => {
                    setSelectedID(item.id);
                  }}
                  onPress={handler}
                  style={[
                    {
                      paddingHorizontal: 5,
                      color: '#EAB042',
                      textAlign: 'center',
                    },
                    selectedID == item.id ? {color: '#fff'} : {},
                  ]}>
                  {item.name}
                </Text>
              </View>
            )}></FlatList>
        </View>
        <View style={{flex: 6}}>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
              marginLeft: 20,
              marginRight: 20,
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 22, fontWeight: '900'}}>Khu trọ</Text>
            <Text>Số lượng {street.length} </Text>
          </View>
          <FlatList
            style={{marginTop: 10}}
            data={street}
            renderItem={({item}) => (
              <View
                style={{
                  flex: 1,
                  marginTop: 10,
                  backgroundColor: '#fff',
                  borderRadius: 20,
                  borderWidth: 0.5,
                  paddingVertical: 10,
                  paddingHorizontal: 10,
                  marginLeft: 20,
                  marginRight: 20,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View>
                  <Text style={{}}>{item.street}</Text>
                  <Text style={{}}>Phòng trống: {item.room}</Text>
                  <Text style={{}}>Phòng sắp trống: {item.roomAvailible}</Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Text
                    style={{textAlign: 'center', color: '#1036FF'}}
                    onPress={() => {
                      navigation.navigate('detailStreet', {
                        id: item.id,
                        name: item.street,
                      });
                    }}>
                    Xem chi tiết
                  </Text>
                </View>
              </View>
            )}></FlatList>
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
