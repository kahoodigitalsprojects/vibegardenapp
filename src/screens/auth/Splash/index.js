import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image, StatusBar} from 'react-native';
import Images from '../../../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LoginLogo} from '../../../assests/svgs/LoginSvgs';
const Spalsh = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      checkJourney();
    }, 2000);
  });

  const checkJourney = async value => {
    try {
      const check = await AsyncStorage.getItem('journeyCompleted');
      if (check !== null) {
        navigation.replace('login');
      } else {
        navigation.replace('Story1');
      }
    } catch (e) {
      // saving error
      console.log(e);
    }
  };
  return (
    <>
      {/* <StatusBar animated={true} backgroundColor="#000" /> */}
      <View style={styles.main}>
        <LoginLogo />
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
