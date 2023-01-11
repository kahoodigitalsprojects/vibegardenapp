import React, {useEffect} from 'react';
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
import Orientation from 'react-native-orientation-locker';
import {useIsFocused} from '@react-navigation/native';

const NameScreen = props => {
  const isFocused = useIsFocused();
  useEffect(() => {
    Orientation.unlockAllOrientations();
    checkJourney();
  }, [isFocused]);
  const checkJourney = async value => {
    try {
      const check = await AsyncStorage.getItem('journeyCompleted');
      if (check !== null) {
        return;
      } else {
        await AsyncStorage.setItem('journeyCompleted', 'DONE');
      }
    } catch (e) {
      // saving error
      console.log(e);
    }
  };
  const {showVerifyScreen} = props.route.params;
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        {/* <StatusBar animated={true} backgroundColor="#000" /> */}
        <View style={{marginTop: 119, width: '90%', alignSelf: 'center'}}>
          <View style={{}}>
            <Image source={Images.Logos.logo1} style={{}} />
          </View>
          <View>
            <Text
              style={{
                fontSize: 18,
                fontFamily: 'BrandonGrotesque-Medium',
                marginVertical: 27,
                color: '#aaa',
              }}>
              Hi, VibeGardner!
            </Text>
            <Text
              style={{
                color: '#1C5C2E',
                fontSize: 25,

                fontWeight: '600',
                fontFamily: 'BrandonGrotesque-Bold',
              }}>
              What is your name ?
            </Text>
            <View style={styles.input}>
              <TextInput
                autoFocus={true}
                placeholder="First Name"
                placeholderTextColor={'#1C5C2E87'}
                style={{fontFamily: 'BrandonGrotesque-Medium'}}
              />
              {/* <Icon name="check" type="AntDesign" /> */}
              <Icon
                name="check"
                color={'green'}
                size={20}
                style={{marginTop: 15}}
              />
            </View>
            <View
              style={{
                marginTop: 59,
                width: '100%',
                alignItems: 'center',
                alignSelf: 'center',
              }}>
              <Pinkbtn
                shadow={'#CD258D'}
                onPress={() =>
                  props.navigation.navigate('Splash2', {
                    showVerifyScreen: showVerifyScreen,
                  })
                }
                width={'70%'}
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
  main: {flex: 1, backgroundColor: '#ffff'},
  input: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#1C5C2E',
    fontFamily: 'BrandonGrotesque-Regular',
  },
});

export default NameScreen;
