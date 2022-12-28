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
  marginTop,
  width,
  icon2,
  marginTop2,
}) => {
  return (
    <>
      <View
        style={{
          width: 330,
          height: 234,
          margin: 3,
          borderRadius: 10,
        }}>
        <ImageBackground
          // resizeMode="contain"
          style={{
            width: '100%',
            height: '100%',
            // justifyContent: 'center',
            // alignItems: 'center',
            borderRadius: 12,
          }}
          source={img2}>
          {Wheart && (
            <TouchableOpacity
              style={{
                marginTop: 8,
                width: '95%',
                alignItems: 'flex-end',
              }}>
              <Icon
                name="heart"
                color={'#fff'}
                size={20}
                style={{fontWeight: 'bold'}}
              />
            </TouchableOpacity>
          )}
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 30,
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
                    marginTop: 35,
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
                  fontSize: 26,
                  marginTop: marginTop,
                  fontFamily: 'BrandonGrotesque-Medium',
                }}>
                {textone}
              </Text>
            </View>
            <View
              style={{
                width: 77,
                height: 35,
                borderRadius: 12,
                backgroundColor: bgcolor,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 6,
              }}>
              <Text
                style={{
                  color: '#fff',
                  textAlign: 'center',
                  fontFamily: 'BrandonGrotesque-Regular',
                  padding: 5,
                  margin: 2,
                }}>
                {minutes}
              </Text>
            </View>
          </View>
          <View
            style={{
              marginTop: marginTop2,
              alignSelf: 'flex-start',
              marginLeft: 8,
              width: '100%',
            }}>
            <Text
              style={{
                color: '#fff',
                fontSize: 12,
                fontFamily: 'BrandonGrotesque-Regular',
              }}>
              {date1}
            </Text>
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
