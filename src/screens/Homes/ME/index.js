import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Header, Percentage, Pinkbtn} from '../../../componrnts';

import Images from '../../../constants';

import SearchModal from '../../../componrnts/SearchModal';
const Me = ({navigation}) => {
  const [visible, setVisible] = useState(false);
  const data = [{text1: 'Last Weak'}, {text1: '30 days'}, {text1: 'All'}];
  const data1 = [
    {
      img1: Images.Icons.gpluse,
      text1: 'Tools to try',
      onPress: () => {
        navigation.navigate('FressBlooms', {
          otherParam: 'Tools to try',
          plus: true,
          backoption: () => navigation.goBack(),
        });
      },
    },
    {
      img1: Images.Icons.arrow,
      text1: 'Recent Content',
      onPress: () => {
        navigation.navigate('FressBlooms', {
          otherParam: 'Recent Content',
          plus: true,
          backoption: () => navigation.goBack(),
        });
      },
    },
    {
      img1: Images.Icons.gheart,
      text1: 'Favorites',
      onPress: () => {
        navigation.navigate('FressBlooms', {
          otherParam: 'Favorites',
          heart: true,
          backoption: () => navigation.goBack(),
        });
      },
    },
    {
      img1: Images.Icons.star,
      text1: 'Top Tools',
      onPress: () => {
        navigation.navigate('FressBlooms', {
          otherParam: 'Top Tools',
          plus: true,
          backoption: () => navigation.goBack(),
        });
      },
    },
    {
      img1: Images.Icons.spiral,
      text1: 'Your Resonance Finder Result',
      onPress: () => {
        navigation.navigate('Result', {
          otherParam: 'Top Tools',
          plus: true,
          backoption: () => navigation.goBack(),
        });
      },
    },
  ];

  return (
    <>
      <SafeAreaView style={styles.main}>
        <StatusBar animated={true} backgroundColor="#000" />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <View
            style={{
              width: '90%',
              alignSelf: 'center',
              marginTop: 25,
            }}>
            <Header
              marginTop={-42}
              img1
              toggle
              color="green"
              marginLeft={-15}
              search1="search1"
              homeheader={true}
              search={() => setVisible(true)}
              OnPress={() => navigation.navigate('notification')}
              OnPress1={() => navigation.navigate('settings')}
            />
          </View>
          <View style={styles.Box1}>
            <View style={{width: '90%', alignSelf: 'center'}}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 28,
                  fontWeight: '600',
                  color: '#000000',
                  // marginVertical: 10,
                  marginBottom: 25,
                  fontFamily: 'BrandonGrotesque-Regular',
                }}>
                Erin
              </Text>
              <View style={styles.imgb}>
                <Image
                  source={Images.BackGround.croped}
                  resizeMode="cover"
                  style={styles.cropimg}
                />
              </View>
              <View style={styles.wbox}>
                <Percentage
                  margin1={10}
                  text1="Current Bloom:"
                  Image1={Images.Imgs.lotus1}
                  // icons={true}
                />
              </View>
              <View style={styles.data}>
                <Text
                  style={{
                    color: '#000',
                    fontSize: 20,
                    fontWeight: '500',
                    marginBottom: 10,
                    marginTop: 25,
                    fontFamily: 'BrandonGrotesque-Medium',
                  }}>
                  Library:
                </Text>
                <FlatList
                  data={data1}
                  renderItem={({item}) => {
                    return (
                      <>
                        <TouchableOpacity
                          onPress={item.onPress}
                          style={{flexDirection: 'row', marginVertical: 10}}>
                          <Image source={item.img1} />
                          <Text style={{marginLeft: 15, color: '#030303'}}>
                            {item.text1}
                          </Text>
                        </TouchableOpacity>
                      </>
                    );
                  }}
                />
                <Text
                  style={{
                    color: '#000',
                    fontSize: 20,
                    fontWeight: '500',
                    marginVertical: 10,
                    fontFamily: 'BrandonGrotesque-Medium',
                  }}>
                  Bloom 'o' Meter:
                </Text>
                <View>
                  <FlatList
                    horizontal={true}
                    data={data}
                    renderItem={({item}) => {
                      return (
                        <View
                          style={{
                            width: 80,
                            height: 30,
                            backgroundColor: '#BCCFC1',
                            borderRadius: 10,
                            margin: 5,
                            justifyContent: 'center',
                          }}>
                          <Text
                            style={{
                              textAlign: 'center',
                              color: '#fefefe',
                              fontFamily: 'BrandonGrotesque-Regular',
                            }}>
                            {item.text1}
                          </Text>
                        </View>
                      );
                    }}
                  />
                </View>

                <View
                  style={{
                    width: '100%',
                    height: 80,
                    marginVertical: 10,
                    flexDirection: 'row',
                  }}>
                  <View style={{width: '73%', height: 80, marginVertical: 10}}>
                    <Image
                      source={Images.Logos.graph}
                      resizeMode="contain"
                      style={styles.cropimg}
                    />
                  </View>
                  <Text
                    style={{
                      color: '#030303',
                      fontSize: 12,
                      fontWeight: '500',
                      // marginVertical: 10,
                      marginTop: 40,
                      marginLeft: -30,
                      fontFamily: 'BrandonGrotesque-Regular',
                    }}>
                    Your Graph will appear{'\n'}after 2 days of tracking
                  </Text>
                </View>
                <View style={{marginTop: 30}}>
                  <Pinkbtn
                    shadow="#00000019"
                    width={'65%'}
                    onPress={() => {
                      navigation.navigate('BloomsCheck', {
                        Image1: Images.Imgs.Rainbow,
                        Image2: Images.Imgs.Rainbow,
                        Image3: Images.Imgs.Rainbow,
                        Image4: Images.Imgs.Rainbow,
                        newtext: 'Update Current Blooms',
                        Image5: Images.Imgs.Rainbow,
                        Image6: Images.Imgs.Rainbow,
                        Heading: 'Update Current Blooms',
                      });
                    }}
                    btntxt="Update Current Blooms"
                  />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
        <SearchModal
          visible={visible}
          setVisible={setVisible}
          navigation={navigation}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
  },
  Box1: {marginTop: 10},
  centerbox: {},
  data: {
    // position: 'relative',
  },
  imgb: {
    width: 330,
    height: 198,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  cropimg: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  box1: {
    width: '90%',
    alignSelf: 'center',
  },
});

export default Me;

// <View >
// <ResultComponents
//   headerText="Resonance Finder"
//   Visible={state1}
//   setVisible={setState1}
//   onpress1={() => { setState1(false) }} />
// </View>
