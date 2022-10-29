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

const NameScreen = () => {
  return (
    <View style={styles.main}>
      <View style={{marginTop: 40, width: '90%'}}>
        <View style={{marginVertical: 40}}>
          <Image source={Images.Logos.logo1} style={{}} />
        </View>
        <View>
          <Text style={{fontSize: 18}}>Hi, VibeGardner!</Text>
          <Text
            style={{
              color: '#1C5C2E',
              fontSize: 25,
              marginVertical: 15,
              fontWeight: 'bold',
            }}>
            What is your name ?
          </Text>
          <View style={styles.input}>
            <TextInput placeholder="First Name" />
            {/* <Icon name="check" type="AntDesign" /> */}
            <Text style={{marginTop: 12}}>Icon</Text>
          </View>
          <View style={{marginTop: 40}}>
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
  },
});

export default NameScreen;
