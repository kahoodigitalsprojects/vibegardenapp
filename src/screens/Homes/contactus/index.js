import React, {startTransition, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';

import {Header, Pinkbtn, QComponents} from '../../../componrnts';
import Icon from 'react-native-vector-icons/FontAwesome';
import Images from '../../../constants';

const Contactus = props => {
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <StatusBar animated={true} backgroundColor="#000" />
        <View
          style={{
            marginVertical: 10,
            marginTop: 10,
            width: '90%',
            alignSelf: 'center',
          }}>
          <Header
            marginTop={-40}
            iconName="left"
            header2
            OnPress={() => props.navigation.goBack('')}
            headertext="Contact Us"
            fontSize={20}
            color="#191919B8"
          />

          <View style={{marginVertical: 25, alignSelf: 'center'}}>
            <View style={{alignSelf: 'center', width: '80%', marginTop: 20}}>
              <Text
                style={{
                  fontSize: 18,
                  textAlign: 'center',
                  color: '#000',
                  fontWeight: '500',
                  marginVertical: 5,
                  fontFamily: 'BrandonGrotesque-Medium',
                  lineHeight: 34,
                }}>
                Please Feel Free To Reach Out To Us To Directly
              </Text>
            </View>

            <View
              style={{
                marginVertical: 30,
                borderWidth: 1,
                borderColor: 'green',
                borderRadius: 25,
                elevation: 1,
                backgroundColor: '#fff',
                flexDirection: 'row',
                padding: 15,
              }}>
              <View
                style={{
                  alignSelf: 'center',
                }}>
                <Image source={Images.Icons.envelop1} />
              </View>

              <Text
                style={{
                  fontSize: 18,
                  //   textAlign: 'center',
                  color: '#1C5C2E',
                  fontWeight: '400',
                  //   marginVertical: 5,
                  fontFamily: 'BrandonGrotesque-Regular',
                  marginLeft: 10,
                }}>
                Bloomsupport@vibgarden.com
              </Text>
            </View>

            <View
              style={{
                marginTop: 30,
                marginVertical: 10,
                alignSelf: 'center',
              }}>
              <Image source={Images.Imgs.pegasus} />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fefe',
  },
  container: {
    width: '100%',
    // height: '100%',
    // justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  text1: {
    fontSize: 25,
    textAlign: 'center',
    color: '#000',
    fontWeight: '400',
  },
  text2: {
    marginVertical: 2,
    fontSize: 20,
    // textAlign: 'center',
    color: '#1C5C2E',
    fontWeight: '400',
  },
  starbg: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginVertical: 15,
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 100,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Contactus;
