import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Pinkbtn} from '../../../componrnts';
import Images from '../../../constants';

const SignUp = () => {
  return (
    <View style={styles.main}>
      <View style={{marginTop: 30, width: '90%'}}>
        <Text
          style={{
            marginTop: 40,
            color: '#1C5C2E',
            fontSize: 25,
            fontWeight: '700',
          }}>
          You're so very welcome, Erin
        </Text>
        <Text
          style={{
            marginTop: 20,
            color: '#1C5C2E',
            fontSize: 18,
          }}>
          Let's Get You Setup With An Account
        </Text>
        <View style={{marginVertical: 20}}>
          <Image source={Images.Logos.logo1} style={{width: 64, height: 65}} />
        </View>
        <View>
          <Text style={{fontSize: 18}}>Sign Up With Email</Text>

          <View style={styles.input}>
            <TextInput
              placeholder="alexasamichael.125@gmail.com"
              color="#1C5C2E"
            />
          </View>
          <View style={styles.input}>
            <TextInput placeholder="Password" />
          </View>

          <View style={{marginTop: 20}}>
            <Pinkbtn width={'60%'} btntxt="Continue" />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {flex: 1, alignItems: 'center'},
  input: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
    marginVertical: 10,
    marginTop: 20,
  },
});

export default SignUp;
