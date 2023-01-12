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
import {SafeAreaView} from 'react-native-safe-area-context';
import {useBackButton} from '../../../hooks/BackHandler';
import {BigBloomsSvg} from '../../../assests/svgs/QuestionsSvg';
const BigBlooms = ({route, navigation}) => {
  const {heading1, newtext, Image1} = route.params;

  const onBackPress = () => {
    navigation.goBack();
    return true;
  };
  useBackButton(navigation, onBackPress);

  return (
    <SafeAreaView style={styles.main}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <Header
          iconName="arrowleft"
          OnPress={() => navigation.goBack()}
          headertext={newtext}
          fontSize={20}
          headertextColor="#000"
        />
        <View style={styles.itms}>
          <Text
            style={{
              fontSize: 28,
              textAlign: 'center',
              color: '#000',
              // fontWeight: 'bold',
              // marginVertical: 10,
              fontFamily: 'BrandonGrotesque-Medium',
            }}>
            {heading1}
            Big Blooms
          </Text>
          <View
            style={{
              width: 75,
              height: 75,
              // marginTop: 15,
              alignSelf: 'center',
              marginTop: 20,
            }}>
            <BigBloomsSvg />
          </View>
        </View>
        <View
          style={{
            alignSelf: 'center',
            width: '100%',
            // backgroundColor: 'pink',
          }}>
          <View style={{width: '90%', alignSelf: 'center'}}>
            <Text
              style={{
                fontSize: 18,
                // textAlign: 'center',
                color: '#000',
                // fontWeight: 'bold',
                fontFamily: 'BrandonGrotesque-Medium',
                lineHeight: 28,
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
                marginVertical: 15,
                fontFamily: 'BrandonGrotesque-Medium',
              }}>
              ADDED TONGLEN FAVORITES
            </Text>
            <Text
              style={{
                fontSize: 18,

                color: '#000',
                marginVertical: 5,
                textDecorationLine: 'underline',
                fontFamily: 'BrandonGrotesque-Regular',
              }}>
              Tell Us More
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: '#000',
                fontFamily: 'BrandonGrotesque-Regular',
              }}>
              Did This Tools
            </Text>
            <FlatList
              data={data}
              keyExtractor={item => item}
              renderItem={({item}) => {
                return (
                  <View
                    style={{
                      marginVertical: 8,
                      flexDirection: 'row',
                    }}>
                    <TouchableOpacity
                      onPress={() => {}}
                      style={{
                        marginTop: 3,
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
          </View>
        </View>
        <View
          style={{
            marginTop: 10,
            width: '100%',
            alignSelf: 'center',
            // backgroundColor: 'pink',
            alignItems: 'center',
          }}>
          <Pinkbtn
            shadow={'#00000029'}
            width={'70%'}
            btntxt="Submit"
            onPress={() => navigation.navigate('star')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
  },
  itms: {
    marginTop: 10,
    width: '90%',
    alignItems: 'center',
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
