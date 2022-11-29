import {View, Text, ImageBackground, Image} from 'react-native';
import React from 'react';
import Images from '../../constants';

const MainBox = ({

  img2,
  bgcolor,
  I1,
  textone,
  left,
}) => {
  return (
    <>
      <View style={{width: 300, height: 234, borderRadius: 10, margin: 12}}>
        <Image
          resizeMode="cover"
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 10,}}
          source={img2}
        />
      </View>
      <View
        style={{
          width: 40,
          height: 40,
          // backgroundColor: '#FF4053',
          borderRadius: 15,
          position: 'absolute',
          top: 25,
          right: 20,
        }}>
        <Image
          source={I1}
          resizeMode="contain"
          style={{width: '100%', height: '100%'}}
        />
      </View>
      <View
        style={{
          position: 'absolute',
          top: 100,
          left: left,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            color: '#000',
            textAlign: 'center',
            top: 5,
            fontSize: 25,
          }}>
          {textone}
        </Text>
        <View
          style={{
            width: 77,
            height: 31,
            borderRadius: 15,
            margin: 2,
            backgroundColor: bgcolor,
            marginTop: 15,
          }}>
          <Text
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              color: '#fff',
              textAlign: 'center',
              top: 5,
            }}>
            5 min
          </Text>
        </View>
      </View>
    </>
  );
};

export default MainBox;
