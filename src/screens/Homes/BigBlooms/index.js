import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  StatusBar,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Header, Pinkbtn} from '../../../componrnts';
import Images from '../../../constants';
import Icon from 'react-native-vector-icons/Feather';
const BigBlooms = ({route, navigation}) => {
  const {newtext} = route.params;
  const {heading1} = route.params;
  const {Image1} = route.params;

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
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{flexGrow: 1}}>
      <StatusBar animated={true} backgroundColor="#000" />
      <View style={styles.main}>
        <View style={{width: '90%', marginTop: 10}}>
          <Header
            width={'25%'}
            iconName="arrowleft"
            header4
            OnPress={() => navigation.goBack('')}
            headertext={newtext}
            fontSize={20}
            color="#000"
          />
        </View>
        <View style={styles.itms}>
          <View
            style={{
              width: '90%',
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 28,
                textAlign: 'center',
                color: '#000',
                // fontWeight: 'bold',
                marginTop: 25,
                marginVertical: 10,
                fontFamily: 'BrandonGrotesque-Medium',
              }}>
              {heading1}
              Big Blooms
            </Text>
            <View
              style={{
                width: 75,
                height: 75,
                marginVertical: 10,
                alignSelf: 'center',
              }}>
              <Image source={Image1} />
            </View>
          </View>

          <View style={{marginVertical: 5, width: '100%', alignSelf: 'center'}}>
            <Text
              style={{
                marginVertical: 10,
                fontSize: 18,
                // textAlign: 'center',
                color: '#000',
                // fontWeight: 'bold',
                fontFamily: 'BrandonGrotesque-Medium',
                lineHeight: 30,
              }}>
              Fantastic! Its So Power Full To Discover Tools That Help Us Feel
              Our Light!
            </Text>
            <Text
              style={{
                fontSize: 16,
                // textAlign: 'center',
                color: '#1C5C2E',
                fontWeight: '500',
                marginVertical: 5,
                fontFamily: 'BrandonGrotesque-Medium',
              }}>
              ADDED TONGLEN FAVORITES
            </Text>

            <Text
              style={{
                fontSize: 18,
                // textAlign: 'center',
                color: '#000',
                // fontWeight: 'bold',
                marginVertical: 10,
                textDecorationLine: 'underline',
                fontFamily: 'BrandonGrotesque-Regular',
              }}>
              Tell Us More
            </Text>

            <Text
              style={{
                fontSize: 18,
                // textAlign: 'center',
                color: '#000',
                // fontWeight: 'bold',
                fontFamily: 'BrandonGrotesque-Regular',
              }}>
              Did This Tools
            </Text>
          </View>

          <FlatList
            data={data}
            keyExtractor={item => item}
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
                      fontSize: 13,
                      marginTop: 3,
                      marginLeft: 8,
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
          <View style={{marginTop: 10, width: '100%'}}>
            <Pinkbtn
              width={'60%'}
              btntxt="Submit"
              onPress={() => navigation.navigate('star')}
            />
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
    alignItems: 'center',
  },
  itms: {
    marginTop: 10,
    width: '90%',
    // alignItems: 'center',
    // justifyContent: 'center',
    alignSelf: 'center',
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
    fontSize: 14,
  },
});
export default BigBlooms;
