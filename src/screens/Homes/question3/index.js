import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  StatusBar,
} from 'react-native';

import {Header, Pinkbtn, QComponents} from '../../../componrnts';

const Question3 = props => {
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
            headertext="Resonance Finder"
            OnPress={() => props.navigation.goBack('')}
          />
          <QComponents
            image1={true}
            number={'3/20'}
            name="chevron-down"
            text1={'Dont Teast Data'}
            text2="Whose Data?"
            text3={'Sometimes'}
            text4="Always9i"
            text6={'Data Help me Accept new concepts.'}
          />
        </View>
        <View style={{marginTop: 20}}>
          <Pinkbtn
            width={'60%'}
            btntxt="Next"
            onPress={() => props.navigation.navigate('question4')}
          />
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
export default Question3;
