import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Pinkbtn = props => {
  return (
    <View>
      <TouchableOpacity style={[styles.btn1, {width: props.width}]}>
        <Text style={{fontWeight: 'bold', color: '#fff'}}>{props.btntxt}</Text>
      </TouchableOpacity>
    </View>
  );
};

export {Pinkbtn};

const styles = StyleSheet.create({
  btn1: {
    marginVertical: 15,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 55,
    borderRadius: 30,
    backgroundColor: '#FF4053',
  },
});
