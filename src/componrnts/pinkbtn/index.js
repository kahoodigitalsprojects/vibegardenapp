import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

const Pinkbtn = ({ btntxt, width }) => {
  return (
    <View>
      <TouchableOpacity style={[styles.btn1, { width: width, backgroundColor: 'green', }]}>
        <Text style={{ fontWeight: 'bold', color: '#fff' }}>{btntxt}</Text>
      </TouchableOpacity>
    </View>
  );
};

export { Pinkbtn };

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
