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
import {Greenbtn, Header, Pinkbtn} from '../../../componrnts';
import Images from '../../../constants';
const NotRegisterd = props => {
  return (
    <>
      <StatusBar animated={true} backgroundColor="#000" />

      <View style={styles.main}>
        <View style={{width: '90%', marginTop: 30}}>
          <Header
            iconName="closesquareo"
            header2
            OnPress={() => props.navigation.goBack('')}
          />

          <View style={{marginTop: 30, alignItems: 'center'}}>
            <View style={{width: 140, height: 140, marginTop: 30}}>
              <Image
                source={Images.Icons.envelop}
                style={{width: '100%', height: '100%'}}
              />
            </View>
            <Text style={styles.txt1}>
              That Email Is Not Registered, Please Try Creating An Account
            </Text>
          </View>
          <View style={{marginVertical: 40}}>
            <Greenbtn
              width={'100%'}
              text1={'Create an Account'}
              onPress={() =>
                props.navigation.navigate('signup', {
                  registerd1: () => props.navigation.navigate('registerd'),
                  itemId: 86,
                  otherParam: 'anything you want here',
                })
              }
            />
          </View>
        </View>
      </View>
    </>
  );
};
export default NotRegisterd;

const styles = StyleSheet.create({
  main: {flex: 1, alignItems: 'center'},
  input: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderColor: '#000',
    marginVertical: 20,
    marginTop: 20,
  },
  txt1: {
    color: '#000',
    textAlign: 'left',
    fontSize: 16,
  },
});
