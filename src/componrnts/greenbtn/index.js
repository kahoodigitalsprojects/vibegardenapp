import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Greenbtn = ({text1, width, onPress}) => {
  return (
    <View>
      <TouchableOpacity
        style={{
          alignSelf: 'center',
          width: width,
          shadowColor: '00000029',
          height: 55,
          backgroundColor: '#1C5C2E',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 15,
          shadowOffset: {
            width: 50,

            height: 52,
          },
          shadowOpacity: 20.58,
          shadowRadius: 16.0,
          elevation: 24,
        }}
        onPress={onPress}>
        <Text
          style={{
            color: '#fff',
            fontSize: 20,
            fontFamily: 'BrandonGrotesque-Regular',
          }}>
          {text1}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export {Greenbtn};

const styles = StyleSheet.create({});
