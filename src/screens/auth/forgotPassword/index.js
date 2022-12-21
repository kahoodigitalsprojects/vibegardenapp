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
} from 'react-native';
import {Greenbtn, Header, Pinkbtn} from '../../../componrnts';
import Images from '../../../constants';
const ForgetPassword = props => {
  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <StatusBar backgroundColor={'transparent'} translucent={true} />

        <View style={styles.main}>
          <View style={{width: '90%', marginTop: 20}}>
            <Header
              fontSize={25}
              color="#191919B8"
              iconName="arrowleft"
              headertext="Forget Password"
              header2
              OnPress={() => props.navigation.goBack()}
            />
          </View>

          <View style={{width: '85%', marginTop: 30}}>
            <Text
              style={{
                fontSize: 20,
                lineHeight: 26,
                marginTop: 20,
                fontFamily: 'BrandonGrotesque-Regular',
              }}>
              Enter Your Registered Email To Get The Password Reset Link
            </Text>

            <Text
              style={{
                fontSize: 20,
                color: '#1C5C2E',
                fontWeight: '600',
                marginTop: 15,
                marginVertical: 5,
                borderColor: '#1C5C2E',
                textDecorationLine: 'underline',
                fontFamily: 'BrandonGrotesque-Regular',
              }}>
              Email Address:
            </Text>

            <View style={{marginVertical: 4}}>
              <View style={{height: 45, borderRadius: 15, marginVertical: 10}}>
                <TextInput
                  placeholder="Email"
                  placeholderTextColor={'#1C5C2E'}
                  style={{
                    paddingLeft: 20,
                    backgroundColor: '#BCCFC1',
                    opacity: 0.4,
                    borderRadius: 12,
                  }}
                />
              </View>

              <View style={{marginTop: 10}}>
                <Greenbtn
                  width={'100%'}
                  text1="Submit"
                  // onPress={() => {
                  //   props.navigation.navigate('chuchuhuasDetails');
                  // }}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};
export default ForgetPassword;

const styles = StyleSheet.create({
  main: {flex: 1, alignItems: 'center', paddingVertical: 10},
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
