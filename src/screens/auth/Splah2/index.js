import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {Header, Pinkbtn} from '../../../componrnts';
import Images from '../../../constants';

const Spalsh2 = ({navigation}) => {
  return (
    <>
      <SafeAreaView style={styles.main}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <StatusBar animated={true} backgroundColor="#000" />

          <View style={{}}>
            <View style={{alignSelf: 'center', marginTop: 100}}>
              <Image source={Images.Logos.logo1} />
            </View>

            <View style={styles.view1}>
              <Text style={styles.text1}>
                Welcome vibe Gardner Huzzah! Its you're first time visiting Vibe
                Garden Mobile App!
              </Text>
              <Text style={styles.text1}>
                A Few fun question help us personal your experience here
              </Text>
              <View style={{marginTop: 10, justifyContent: 'flex-end'}}>
                <Pinkbtn
                  onPress={() =>
                    navigation.navigate('signup', {
                      registerd2: () => navigation.navigate('verify'),
                      itemId: 86,
                      otherParam: 'anything you want here',
                    })
                  }
                  width={'60%'}
                  btntxt="Let's Roll"
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // backgroundColor: '#1C5C2E',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  view1: {
    marginTop: 20,
    marginVertical: 10,
    width: '90%',
    alignSelf: 'center',
  },
  logo1: {
    marginVertical: 20,
  },
  text1: {
    textAlign: 'center',
    color: '#1C5C2E',
    fontSize: 28,
    marginVertical: 10,
    lineHeight: 44,
    fontFamily: 'BrandonGrotesque-Regular',
  },
});

export default Spalsh2;
