import {
  View,
  Text,
  Image,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function Home({navigation}: any) {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('navigate');
      }}
      style={{flex: 1}}>
      <ImageBackground
        style={{flex: 1}}
        source={require('../Assets/Loading.png')}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 50,
          }}>
          <Image source={require('../Assets/logo.png')}></Image>
          <Image source={require('../Assets/sale.png')}></Image>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}
