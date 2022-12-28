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
import ResultComponents from '../../../componrnts/resultcompo';
const Question3 = props => {
  const [state, setState] = useState();
  return (
    <>
      <SafeAreaView style={styles.main}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <StatusBar animated={true} backgroundColor="#000" />
          <View
            style={{
              marginVertical: 10,
              marginTop: 15,
              width: '90%',
              alignSelf: 'center',
            }}>
            <Header
              marginRight={-40}
              marginTop={-40}
              color="#1C5C2E"
              iconName="closesquareo"
              header2
              headertext="Resonance Finder"
              fontSize={25}
              OnPress={() => props.navigation.goBack('')}
            />
            <QComponents
              iconone
              name2="chevron-down"
              direction2="Description:"
              width={'100%'}
              flowwerlist11={true}
              Statement1="Statement"
              flow="Flow Thtough"
              name="chevron-down"
              image1={true}
              text="No idea What a Multiverse is"
              headingtext
              number={'4/20'}
              text1={'Angels are some people made upto better'}
              text2="I wish"
              text3={`'It Feels That's way Sometime'`}
              text4="I Wrap Myself in that way Nightly"
              text6={'We Each Have Angles?'}
            />
          </View>
          <View style={{marginTop: 20}}>
            <Pinkbtn
              shadow="#979B9F"
              width={'55%'}
              btntxt="See Results"
              setVisible={setState}
              onPress={() =>
                props.navigation.replace('Result', {
                  otherParam: 'Top Tools',
                  plus: true,
                  backoption: () => props.navigation.navigate('me'),
                })
              }
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
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
});
export default Question3;
