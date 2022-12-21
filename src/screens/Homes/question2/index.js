import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  StatusBar,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import {Header, Pinkbtn, QComponents} from '../../../componrnts';

const Question2 = props => {
  const data = [
    {text1: 'Yeah,no'},
    {text1: 'No idea What a Multiverse is'},
    {text1: 'SMCA Peepsceen to think so'},
    {text1: 'Shall we Question Heap'},
  ];

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
            // color="#000"
            fontSize={25}
            iconName="closesquareo"
            header2
            color="#1C5C2E"
            headertext="Resonance Finder"
            OnPress={() => props.navigation.goBack('')}
          />
        </View>
        <View style={{width: '100%'}}>
          <QComponents
            marginVertical={10}
            flowwerlist11={true}
            iconone
            textforvideo="Resonance Finder Video Here"
            name2="chevron-up"
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
          />
        </View>

        <View style={{marginTop: 20}}>
          <Pinkbtn
            onPress={() => {
              props.navigation.navigate('question');
            }}
            width={'60%'}
            btntxt="Next"
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
    fontWeight: '500',
  },
});
export default Question2;
