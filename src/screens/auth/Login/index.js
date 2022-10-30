import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Pinkbtn } from '../../../componrnts';
import Images from '../../../constants';

const Login = () => {
  return (
    <View style={styles.main}>
      <View style={{ marginTop: 30, width: '90%' }}>
        <View style={{ marginVertical: 30 }}>
          <Image source={Images.Logos.logo1} style={{}} />
        </View>
        <View>
          <Text style={{ fontSize: 18 }}>Login With Email</Text>

          <View style={styles.input}>
            <TextInput placeholder="Email Address" />
          </View>
          <View style={styles.input}>
            <TextInput placeholder="Password" />
          </View>
          <Text
            style={{
              textAlign: 'right',
              color: '#1C5C2E',
              fontSize: 14,
              fontWeight: '900',
            }}>
            Forgot Password?
          </Text>
          <View style={{ marginTop: 20 }}>
            <Pinkbtn width={'60%'} btntxt="Continue" />
          </View>
          <Text
            style={{
              textAlign: 'center',
              marginVertical: 10,
              color: '#1C5C2E',
              fontSize: 18,
              fontWeight: '500',
            }}>
            Or
          </Text>
          <Text
            style={{
              textAlign: 'center',
              marginVertical: 10,
              color: '#1C5C2E',
              fontSize: 18,
              fontWeight: '500',
            }}>
            Don't have an account ?
            <Text styles={{ fontWeight: 'bold' }}>Sign Up</Text>{' '}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: { flex: 1, alignItems: 'center' },
  input: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
    marginVertical: 20,
    marginTop: 20,
  },
});

export default Login;
