import React from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  StatusBar,
  ImageBackground,
} from 'react-native';

import {Header, Pinkbtn, QComponents} from '../../../componrnts';
import Images from '../../../constants';
import {useBackButton} from '../../../hooks/BackHandler';

const Question2 = ({navigation}) => {
  onBackPress = () => {
    navigation.goBack();
    return true;
  };
  useBackButton(navigation, onBackPress);
  const data = [
    {text1: 'Yeah,no'},
    {text1: 'No idea What a Multiverse is'},
    {text1: 'SMCA Peepsceen to think so'},
    {text1: 'Shall we Question Heap'},
  ];

  return (
    <SafeAreaView style={styles.main}>
      <StatusBar animated={true} backgroundColpor="#000" />

      <ImageBackground
        source={Images.BackGround.backgroundHue}
        resizeMode="stretch"
        style={styles.image}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <View style={{}}>
            <View style={{alignSelf: 'center', width: '90%', marginTop: 15}}>
              <Header
                // color="#000"
                marginRight={-40}
                marginTop={-40}
                fontSize={25}
                iconName="closesquareo"
                header2
                color="#1C5C2E"
                headertext="Resonance Finder"
                OnPress={() => navigation.goBack()}
              />
            </View>
            <View style={{width: '100%', alignSelf: 'center'}}>
              <QComponents
                marginVertical={10}
                flowwerlist11={true}
                iconone
                textforvideo="Resonance Finder Video Here"
                name2="chevron-up"
                name3="chevron-down"
                video={true}
                width={'100%'}
                direction2="Description:"
                Statement1="Statement:"
                flow="Flow Through"
                margintopS={31}
                number={'1/20'}
                text1={'That Bananas'}
                text2="?"
                fontSizetext2={34}
                text3={'May be but how do we know'}
                text4="OH,100%"
                text5={
                  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di At vero eos et accusam et justo duo.'
                }
                text6={'Plants are sentilents'}
                fontfamily="BrandonGrotesque-Regular"
              />
            </View>

            <View style={{marginTop: 20, width: '100%'}}>
              <Pinkbtn
                shadow="#00000029"
                onPress={() => {
                  navigation.navigate('question');
                }}
                width={'55%'}
                btntxt="Next"
              />
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    fontWeight: '500',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    // paddingTop: 100,
  },
});
export default Question2;
