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
import {Header, Pinkbtn} from '../../../componrnts';
import Images from '../../../constants';
const Registerd = ({route, navigation}) => {
  const {registerd1} = route.params;

  return (
    <>
      <StatusBar animated={true} backgroundColor="#000" />
      <View style={styles.main}>
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
              width: 100,
              height: 100,
              marginTop: 30,
              alignSelf: 'center',
            }}>
            <Image
              source={Images.Icons.envelop}
              style={{width: '100%', height: '100%'}}
            />
          </View>

          <View style={{width: '90%', alignSelf: 'center'}}>
            <TouchableOpacity
              style={
                {
                  // backgroundColor: 'pink',
                }
              }
              onPress={() =>
                navigation.navigate('login', {
                  registerd1: () =>
                    navigation.replace('Homes', {Screen: 'Home'}),
                  itemId: 86,
                  otherParam: 'anything you want here',
                })
              }>
              <View style={{width: '100%'}}>
                <Text style={{fontSize: 15, color: '#000'}}>
                  This Email Is Already Registered With Vibegarden , Please ,
                  <Text
                    style={{
                      fontWeight: '600',
                      color: '#1C5C2E',
                      paddingLeft: 10,
                      textDecorationLine: 'underline',
                      letterSpacing: 1,
                    }}>
                    Log In.
                  </Text>
                </Text>
              </View>
            </TouchableOpacity>
            <View style={{marginVertical: 20, alignSelf: 'center'}}>
              <Text
                style={{fontWeight: '600', color: '#1C5C2E', paddingLeft: 10}}>
                Or
              </Text>
            </View>
            <TouchableOpacity
              style={{
                // backgroundColor: 'pink',
                flexDirection: 'row',
              }}
              onPress={() => navigation.navigate('forgerpsaaword')}>
              <Text style={{fontSize: 15, color: '#000'}}>
                Or If You’ve Forgotten Your Password,
                <Text
                  style={{
                    fontWeight: '600',
                    color: '#1C5C2E',
                    marginLeft: 3,
                    fontSize: 15,
                    textDecorationLine: 'underline',
                  }}>
                  Click Here
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
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
