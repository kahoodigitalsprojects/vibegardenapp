import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Header, Pinkbtn} from '../../../componrnts';
import Images from '../../../constants';

const Login = props => {
  return (
    <View style={styles.main}>
      <View style={{marginTop: 10, width: '90%'}}>
        <View style={{width: '100%', marginTop: 10}}>
          <Header
            iconName="arrowleft"
            header2
            OnPress={() => props.navigation.replace('loginoption')}
          />
        </View>
        <View style={{marginVertical: 40}}>
          <Image source={Images.Logos.logo1} style={{}} />
        </View>
        <View>
          <Text style={{fontSize: 18}}>Login With Email</Text>

          <View style={styles.input}>
            <TextInput placeholder="Email Address" />
          </View>
          <View style={styles.input}>
            <TextInput placeholder="Password" />
          </View>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('forgerpsaaword')}>
            <Text
              style={{
                textAlign: 'right',
                color: '#1C5C2E',
                fontSize: 14,
                fontWeight: '900',
              }}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
          <View style={{marginTop: 10}}>
            <Pinkbtn
              onPress={() =>
                props.navigation.navigate(
                  'Auth',
                  {screen: 'NotRegisterd'},
                  {
                    itemId: 86,
                  },
                )
              }
              width={'60%'}
              btntxt="Continue"
            />
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
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate('signup', {
                registerd1: () => navigation.navigate('registerd'),
                itemId: 86,
                otherParam: 'anything you want here',
              })
            }>
            <Text
              style={{
                textAlign: 'center',
                marginVertical: 10,
                color: '#1C5C2E',
                fontSize: 18,
                fontWeight: '500',
              }}>
              Don't have an account ?
              <Text styles={{fontWeight: 'bold'}}>Sign Up</Text>{' '}
            </Text>
          </TouchableOpacity>
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
    marginVertical: 20,
    marginTop: 20,
  },
});

export default Login;
