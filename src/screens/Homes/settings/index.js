import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  StatusBar,
  Image,
} from 'react-native';
import {Header} from '../../../componrnts';
import Reset from '../../../componrnts/ResetComponent';
import Images from '../../../constants';

const Settings = props => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{flexGrow: 1}}>
      <StatusBar animated={true} backgroundColor="#000" />
      <View style={styles.main}>
        <View
          style={{
            marginVertical: 20,
            marginTop: 20,
            width: '90%',
            alignSelf: 'center',
          }}>
          <Header
            iconName="closesquareo"
            header2
            OnPress={() => props.navigation.navigate('me')}
            headertext="Resonance Finder"
          />
          <View
            style={{
              width: '80%',
              alignSelf: 'center',
              marginVertical: 10,
              flexDirection: 'row',
            }}>
            <Text
              style={{
                fontSize: 20,
                // textAlign: 'center',
                color: '#000',
                // fontWeight: 'bold',
              }}>
              Notifications
            </Text>
            <View
              style={{
                width: 200,
                height: 1,
                backgroundColor: '#afafaf',
                margin: 13,
              }}></View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    // backgroundColor: 'pink',
  },
  row: {
    flexDirection: 'row',
    // backgroundColor: 'green',
  },
  text1: {
    marginVertical: 10,
    color: '#1C5C2E',

    fontSize: 16,
  },
  text2: {
    marginVertical: 10,
    color: '#000',
    fontSize: 16,
    marginLeft: 10,
  },
  text3: {
    color: '#000',
    fontSize: 28,
  },
  text4: {
    marginVertical: 15,
    letterSpacing: 0.6,
    color: '#000',
    fontSize: 16,
  },
});
export default Settings;
