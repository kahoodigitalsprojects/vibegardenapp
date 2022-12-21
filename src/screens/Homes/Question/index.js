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

const Question = props => {
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
            color="#000"
            fontSize={25}
            iconName="closesquareo"
            header2
            headertext="Resonance Finder"
            OnPress={() => props.navigation.goBack('')}
          />
          <QComponents
            flowwerlist11={true}
            iconone
            width={'100%'}
            name2="chevron-down"
            direction2="Description:"
            Statement1="Statement:"
            flow="Flow Through"
            number={'2/20'}
            name="chevron-down"
            image1={true}
            text="No idea What a Multiverse is"
            headingtext
            text1={'Yeah,no'}
            text2="No idea What a Multiverse is"
            text3={'SMCA Peepsceen to think so'}
            text4="Shall we Question Heap"
            text6={'The Multiverse is Real'}
            marginVertical={10}
          />
        </View>
        <View style={{marginTop: 20}}>
          <Pinkbtn
            width={'60%'}
            btntxt="Next"
            onPress={() => props.navigation.navigate('question3')}
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
export default Question;
