import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import Images from '../../../constants';

const Welcome = props => {
  return (
    <SafeAreaView style={styles.main}>
      <StatusBar animated={true} backgroundColor="#000" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <ImageBackground
          source={Images.BackGround.Bg1}
          resizeMode="cover"
          style={styles.mainbg}>
          <View
            style={{
              marginTop: 60,
              // marginVertical: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image source={Images.Logos.logo1} style={{}} />
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 40,
            }}>
            <Text style={styles.headtext}>
              <Text>VIBE</Text>GARDEN
            </Text>
            <Text
              style={{
                color: '#fff',
                fontSize: 16,
                textAlign: 'center',
                marginVertical: 5,
              }}>
              You're In full bloom
            </Text>
            <Text
              style={{
                color: '#fff',
                fontSize: 20,
                textAlign: 'center',
                marginVertical: 5,
              }}>
              Tools, tips & magic for growing your communication to you!
            </Text>
          </View>
          <View style={{marginTop: 50}}>
            <TouchableOpacity
              onPress={() =>
                props.navigation.replace('Mytabs', {screen: 'home'})
              }
              style={styles.btn1}>
              <Text style={{fontWeight: 'bold', color: '#fff'}}>
                Get Started
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('namescreen')}
              style={styles.btn2}>
              <Text style={{fontWeight: 'bold', color: '#fff'}}>Login In</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  mainbg: {
    width: '100%',
    height: '100%',
    // position: 'absolute',
  },
  headtext: {
    fontSize: 32,
    color: '#fff',
    marginVertical: 15,
  },
  btn1: {
    marginVertical: 15,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    height: 44,
    borderRadius: 20,
    backgroundColor: '#FF4053',
  },
  btn2: {
    marginVertical: 15,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    height: 44,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#fff',
  },
});

export default Welcome;
