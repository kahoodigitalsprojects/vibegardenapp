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
const Verification = () => {
  return (
    <View style={styles.main}>
      <View style={{marginTop: 30, width: '85%'}}>
        <View>
          <View style={{marginLeft: -40, marginTop: 30}}>
            <Image source={Images.Icons.envelop} style={{}} />
          </View>
          <View style={{width: '70%'}}>
            <Text style={{fontSize: 16, color: '#1C5C2E', fontWeight: '600'}}>
              Show Us Its You Please Check Your Email To Continue
            </Text>
          </View>

          <View style={styles.input}>
            <TextInput placeholder="text" />
          </View>

          <Text
            style={{
              textAlign: 'center',
              marginVertical: 10,
              color: '#1C5C2E',
              fontSize: 18,
              fontWeight: '500',
            }}>
            Didn't sent email?
            <Text styles={{fontWeight: 'bold', color: ' red'}}>Resend.</Text>
          </Text>
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
    borderBottomWidth: 0.5,
    borderColor: '#1C5C2E',
    marginVertical: 20,
    marginTop: 20,
  },
});

export default Verification;
