import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  StatusBar,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import {Header, Pinkbtn, QComponents} from '../../../componrnts';
import Icon from 'react-native-vector-icons/Feather';

const CancelSubscription = props => {
  const data = [
    {
      text1: 'Support healing',
    },
    {
      text1: 'Allow the release  of negative thoughts  Patterns',
    },
    {
      text1: 'Help you connect to approve expenses prespecting',
    },
    {
      text1: 'Remind you  of Your inner knowing',
    },
    {
      text1: 'Increase connection to self love',
    },
    {
      text1: 'Increase connection to self love',
    },
  ];

  return (
    <SafeAreaView style={styles.main}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <StatusBar animated={true} backgroundColor="#000" />
        <View
          style={{
            marginVertical: 10,

            width: '90%',
            alignSelf: 'center',
          }}>
          <Header
            marginTop={-40}
            iconName="left"
            marginLeft={40}
            color="#191919B8"
            fontSize={20}
            header2
            headertext="Cancle Subscriptions"
            OnPress={() => props.navigation.goBack('')}
          />
        </View>
        <View
          style={{
            marginVertical: 10,
            marginTop: 10,
            width: '95%',
            alignSelf: 'center',
          }}>
          <View style={{marginTop: -30}}>
            <QComponents
              textforvideo="Good bye Thanks!"
              icontwon
              name2="chevron-up"
              video={true}
              text5={
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di At vero eos et accusam et justo duo.'
              }
              marginTop1={-15}
              text6={'Leaving Because:'}
            />
          </View>
          <View
            style={{
              marginVertical: 8,
              width: '90%',
              alignSelf: 'center',
            }}>
            <FlatList
              data={data}
              renderItem={({item}) => {
                return (
                  <View
                    style={{
                      marginVertical: 8,
                      flexDirection: 'row',
                      width: '100%',
                    }}>
                    <TouchableOpacity
                      onPress={() => {}}
                      style={{
                        marginTop: 2,
                      }}>
                      <Icon name="check-square" size={25} color="#1C5C2E" />
                    </TouchableOpacity>
                    <Text
                      style={{
                        fontSize: 14,
                        marginTop: 3,
                        marginLeft: 15,
                        // textAlign: 'center',
                        color: '#000',
                        // fontWeight: 'bold',
                        fontFamily: 'BrandonGrotesque-Regular',
                      }}>
                      {item.text1}
                    </Text>
                  </View>
                );
              }}
            />
          </View>
        </View>

        <View style={{marginTop: 10, alignSelf: 'center', width: '90%'}}>
          <Pinkbtn
            shadow={'#00000019'}
            onPress={() => {
              props.navigation.navigate('Search3');
            }}
            width={'60%'}
            btntxt="Submit"
          />
        </View>
        <View style={{marginVertical: 15}} />
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
    fontSize: 25,
    textAlign: 'center',
    color: '#000',
    fontWeight: '400',
  },
  text2: {
    marginVertical: 2,
    fontSize: 20,
    // textAlign: 'center',
    color: '#1C5C2E',
    fontWeight: '500',
  },
});
export default CancelSubscription;
