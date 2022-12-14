import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Images from '../../constants';
import Icon from 'react-native-vector-icons/AntDesign';
const MainBox = ({
  route,
  img2,
  bgcolor,
  date1,
  I1,
  textone,
  left,
  heart,
  Wheart,
  minutes,
  marginTop11,
  icon2,
}) => {
  return (
    <>
      <View style={{width: 315, height: 234, borderRadius: 10, margin: 3}}>
        <ImageBackground
          resizeMode="contain"
          style={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 12,
          }}
          source={img2}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                marginTop: marginTop11,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              {icon2 && (
                <View
                  style={{
                    // backgroundColor: 'pink',
                    height: 33,
                    marginTop: 12,
                    width: 33,
                  }}>
                  <Image
                    source={require('../../assests/images/greenicon1.png')}
                  />
                </View>
              )}
              <Text
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: '#000',
                  textAlign: 'center',

                  fontSize: 25,
                }}>
                {textone}
              </Text>
            </View>
            <View
              style={{
                width: 77,
                height: 40,
                borderRadius: 12,
                // margin: 2,
                backgroundColor: bgcolor,
                marginTop: 15,
              }}>
              <Text
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: '#fff',
                  textAlign: 'center',
                  top: 10,
                }}>
                {minutes}
              </Text>
            </View>
            <View
              style={{
                // width: 77,
                height: 40,

                // margin: 2,
                left: -85,
                top: 35,

                marginTop: 15,
              }}>
              <Text
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: '#fff',
                  textAlign: 'center',
                  top: 15,
                  fontSize: 12,
                }}>
                {date1}
              </Text>
            </View>
            {Wheart && (
              <TouchableOpacity
                style={{
                  // backgroundColor: 'pink',
                  top: -25,
                  right: -80,
                  position: 'absolute',
                  height: 33,
                  width: 33,
                }}>
                <Icon
                  name="heart"
                  color={'#fff'}
                  size={20}
                  style={{fontWeight: 'bold', position: 'absolute'}}
                />
              </TouchableOpacity>
            )}
          </View>
        </ImageBackground>
      </View>
      <View
        style={{
          width: 30,
          height: 30,
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
    </>
  );
};

export default MainBox;
