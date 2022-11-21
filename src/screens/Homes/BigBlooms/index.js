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

const BigBlooms = props => {
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
        <View style={{alignSelf: 'center', width: '90%', marginTop: 5}}>
          <Header
            iconName="closesquareo"
            header2
            OnPress={() => props.navigation.navigate('me')}
            headertext="Resonance Finder"
          />
        </View>
        <View style={styles.itms}>
          <View style={{}}>
            <Text
              style={{
                fontSize: 28,
                // textAlign: 'center',
                color: '#000',
                // fontWeight: 'bold',
                marginTop: 25,
                marginVertical: 10,
              }}>
              Big Blooms
            </Text>
          </View>
          <View style={{width: 75, height: 75, marginVertical: 10}}>
            <Image source={Images.Imgs.R1} />
          </View>
          <View style={{width: '100%', marginVertical: 5}}>
            <Text
              style={{
                marginVertical: 10,
                fontSize: 18,
                // textAlign: 'center',
                color: '#000',
                // fontWeight: 'bold',
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
                fontWeight: '400',
                marginVertical: 5,
              }}>
              ADDED TONGLEN FAVORITES
            </Text>
            <View
              style={{marginVertical: 5, borderBottomWidth: 1, width: '32%'}}>
              <Text
                style={{
                  fontSize: 18,
                  // textAlign: 'center',
                  color: '#000',
                  // fontWeight: 'bold',
                }}>
                Tell Us More
              </Text>
            </View>
          </View>

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
              onPress={() => props.navigation.navigate('star')}
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
  },
  itms: {
    marginTop: 10,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
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
    fontSize: 16,
  },
});
export default BigBlooms;
