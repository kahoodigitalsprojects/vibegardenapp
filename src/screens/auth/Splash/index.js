import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image, StatusBar} from 'react-native';
import Images from '../../../constants';

const Spalsh = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Story1');
    }, 2000);
  });
  return (
    <>
      <StatusBar animated={true} backgroundColor="#000" />
      <View style={styles.main}>
        <Image source={Images.Logos.logo1} />
      </View>
    </>
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
