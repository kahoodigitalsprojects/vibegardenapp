import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Images from '../../../constants';

const Spalsh = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Welcome');
    }, 2000);
  });
  return (
    <View style={styles.main}>
      <Image source={Images.Logos.logo1} />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#1C5C2E',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Spalsh;
