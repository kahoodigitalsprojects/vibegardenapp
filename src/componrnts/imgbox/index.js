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

const Imgbox = props => {
  return (
    <View style={{ alignSelf: 'center', width: '90%' }}>
      {props.homemainbox && (
        <ImageBackground
          source={props.bghome}
          resizeMode="contain"
          style={{
            width: 330,
            height: 234,
            marginTop: 30,
            borderRadius: 10,
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>

            <Text
              style={{ textAlign: 'center', fontSize: 26, marginVertical: 10 }}>
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
              <Text style={{ color: '#fff', fontWeight: 'bold' }}>5 Min</Text>
            </View>
          </View>
          <Text style={{ textAlign: 'left' }}>Posted Date : 12-01-2022</Text>
          <View></View>
        </ImageBackground>
      )}

      {props.homebox && (
        <View style={{ width: 172, height: 239 }}>
          <ImageBackground resizeMode="contain" source={props.bghome2}

            style={{
              width: '100%',
              height: '100%',
              borderRadius: 10,
              marginTop: 5,
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Text
                style={{ textAlign: 'center', fontSize: 26, marginVertical: 10 }}>
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
                <Text style={{ color: '#fff', fontWeight: 'bold' }}>5Min</Text>
              </View>
            </View>
          </ImageBackground>
        </View>
      )}
    </View>
  );
};

export { Imgbox };

const styles = StyleSheet.create({});
