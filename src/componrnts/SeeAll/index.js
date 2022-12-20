import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const SeeAll = ({color1, textA, textB, onPress}) => {
  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
      }}>
      <Text style={[styles.txtA, {color: color1}]}>{textA}</Text>
      <TouchableOpacity onPress={onPress} style={{}}>
        <Text style={styles.txtB}>{textB}</Text>
      </TouchableOpacity>
    </View>
  );
};

export {SeeAll};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txtA: {
    color: '#1C5C2E',
    fontWeight: '500',
    fontSize: 18,
    fontFamily: 'Brandon_reg',
    fontWeight: '700',
    opacity: 0.85,
  },
  txtB: {
    color: '#1C5C2E',
    fontWeight: '500',
    fontSize: 14,
    textDecorationLine: 'underline',
    fontFamily: 'Brandon_reg',
    fontWeight: '700',
    opacity: 0.85,
  },
});
