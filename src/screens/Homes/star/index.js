import React, {startTransition, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  StatusBar,
  Image,
} from 'react-native';

import {Header, Pinkbtn, QComponents} from '../../../componrnts';
import Images from '../../../constants';

const Star = props => {
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
            iconName="closesquareo"
            header2
            OnPress={() =>
              props.navigation.replace('Mytabs', {screen: 'Homes'})
            }
          />
          <View
            style={{
              width: 75,
              height: 75,
              marginVertical: 10,
              alignSelf: 'center',
            }}>
            <Image source={Images.Imgs.nebula} />
          </View>

          <View style={{marginVertical: 5, alignSelf: 'center'}}>
            <Text
              style={{
                fontSize: 25,
                textAlign: 'center',
                color: '#000',
                fontWeight: '500',
                marginVertical: 5,
                fontFamily: 'BrandonGrotesque-Medium',
              }}>
              You're Start!
            </Text>
            <Text
              style={{
                marginVertical: 10,
                fontSize: 16,
                textAlign: 'center',
                color: '#000',
                fontWeight: '400',
                lineHeight: 30,
                fontFamily: 'BrandonGrotesque-Medium',
              }}>
              Your Feedback Insight Will Help Us Refining Our Tools &
              Recommendations!
            </Text>
            <Text
              style={{
                fontSize: 24,
                textAlign: 'center',
                color: '#1C5C2E',
                fontWeight: '600',
                marginVertical: 5,
                fontFamily: 'BrandonGrotesque-Medium',
              }}>
              With Gratitude!
            </Text>
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
export default Star;
