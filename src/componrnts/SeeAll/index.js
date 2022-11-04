import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const SeeAll = props => {
  return (
    <View
      style={{
        // backgroundColor: 'pink',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
      }}>
      <Text style={styles.txtA}>{props.textA}</Text>
      <TouchableOpacity
        onPress={props.onPress}
        style={{borderBottomWidth: 1, borderColor: '#1C5C2E'}}>
        <Text style={styles.txtB}>{props.textB}</Text>
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
  },
  txtB: {
    color: '#1C5C2E',
    fontWeight: '500',
    fontSize: 14,
  },
});
