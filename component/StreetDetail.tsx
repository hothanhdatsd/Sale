import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {data, dataRoom, roomStatus} from '../data/data';

export default function StreetDetail({navigation, route}: any) {
  const {id, name} = route.params;
  const [selectedID, setSelectedID] = useState<number>();
  const [dataStreet, setDatastreet] = useState<
    {
      id: number;
      idStreet: number;
      name: string;
      status: string;
      price: string;
      elec: number;
      trash: number;
      water: number;
      motor: number;
      wifi: string;
      washing: number;
      numberMotor: number;
      numberPerson: number;
      service: number;
      orther: string;
      detail: string;
      contact: string;
    }[]
  >([]);

  const [filterStatus, setFilterStatus] = useState('Tất cả');
  useEffect(() => {
    handler();
  }, [filterStatus]);
  const handler = () => {
    const filter = dataRoom.filter(r => r.idStreet === id);
    setDatastreet(filter);
  };
  const handlerFillRoom = (status: string) => {
    setFilterStatus(status);
    if (status === 'Tất cả') {
      const filter = dataRoom.filter(r => r.idStreet === id);
      setDatastreet(filter);
    } else {
      const filterr = dataStreet.filter(r => r.status === filterStatus);
      setDatastreet(filterr);
    }
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
              style={{marginRight: 20}}
              onPress={() => {
                navigation.goBack();
              }}>
              <Image source={require('../Assets/back.png')}></Image>
            </TouchableOpacity>
            <Text style={{color: '#fff', fontSize: 20}}>{name}</Text>
          </View>
          <Image source={require('../Assets/search.png')}></Image>
        </View>
        <View style={{flex: 0.7}}>
          <FlatList
            horizontal={true}
            data={roomStatus}
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
                    setFilterStatus(item.status);
                  }}
                  onPress={() => {
                    handlerFillRoom(item.status);
                  }}
                  style={[
                    {
                      paddingHorizontal: 5,
                      color: '#EAB042',
                      textAlign: 'center',
                    },
                    selectedID == item.id ? {color: '#fff'} : {},
                  ]}>
                  {item.status}
                </Text>
              </View>
            )}></FlatList>
        </View>
        <View style={{flex: 6, paddingHorizontal: 20}}>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
              marginLeft: 20,
              marginRight: 20,
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 22, fontWeight: '900'}}>Khu trọ</Text>
            <Text>Số lượng {dataStreet.length} </Text>
          </View>
          <FlatList
            data={dataStreet}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('detailroom', {
                    item,
                  });
                }}
                style={{
                  marginVertical: 20,
                  backgroundColor: '#fff',
                  borderRadius: 30,
                  borderWidth: 1,
                  paddingVertical: 15,
                  paddingHorizontal: 15,
                }}>
                <View
                  style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                  }}>
                  <Text>
                    {item.name}
                    <Text style={{color: '#EFC677'}}>({item.status})</Text>
                  </Text>
                  <Text>Giá: {item.price}</Text>
                </View>
                <View
                  style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                  }}>
                  <Text>Điện:{item.elec}k/kW</Text>
                  <Text>Nước: {item.water}k/m3</Text>
                  <Text>Wifi:{item.wifi}</Text>
                </View>
                <View
                  style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                  }}>
                  <Text>Rác:{item.trash}k/kW</Text>
                  <Text>Xe: {item.motor}k/m3</Text>
                  <Text>Máy giặc:{item.washing}</Text>
                </View>
                <View
                  style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                  }}>
                  <Text>Số xe tối đa: {item.numberMotor}k/m3</Text>
                  <Text>Số người tối đa:{item.numberPerson}</Text>
                </View>
                <View
                  style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                  }}>
                  <Text>Dịch vụ: {item.service}k/m3</Text>
                  <Text>Khác:{item.orther}</Text>
                </View>
                <View
                  style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                  }}>
                  <Text style={{fontWeight: '900'}}>
                    Mô tả:<Text style={{fontWeight: '500'}}>{item.detail}</Text>
                  </Text>
                </View>
                <View
                  style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                  }}>
                  <Text style={{color: 'red'}}>Liên hệ:{item.contact}</Text>
                </View>
              </TouchableOpacity>
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
        <TouchableOpacity style={{alignItems: 'center'}}>
          <Image source={require('../Assets/user.png')}></Image>
          <Text style={{color: '#000'}}>Tài khoản</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
