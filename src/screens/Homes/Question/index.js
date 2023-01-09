import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  StatusBar,
  ImageBackground,
} from 'react-native';

import {Header, Pinkbtn, QComponents} from '../../../componrnts';
import Images from '../../../constants';
import {useBackButton} from '../../../hooks/BackHandler';

const Question = ({navigation}) => {
  const onBackPress = () => {
    navigation.goBack();
    return true;
  };
  useBackButton(navigation, onBackPress);
  return (
    <SafeAreaView style={styles.main}>
      <ImageBackground
        source={Images.BackGround.backgroundHue}
        resizeMode="stretch"
        style={styles.image}>
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
              marginRight={-40}
              marginTop={-40}
              color="#1C5C2E"
              fontSize={25}
              iconName="arrowleft"
              header2
              headertext="Resonance Finder"
              OnPress={() => navigation.goBack()}
            />
          </View>

          <View style={{width: '90%', alignSelf: 'center'}}>
            <QComponents
              flowwerlist11={true}
              iconone
              width={'100%'}
              width1={'100%'}
              name2="chevron-up"
              name3="chevron-down"
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
              textfontsize={31}
              text5={
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di At vero eos et accusam et justo duo.'
              }
              fontfamily="BrandonGrotesque-Regular"
              marginVertical={10}
            />
          </View>
          <View style={{marginTop: 20}}>
            <Pinkbtn
              shadow="#979B9F"
              width={'55%'}
              btntxt="Next"
              onPress={() => navigation.navigate('question3')}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
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
  image: {
    flex: 1,
    justifyContent: 'center',
    // paddingTop: 100,
  },
});
export default Question;
