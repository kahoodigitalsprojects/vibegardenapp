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
import { Greenbtn, Header, Pinkbtn } from '../../../componrnts';
import Images from '../../../constants';
const ForgetPassword = props => {
  return (
    <>
      <StatusBar animated={true} backgroundColor="#000" />

      <View style={styles.main}>
        <View style={{ width: '90%', marginTop: 30 }}>
          <Header
            fontSize={25}
            color="#191919B8"
            iconName="arrowleft"
            headertext="Forget Password"
            header2
            OnPress={() => props.navigation.goBack()}
          />
        </View>

        <View style={{ width: '85%', marginTop: 30 }}>
          <Text style={{ fontSize: 20, lineHeight: 33, marginTop: 20 }}>
            Enter Your Registered Email To Get The Password Reset Link
          </Text>

          <Text
            style={{
              fontSize: 16,
              color: '#1C5C2E',
              fontWeight: '600',
              marginVertical: 30,
              borderColor: '#1C5C2E',
              textDecorationLine: 'underline',
            }}>
            Email Address:
          </Text>

          <View>
            <View style={styles.input}>
              <TextInput placeholder="Email" style={{ paddingLeft: 20 }} />
            </View>

            <View style={{ marginTop: 10 }}>
              <Greenbtn
                width={'100%'}
                text1="Submit"
                onPress={() => {
                  props.navigation.navigate('chuchuhuasDetails');
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </>
  );
};
export default ForgetPassword;

const styles = StyleSheet.create({
  main: { flex: 1, alignItems: 'center' },
  input: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 0.5,
    borderRadius: 10,
    backgroundColor: '#BCCFC1',
    opacity: 0.5,
    borderColor: '#1C5C2E',
    marginVertical: 20,
    marginTop: 20,
  },
  txt1: {
    color: '#1C5C2E',
    textAlign: 'center',
    fontSize: 16,
  },
});
