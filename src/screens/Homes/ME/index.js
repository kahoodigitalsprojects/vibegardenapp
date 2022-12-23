import React, {useEffect} from 'react';
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
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Images from '../../../constants';
import {BackHandler} from 'react-native';
import {useNavigationState} from '@react-navigation/native';
const Me = props => {
  const data = [{text1: 'Last Weak'}, {text1: '30 days'}, {text1: 'All'}];
  const data1 = [
    {
      img1: Images.Icons.gpluse,
      text1: 'Tools to try',
      onPress: () => {
        props.navigation.navigate('Homes', {
          screen: 'FressBlooms',
          params: {
            otherParam: 'Tools to try',
            plus: true,
            backoption: () => props.navigation.replace('me'),
          },
        });
      },
    },
    {
      img1: Images.Icons.arrow,
      text1: 'Recent Content',
      onPress: () => {
        props.navigation.navigate('Homes', {
          screen: 'FressBlooms',
          params: {
            otherParam: 'Recent Content',
            plus: true,
            backoption: () =>
              props.navigation.navigate('Mytabs', {screen: 'me'}),
          },
        });
      },
    },
    {
      img1: Images.Icons.gheart,
      text1: 'Favorites',
      onPress: () => {
        props.navigation.navigate('Homes', {
          screen: 'FressBlooms',
          params: {
            otherParam: 'Favorites',
            heart: true,
            backoption: () =>
              props.navigation.navigate('Mytabs', {screen: 'me'}),
          },
        });
      },
    },
    {
      img1: Images.Icons.star,
      text1: 'Top Tools',
      onPress: () => {
        props.navigation.navigate('Homes', {
          screen: 'FressBlooms',
          params: {
            otherParam: 'Top Tools',
            plus: true,
            backoption: () =>
              props.navigation.navigate('Mytabs', {screen: 'me'}),
          },
        });
      },
    },
    {
      img1: Images.Icons.spiral,
      text1: 'Your Resonance Finder Result',
      onPress: () => {
        props.navigation.navigate('Homes', {
          screen: 'Result',
          params: {
            backoption: () =>
              props.navigation.navigate('Mytabs', {screen: 'me'}),
          },
        });
      },
    },
  ];
  const state = useNavigationState(state => state);
  const routeName = state.routeNames[state.index];
  console.log('route', routeName);
  console.log(' params', props?.route?.params?.screen);
  // const backAction = () => {
  //   console.log(' me');
  //   // backoption();
  //   if (props?.route?.params?.screen) {
  //     props.navigation.replace('me');
  //   }
  //   return true;
  // };
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      // if (props?.route?.params?.screen) {
      // props.navigation.replace('Me');
      // }
      console.log(' sdfsdfsdf');
    });
    // return () => {
    //   effect
    // };
  }, []);

  return (
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
            // paddingVertical: 20,
            // position: 'absolute',
            // top: 8,
            // height: 60,
            // marginBottom: 20,
          }}>
          <Header
            marginTop={-42}
            img1
            toggle
            marginLeft={-15}
            search1="search1"
            homeheader={true}
            search={() => {
              props.navigation.navigate('Homes', {screen: 'Search'});
            }}
            OnPress={() =>
              props.navigation.navigate('Homes', {screen: 'notification'})
            }
            OnPress1={() =>
              props.navigation.navigate('Homes', {screen: 'settings'})
            }
          />
        </View>
        <View style={styles.Box1}>
          <View style={{width: '90%', alignSelf: 'center', marginTop: 20}}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 28,
                fontWeight: '600',
                color: '#000000',
                marginVertical: 20,
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
                icons={true}
              />
            </View>
            <View style={styles.data}>
              <Text
                style={{
                  color: '#000',
                  fontSize: 20,
                  fontWeight: '500',
                  marginVertical: 10,
                  fontFamily: 'BrandonGrotesque-Regular',
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
                        <Text style={{marginLeft: 15}}>{item.text1}</Text>
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
                  fontFamily: 'BrandonGrotesque-Regular',
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
                    // color: '#000',
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
              <View style={{marginTop: 10}}>
                <Pinkbtn
                  width={'65%'}
                  onPress={() => {
                    props.navigation.navigate(
                      'Homes',
                      {screen: 'BloomsCheck'},
                      {
                        Image1: Images.Imgs.Rainbow,
                        Image2: Images.Imgs.Rainbow,
                        Image3: Images.Imgs.Rainbow,
                        Image4: Images.Imgs.Rainbow,
                        newtext: 'Update Current Blooms',
                        Image5: Images.Imgs.Rainbow,
                        Image6: Images.Imgs.Rainbow,
                        Heading: 'Update Current Blooms',
                      },
                    );
                  }}
                  btntxt="Update Current Blooms"
                />
              </View>
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
