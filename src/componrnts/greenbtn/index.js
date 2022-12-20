import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Greenbtn = ({text1, width, onPress}) => {
  return (
    <View>
      <TouchableOpacity
        style={{
          alignSelf: 'center',
          width: width,
          height: 55,
          backgroundColor: '#1C5C2E',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 15,
        }}
        onPress={onPress}>
        <Text style={{color: '#fff', fontSize: 20, fontFamily: 'Brandon_reg'}}>
          {text1}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export {Greenbtn};

const styles = StyleSheet.create({});
