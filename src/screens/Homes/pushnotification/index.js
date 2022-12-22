import React, { startTransition, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  StatusBar,
  Switch,
  Image,
  TouchableOpacity,
} from 'react-native';

import { Header, Pinkbtn, QComponents, Switch1 } from '../../../componrnts';
import Icon from 'react-native-vector-icons/FontAwesome';
import Images from '../../../constants';

const Pushnotification = props => {
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}>
        <StatusBar animated={true} backgroundColor="#000" />
        <View
          style={{
            marginVertical: 10,
            marginTop: 10,
            width: '90%',
            alignSelf: 'center',
          }}>
          <Header
            iconName="left"
            marginTop={-40}

            header2
            headertext="Push Notification"
            fontSize={25}
            color="#000"
            OnPress={() =>
              props.navigation.navigate('Homes', { screen: 'settings' })
            }
          />
          <View style={{ marginTop: 30, marginVertical: 10 }}>
            <Text style={styles.text1}>
              When Is A Good Time For Me To Send Your Personalized
              Recommendations?
            </Text>
          </View>

          <View style={{ marginVertical: 5, alignSelf: 'center', width: '90%' }}>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{}}>
                <Text style={styles.text2}>Reminder Active:</Text>
              </View>
              <View>
                <Switch1 />
              </View>
            </View>
            <View style={styles.btns}>
              <TouchableOpacity
                style={styles.box}
                onPress={() => {
                  // props.navigation.navigate('signup');
                }}>
                <Text style={styles.textA}>After Waking Up</Text>
                <TouchableOpacity style={{}}>
                  <Icon name="sort-down" size={25} color="#1C5C2E" />
                </TouchableOpacity>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.box, { width: '30%', left: 10 }]}
              // onPress={() => {
              //   props.navigation.navigate('signup');
              // }}
              >
                <Text style={styles.textA}>7:30 AM</Text>
                <TouchableOpacity style={{}}>
                  <Icon name="sort-down" size={25} color="#1C5C2E" />
                </TouchableOpacity>
              </TouchableOpacity>
            </View>
            <View style={{}}>
              <Text style={styles.text2}>Set Different Time For Weekend:</Text>
            </View>
            <View style={{ marginTop: 20 }}>
              <Pinkbtn
                onPress={() =>
                  props.navigation.navigate('Homes', { screen: 'settings' })
                }
                width={'60%'}
                btntxt="Save"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    width: '100%',
    // height: '100%',
    // justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  text1: {
    fontSize: 18,
    textAlign: 'center',
    color: '#000',
    marginVertical: 15,
    lineHeight: 39,
    fontFamily: 'BrandonGrotesque-Medium',
  },
  text2: {
    fontSize: 18,
    textAlign: 'left',
    color: '#000000',
    textDecorationLine: 'underline',
    marginVertical: 15,
    opacity: 0.5,
    fontFamily: 'BrandonGrotesque-Medium',
  },
  starbg: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginVertical: 15,
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 100,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btns: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
  box: {
    padding: 4,
    marginVertical: 30,
    width: '70%',
    height: 45,
    justifyContent: 'center',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 25,
    elevation: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    elevation: 6,
  },
  textA: {
    fontSize: 14,
    color: '#1C5C2E',
    fontWeight: '400',
    marginTop: 9,
    fontFamily: 'BrandonGrotesque-Regular',
  },
});
export default Pushnotification;
