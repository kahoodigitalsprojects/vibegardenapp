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
        <View style={{width: '90%', marginTop: 30}}>
          <Header
            iconName="closesquareo"
            header2
            OnPress={() => navigation.goBack()}
          />
        </View>

        <View style={{marginTop: 30, alignItems: 'center'}}>
          <View style={{width: 140, height: 140, marginTop: 30}}>
            <Image
              source={Images.Icons.envelop}
              style={{width: '100%', height: '100%'}}
            />
          </View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('login', {
                registerd1: () =>
                  navigation.navigate('Homes', {Screen: 'Home'}),
                itemId: 86,
                otherParam: 'anything you want here',
              })
            }>
            <Text style={styles.txt1}>
              This Email Is Already Registered With Vibegarden, Please
              <Text
                style={{
                  fontWeight: '600',
                  color: '#1C5C2E',
                  paddingLeft: 10,
                }}>
                Log In.
              </Text>
            </Text>
          </TouchableOpacity>
          <View style={{marginVertical: 20}}>
            <Text
              style={{fontWeight: '600', color: '#1C5C2E', paddingLeft: 10}}>
              Or
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('forgerpsaaword')}>
            <Text style={styles.txt1}>
              Or If You’ve Forgotten Your Password,
              <Text
                style={{
                  fontWeight: '600',
                  color: '#1C5C2E',
                  paddingLeft: 10,
                }}>
                Click Here
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
export default Registerd;

const styles = StyleSheet.create({
  main: {flex: 1, alignItems: 'center'},
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
