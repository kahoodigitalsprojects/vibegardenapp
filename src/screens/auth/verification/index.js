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
import {Header, Pinkbtn} from '../../../componrnts';
import Images from '../../../constants';
const Verify = props => {
  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.main}>
          <View style={{width: '90%', marginTop: 10}}>
            <Header iconName="arrowleft" header2 />
          </View>
          <View style={{width: '95%', marginTop: 30}}>
            <View style={{width: 150, height: 150, marginTop: 30}}>
              <Image
                source={Images.Icons.envelop}
                style={{width: '100%', height: '100%'}}
              />
            </View>
            <View style={{width: '90%', alignSelf: 'center'}}>
              <View style={{width: '74%'}}>
                <Text
                  style={{
                    fontSize: 16,
                    color: '#1C5C2E',
                    fontWeight: '600',
                    fontFamily: 'BrandonGrotesque-Medium',
                    lineHeight: 28,
                  }}>
                  Show Us Its You Please Check Your Email To Continue
                </Text>
              </View>

              <View>
                <View style={styles.input}>
                  <TextInput placeholder="" />
                </View>
                <View
                  style={{
                    justifyContent: 'center',
                    flexDirection: 'row',
                    marginTop: 10,
                    fontFamily: 'BrandonGrotesque-Regular',
                  }}>
                  <Text style={styles.txt1}>Didn't sent email?</Text>
                  <Text
                    style={[
                      styles.txt1,
                      {
                        color: 'red',
                        marginLeft: 5,
                        fontFamily: 'BrandonGrotesque-Medium',
                      },
                    ]}>
                    Resend.
                  </Text>
                </View>
                <View style={{marginTop: 20}}>
                  <Pinkbtn
                    shadow={'#CD258D'}
                    onPress={() => props.navigation.navigate('journey')}
                    width={'60%'}
                    btntxt="Continue"
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};
export default Verify;

const styles = StyleSheet.create({
  main: {flex: 1, alignItems: 'center'},
  input: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderColor: '#1C5C2E',
    marginVertical: 20,
    // marginTop: 20,
  },
  txt1: {
    color: '#1C5C2E',
    textAlign: 'center',
    fontSize: 16,
  },
});
