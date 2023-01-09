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

const Question3 = ({navigation}) => {
  const onBackPress = () => {
    navigation.goBack();
    return true;
  };
  useBackButton(navigation, onBackPress);
  return (
    <SafeAreaView style={styles.main}>
      <StatusBar animated={true} backgroundColor="#000" />
      <ImageBackground
        source={Images.BackGround.backgroundHue}
        resizeMode="stretch"
        style={styles.image}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
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
              fontfamily="BrandonGrotesque-Regular"
              OnPress={() => navigation.goBack()}
            />
          </View>

          <View style={{width: '90%', alignSelf: 'center'}}>
            <QComponents
              flowwerlist11={true}
              width={'100%'}
              width1={'100%'}
              iconone
              name2="chevron-up"
            name3="chevron-down"
              direction2="Description:"
              flowwerlist={true}
              Statement1="Statement:"
              flow="Flow Through"
              image1={true}
              text="No idea What a Multiverse is"
              headingtext
              number={'3/20'}
              text1={'Dont Teast Data'}
              text2="Whose Data?"
              text3={'Sometimes'}
              textfontsize={31}
              text4="Always"
              text6={'Data Help me Accept new concepts.'}
              text5={
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di At vero eos et accusam et justo duo.'
              }
              fontfamily="BrandonGrotesque-Regular"
            />
          </View>
          <View style={{marginTop: 20}}>
            <Pinkbtn
              shadow="#979B9F"
              width={'55%'}
              btntxt="Next"
              onPress={() => navigation.navigate('question4')}
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
    backgroundColor: '#ffff',
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
export default Question3;
