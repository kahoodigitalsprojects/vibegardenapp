import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  SafeAreaView,
} from 'react-native';

import {Header, Percentage, Pinkbtn} from '../../../componrnts';

const MeetScreen2 = ({route, navigation}) => {
  const {Image1, newtext} = route.params;

  const [data1, setdata1] = useState();

  return (
    <>
      <SafeAreaView style={styles.main}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <StatusBar animated={true} backgroundColor="#000" />

          <View style={{width: '90%', alignSelf: 'center'}}>
            <Header
              header2
              iconName="arrowleft"
              OnPress={() => navigation.goBack()}
            />

            <View style={{}}>
              <View style={{}}>
                <Percentage check={true} Image1={Image1} paddingVertical={20} />
              </View>
              <View style={{marginTop: 30}}>
                <Text style={styles.txt}>Perfect Erin!</Text>
                <Text
                  style={{
                    fontSize: 18,
                    color: '#000',
                    fontFamily: 'BrandonGrotesque-Regular',

                    lineHeight: 33,
                  }}>
                  {newtext}
                </Text>
              </View>
              <View style={{marginVertical: 20}}>
                <Pinkbtn
                  onPress={() => navigation.replace('Mytabs', {screen: 'Home'})}
                  width={'80%'}
                  btntxt="Take Me To the Garden"
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
export default MeetScreen2;

const styles = StyleSheet.create({
  main: {flex: 1, paddingTop: 15},

  img: {
    width: 80,
    height: 80,
    borderRadius: 100,
    alignSelf: 'center',
  },
  txt: {
    textAlign: 'center',
    fontSize: 24,
    color: '#000',
    fontWeight: '400',
    marginVertical: 20,
    fontFamily: 'BrandonGrotesque-Regular',
  },

  txt1: {
    textAlign: 'left',
    fontSize: 18,
    color: '#030303',
    fontFamily: 'BrandonGrotesque-Regular',
  },
});
