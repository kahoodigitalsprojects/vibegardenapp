import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const Pinkbtn = ({ btntxt, width, onPress, onpres2, onpres3 }) => {
  return (
    <View>

      <LinearGradient colors={['#ED535E', '#CD258D',]} style={[styles.btn1, { width: width }]} >
        <TouchableOpacity
          onPress={onPress} >
          <Text style={{ fontWeight: 'bold', color: '#fff' }}>{btntxt}</Text>
        </TouchableOpacity>
      </LinearGradient>


    </View >
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
