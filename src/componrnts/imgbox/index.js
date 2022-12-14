import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import React from 'react';
import Images from '../../constants';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/AntDesign';

const Imgbox = props => {
  return (
    <>
      {/* <View style={{width: 172, height: 239}}>
        <ImageBackground
          resizeMode="cover"
          source={props.bghome2}
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 10,
            marginTop: 5,
            // alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              // backgroundColor: 'pink',
              top: 35,
              right: 40,
              position: 'absolute',
              height: 33,
              width: 33,
              alignSelf: 'flex-end',
              // backgroundColor: 'yellow',
            }}>
            <Image
              source={props.heart1}
              resizeMode="contain"
              style={{width: '100%', height: '100%'}}
            />
            <Image sourc />
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text
              style={{textAlign: 'center', fontSize: 26, marginVertical: 10}}>
              {props.title}
            </Text>
            <View
              style={{
                width: 60,
                height: 33,
                borderRadius: 10,
                justifyContent: 'center',
                backgroundColor: '#CD258D',
                alignItems: 'center',
              }}>
              <Text style={{color: '#fff', fontWeight: 'bold'}}>5Min</Text>
            </View>
          </View>
        </ImageBackground>
      </View> */}
      <View style={{}}>
        <View
          style={{
            alignSelf: 'center',
            width: '100%',
            flexDirection: 'row',
            //  backgroundColor:'yellow'
          }}>
          <View style={{width: 172, height: 239, marginTop: -20}}>
            <ImageBackground
              source={Images.BackGround.greenbg}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: 10,
              }}>
              <TouchableOpacity
                onPress={props.pressI}
                style={{
                  // backgroundColor: 'pink',
                  top: 28,
                  right: 30,
                  position: 'absolute',
                  height: 33,
                  width: 33,
                  alignSelf: 'flex-end',

                  // backgroundColor: 'yellow',
                }}>
                <Image
                  source={props.heart1}
                  resizeMode="contain"
                  style={{
                    width: '100%',
                    height: '100%',
                    marginLeft: -10,
                  }}
                />
                <Icon
                  name={props.plus}
                  color={'#fefefe'}
                  size={25}
                  style={{fontWeight: 'bold', position: 'absolute'}}
                />
              </TouchableOpacity>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'absolute',
                  top: 100,
                  left: 60,
                }}>
                {props.iconimg && (
                  <View
                    style={{
                      width: 30,
                      height: 25,
                      // backgroundColor: 'yellow',
                    }}>
                    <Image
                      source={props.iconimg}
                      resizeMode="contain"
                      style={{
                        width: '100%',
                        height: '100%',
                      }}
                    />
                  </View>
                )}

                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 18,
                    marginVertical: 5,
                  }}>
                  {props.title}
                </Text>
                <View
                  style={{
                    width: 40,
                    height: 15,
                    borderRadius: 10,
                    justifyContent: 'center',
                    backgroundColor: '#CD258D',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: '#fff',
                      fontWeight: 'bold',
                      fontSize: 10,
                    }}>
                    5Min
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </View>
        </View>
      </View>
    </>
  );
};

export {Imgbox};

const styles = StyleSheet.create({});
