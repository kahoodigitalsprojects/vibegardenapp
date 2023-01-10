import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {EnvelopeSvg} from '../../../assests/svgs/LoginSvgs';
import {Header, Pinkbtn} from '../../../componrnts';
import Images from '../../../constants';
const Registerd = ({route, navigation}) => {
  return (
    <SafeAreaView style={styles.main}>
      <View
        style={{
          width: '95%',
          alignSelf: 'center',
          marginTop: 20,
          alignItems: 'center',
        }}>
        <Header
          iconName="closesquareo"
          header2
          OnPress={() => navigation.goBack()}
        />
        <View style={{width: '100%', alignItems: 'center'}}>
          <EnvelopeSvg />
        </View>

        <View
          style={{width: '100%', alignItems: 'center', alignSelf: 'center'}}>
          <Text
            style={{
              fontSize: 18,
              color: '#000',
              fontFamily: 'BrandonGrotesque-Medium',
            }}>
            This Email Is Already Registered With Vibegarden, Please{' '}
            <TouchableOpacity
              style={{marginTop: -2.5}}
              onPress={() =>
                navigation.navigate('login', {
                  registerd1: true,
                  itemId: 86,
                  otherParam: 'anything you want here',
                })
              }>
              <Text
                style={{
                  color: '#1C5C2E',
                  textDecorationLine: 'underline',
                  fontSize: 18,
                  fontFamily: 'BrandonGrotesque-Medium',
                }}>
                Log In.
              </Text>
            </TouchableOpacity>
          </Text>

          <View style={{marginVertical: 20, alignSelf: 'center'}}>
            <Text
              style={{
                color: '#1C5C2E',
                fontFamily: 'BrandonGrotesque-Medium',
              }}>
              Or
            </Text>
          </View>

          <Text
            style={{
              fontSize: 18,
              color: '#000',
              fontFamily: 'BrandonGrotesque-Medium',
            }}>
            Or If You’ve Forgotten Your Password,{' '}
            <TouchableOpacity
              style={{marginTop: -2.5}}
              onPress={() => navigation.navigate('forgerpsaaword')}>
              <Text
                style={{
                  color: '#1C5C2E',
                  textDecorationLine: 'underline',
                  fontSize: 18,
                  fontFamily: 'BrandonGrotesque-Medium',
                }}>
                Click Here
              </Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Registerd;

const styles = StyleSheet.create({
  main: {flex: 1},
  input: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderColor: '#000',
    marginVertical: 20,
    marginTop: 20,
  },
  txt1: {
    color: '#000',
    textAlign: 'left',
    fontSize: 16,
  },
});
