import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {EnvelopeSvg} from '../../../assests/svgs/LoginSvgs';
import {Header, Pinkbtn} from '../../../componrnts';
import Images from '../../../constants';
const Verify = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.main}>
          <View style={{width: '90%', marginTop: 10}}>
            <Header
              iconName="arrowleft"
              header2
              OnPress={() => navigation.goBack()}
            />
          </View>
          <View style={{width: '95%', marginTop: 30}}>
            <View
              style={{
                width: '100%',
                alignItems: 'flex-start',
                marginLeft: -15,
                marginBottom: -25,
              }}>
              <EnvelopeSvg />
            </View>
            <View style={{width: '90%', alignSelf: 'center'}}>
              <View style={{width: '74%'}}>
                <Text
                  style={{
                    fontSize: 16,
                    color: '#1C5C2E',
                    fontFamily: 'BrandonGrotesque-Medium',
                    lineHeight: 28,
                  }}>
                  Show Us Its You Please Check Your Email To Continue
                </Text>
              </View>

              <View>
                <View style={styles.input}>
                  <TextInput placeholder="" />
                </View>
                <View
                  style={{
                    justifyContent: 'center',
                    flexDirection: 'row',
                    marginTop: 10,
                    fontFamily: 'BrandonGrotesque-Regular',
                  }}>
                  <Text style={styles.txt1}>Didn't sent email?</Text>
                  <Text
                    style={[
                      styles.txt1,
                      {
                        color: 'red',
                        marginLeft: 5,
                        fontFamily: 'BrandonGrotesque-Medium',
                      },
                    ]}>
                    Resend.
                  </Text>
                </View>
                <View
                  style={{
                    marginTop: 20,
                    width: '100%',
                    alignItems: 'center',
                    alignSelf: 'center',
                  }}>
                  <Pinkbtn
                    shadow={'#CD258D'}
                    onPress={() => navigation.navigate('journey')}
                    width={'70%'}
                    btntxt="Continue"
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Verify;

const styles = StyleSheet.create({
  main: {flex: 1, alignItems: 'center'},
  input: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderColor: '#1C5C2E',
    marginVertical: 20,
    // marginTop: 20,
  },
  txt1: {
    color: '#1C5C2E',
    textAlign: 'center',
    fontSize: 16,
  },
});
