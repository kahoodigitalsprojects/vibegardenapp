import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const SeeAll = ({ color1, textA, textB, onPress, width }) => {
  return (
    <View
      style={{
        width: width,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,

      }}>
      <Text style={[styles.txtA, { color: color1 }]}>{textA}</Text>
      <TouchableOpacity onPress={onPress} style={{}}>
        <Text style={styles.txtB}>{textB}</Text>
      </TouchableOpacity>
    </View>
  );
};

export { SeeAll };

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txtA: {
    color: '#1C5C2E',
    fontWeight: '500',
    fontSize: 20,
    fontFamily: 'BrandonGrotesque-Medium',

    opacity: 0.85,
    //     BrandonGrotesque-Regular
    // BrandonGrotesque-BoldItalic
  },
  txtB: {
    color: '#1C5C2E',
    fontWeight: '500',
    fontSize: 14,
    textDecorationLine: 'underline',
    fontFamily: 'BrandonGrotesque-Medium',

    opacity: 0.85,
  },
});
