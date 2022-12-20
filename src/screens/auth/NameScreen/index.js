import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {Pinkbtn} from '../../../componrnts';
import Images from '../../../constants';
import Icon from 'react-native-vector-icons/AntDesign';

const NameScreen = props => {
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <StatusBar animated={true} backgroundColor="#000" />
        <View style={{marginTop: 40, width: '90%', alignSelf: 'center'}}>
          <View style={{marginVertical: 40}}>
            <Image source={Images.Logos.logo1} style={{}} />
          </View>
          <View>
            <Text style={{fontSize: 18, fontFamily: 'Brandon_reg'}}>
              Hi, VibeGardner!
            </Text>
            <Text
              style={{
                color: '#1C5C2E',
                fontSize: 25,
                marginVertical: 15,
                fontWeight: '600',
                fontFamily: 'Brandon_reg',
              }}>
              What is your name ?
            </Text>
            <View style={styles.input}>
              <TextInput
                placeholder="First Name"
                placeholderTextColor={'#1C5C2E87'}
              />
              {/* <Icon name="check" type="AntDesign" /> */}
              <Icon
                name="check"
                color={'green'}
                size={20}
                style={{marginTop: 15}}
              />
            </View>
            <View style={{marginTop: 40}}>
              <Pinkbtn
                onPress={() => props.navigation.navigate('Splash2')}
                width={'60%'}
                btntxt="Continue"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {flex: 1},
  input: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
    fontFamily: 'Brandon_reg',
  },
});

export default NameScreen;
