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
          borderRadius: 25,
        }}
        onPress={onPress}>
        <Text style={{fontWeight: 'bold', color: '#fff'}}>{text1}</Text>
      </TouchableOpacity>
    </View>
  );
};

export {Greenbtn};

const styles = StyleSheet.create({});
