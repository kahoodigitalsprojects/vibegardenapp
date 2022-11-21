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
  SafeAreaView,
} from 'react-native';

import {Header, Pinkbtn} from '../../../componrnts';
import Images from '../../../constants';
import Icon from 'react-native-vector-icons/FontAwesome';

const SignUp = ({route, navigation}) => {
  const {itemId, otherParam, registerd1} = route.params;
  return (
    <SafeAreaView style={styles.main}>
      <StatusBar animated={true} backgroundColor="#000" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={{width: '90%', alignSelf: 'center'}}>
          <View style={{marginTop: 20}}>
            <Header
              iconName="arrowleft"
              header2
              OnPress={() => navigation.replace('Welcome')}
            />
          </View>

          <Text style={styles.headtext}>
            You're so very welcome,
            {'\n'} Erin
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
            <Image
              source={Images.Logos.logo1}
              style={{width: 64, height: 65}}
            />
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

            <View style={{marginTop: 10}}>
              <Pinkbtn onPress={registerd1} width={'60%'} btntxt="Continue" />
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('loginoption');
              }}>
              <Text
                style={{
                  marginTop: 25,
                  color: '#1C5C2E',
                  fontSize: 18,
                  textAlign: 'center',
                }}>
                Already have an account?
                <Text style={{fontWeight: 'bold'}}>Login</Text>
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Homes', {screen: 'story1'});
              }}
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                marginVertical: 20,
              }}>
              <View style={styles.blue}>
                <Icon name="play" color={'#fff'} size={12} />
              </View>
              <Text
                style={{
                  marginTop: 20,
                  color: '#1492E6',
                  fontSize: 18,
                  textAlign: 'center',
                }}>
                Want to See How Works?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
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
  headtext: {
    marginTop: 20,
    color: '#1C5C2E',
    fontSize: 25,
    fontWeight: '700',
    lineHeight: 42,
  },
  blue: {
    marginTop: 22,
    marginRight: 10,
    width: 20,
    height: 20,
    borderRadius: 15,
    backgroundColor: '#1492E6',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SignUp;
