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
      </View>
    </View>
  );
};

export {Imgbox};

const styles = StyleSheet.create({});
