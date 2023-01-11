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
import {Header, Pinkbtn} from '../../../componrnts';
import Images from '../../../constants';
const Registerd = ({route, navigation}) => {
  return (
    <SafeAreaView style={styles.main}>
      <StatusBar animated={true} backgroundColor="#000" />
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
        <View
          style={{
            width: 120,
            height: 120,
            marginTop: 30,
            alignSelf: 'center',
          }}>
          <Image
            source={Images.Icons.envelop}
            style={{width: '100%', height: '100%'}}
          />
        </View>
        <View style={{width: '90%', alignSelf: 'center'}}>
          <View>
            <Text style={[styles.bottomLine, {color: '#000'}]}>
              This Email Is Already Registered With Vibegarden, Please{' '}
              <Text
                onPress={() => {
                  // console.log('hi');
                  navigation.navigate('login', {
                    registerd1: true,
                  });
                }}
                style={[
                  // styles.bottomLine,
                  {
                    color: '#1C5C2E',
                    fontSize: 16,
                    textDecorationLine: 'underline',
                    fontFamily: 'BrandonGrotesque-Bold',
                  },
                ]}>
                {' '}
                Log In.
              </Text>
            </Text>
          </View>
          <View style={{alignSelf: 'center', marginVertical: 20}}>
            <Text
              style={{
                fontWeight: '600',
                color: '#1C5C2E',
                paddingLeft: 10,
                fontFamily: 'BrandonGrotesque-Medium',
              }}>
              Or
            </Text>
          </View>

          <Text style={[styles.bottomLine, {color: '#000'}]}>
            Or If You’ve Forgotten Your Password,
            <Text
              onPress={() => {
                // console.log('hi');
                navigation.navigate('forgerpsaaword');
              }}
              style={{
                color: '#1C5C2E',
                fontSize: 16,
                textDecorationLine: 'underline',
                fontFamily: 'BrandonGrotesque-Bold',
              }}>
              {' '}
              Click Here
            </Text>
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
  bottomLine: {
    // textAlign: 'center',
    color: '#1C5C2E',
    fontSize: 16,
    fontFamily: 'BrandonGrotesque-Medium',
  },
});
