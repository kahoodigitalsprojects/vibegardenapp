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
    <View style={{alignSelf: 'center', width: '90%'}}>
      {props.homemainbox && (
        <View style={{width: 330, height: 234}}>
          <ImageBackground
            resizeMode="cover"
            source={props.bghome}
            style={{width: '100%', height: '100%'}}>
            <View
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{textAlign: 'center', fontSize: 26, marginVertical: 10}}>
                {props.name}
              </Text>
              <View
                style={{
                  width: 100,
                  height: 50,
                  borderRadius: 10,
                  justifyContent: 'center',
                  backgroundColor: 'green',
                  alignItems: 'center',
                  opacity: 0.5,
                }}>
                <Text style={{color: '#fff', fontWeight: 'bold'}}>5 Min</Text>
              </View>
            </View>
          </ImageBackground>
        </View>
      )}

      {props.homebox && (
        <View style={{width: 172, height: 239}}>
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
                backgroundColor: 'pink',
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
              <Icon name={props.myicon} color="#fff" />
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
        </View>
      )}
    </View>
  );
};

export {Imgbox};

const styles = StyleSheet.create({});
