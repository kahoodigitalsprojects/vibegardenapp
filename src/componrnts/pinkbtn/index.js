import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Pinkbtn = ({btntxt, width, onPress, onpres2, onpres3}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.btn1, {width: width, backgroundColor: '#CD258D'}]}>
        <Text style={{fontWeight: 'bold', color: '#fff'}}>{btntxt}</Text>
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
  },
});
