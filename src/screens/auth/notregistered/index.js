import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import {Greenbtn, Header, Pinkbtn} from '../../../componrnts';
import Images from '../../../constants';
const NotRegisterd = props => {
  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <StatusBar animated={true} backgroundColor="#000" />
        <View style={styles.main}>
          <View style={{width: '90%', marginTop: 10}}>
            <Header
              iconName="closesquareo"
              header2
              OnPress={() => props.navigation.goBack('')}
            />

            <View style={{width: '100%', arginTop: 30, alignItems: 'center'}}>
              <View style={{width: 140, height: 140, marginTop: 30}}>
                <Image
                  source={Images.Icons.envelop}
                  style={{width: '100%', height: '100%'}}
                />
              </View>
            </View>
            <View style={{width: '100%'}}>
              <Text style={styles.txt1}>
                That Email Is Not Registered , Please Try Creating
                <Text style={[styles.txt1, {textAlign: 'left'}]}>
                  {' '}
                  An Account
                </Text>
              </Text>
            </View>
            <View style={{marginVertical: 40}}>
              <Greenbtn
                width={'95%'}
                text1={'Create an Account'}
                onPress={() =>
                  props.navigation.navigate('signup', {
                    registerd1: () => props.navigation.navigate('registerd'),
                    registerd12: () => props.navigation.navigate('registerd'),
                    itemId: 86,
                    otherParam: 'anything you want here',
                  })
                }
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};
export default NotRegisterd;

const styles = StyleSheet.create({
  main: {flex: 1, alignItems: 'center'},
  input: {
    alignSelf: 'center',
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
    fontSize: 15,
    fontWeight: '400',
    fontFamily: 'BrandonGrotesque-Medium',
  },
});
