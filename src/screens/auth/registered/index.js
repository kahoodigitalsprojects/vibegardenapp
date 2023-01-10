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
          <View style={{width: '100%'}}>
            <Text
              style={{
                fontSize: 16,
                color: '#000',
                lineHeight: 30,
                fontFamily: 'BrandonGrotesque-Medium',
              }}>
              This Email Is Already Registered With Vibegarden, Please{' '}
              <TouchableOpacity
                style={
                  {
                    // backgroundColor: 'pink',
                  }
                }
                onPress={() =>
                  navigation.navigate('login', {
                    registerd1: true,
                  })
                }>
                <Text
                  style={{
                    fontSize: 16,
                    color: '#1C5C2E',
                    borderBottomWidth: 1,
                    textAlign: 'justify',
                    textDecorationLine: 'underline',
                    fontFamily: 'BrandonGrotesque-Bold',
                  }}>
                  Log In.
                </Text>
              </TouchableOpacity>
            </Text>
          </View>
          <View style={{marginVertical: 20, alignSelf: 'center'}}>
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
          <Text
            style={{
              fontSize: 16,
              color: '#000',
              lineHeight: 30,
              fontFamily: 'BrandonGrotesque-Medium',
            }}>
            Or If You’ve Forgotten Your Password,
            <TouchableOpacity
              style={
                {
                  // backgroundColor: 'pink',
                }
              }
              onPress={() => navigation.navigate('forgerpsaaword')}>
              <Text
                style={{
                  fontSize: 16,
                  color: '#1C5C2E',
                  borderBottomWidth: 1,
                  textAlign: 'justify',
                  textDecorationLine: 'underline',
                  fontFamily: 'BrandonGrotesque-Bold',
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
