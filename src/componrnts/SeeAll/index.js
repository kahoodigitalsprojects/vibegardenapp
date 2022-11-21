import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const SeeAll = ({color1, textA, textB, onPress}) => {
  return (
    <View
      style={{
        // backgroundColor: 'pink',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
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
    fontWeight: '500',
    fontSize: 18,
    color: '#1C5C2E',
  },
  txtB: {
    textDecorationLine: 'underline',
    color: '#1C5C2E',
    fontWeight: '500',
    fontSize: 14,
  },
});
