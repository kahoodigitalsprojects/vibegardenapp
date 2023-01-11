import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  BackHandler,
  FlatList,
  StatusBar,
  ImageBackground,
  Alert,
} from 'react-native';
import {Header, SeeAll} from '../../../componrnts';
import All from '../../../componrnts/all';
import MainBox from '../../../componrnts/mainbox';
import SearchModal from '../../../componrnts/SearchModal';
import Images from '../../../constants';
const Home = ({navigation, route}) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const backAction = () => {
      if (visible) {
        setVisible(false);
      } else {
        Alert.alert('Hold on!', 'Are you sure you want to exit?', [
          {
            text: 'Cancel',
            onPress: () => null,
            style: 'cancel',
          },
          {text: 'YES', onPress: () => BackHandler.exitApp()},
        ]);
      }
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const Data = [
    {
      id: 1,
      bg1: Images.BackGround.rectangle2,
      bg12: Images.BackGround.Bg2,
      // heart1: Images.Icons.heart1,
      name: 'TONGLEN',
      title: 'Title',
      textA: 'FEATURED TOOLS',
      textB: 'See All',
      plus: 'plus',
      img4: Images.BackGround.rectangle2,
      one: Images.Icons.circleplus,
      pressAll: () => {
        navigation.navigate('Homes', {
          screen: 'FressBlooms',
          params: {
            otherParam: 'Tools to try',
            plus: true,
            backoption: () => navigation.navigate('Mytabs', {screen: 'Home'}),
          },
        });
      },
    },
    {
      id: 2,
      // bg1: Images.BackGround.black,
      bg1: Images.BackGround.rectangle2,
      bg12: Images.BackGround.Bg2,
      // heart1: Images.Icons.heart1,
      name: 'TONGLEN',
      title: 'Title',
      textA: 'FEATURED GROUNDWORK',
      textB: 'See All',
      img4: Images.BackGround.rectangle2,
      one: Images.Icons.circleplus,
      heart1: true,
    },
    {
      id: 3,
      // bg1: Images.BackGround.black,
      bg1: Images.BackGround.rectangle2,
      bg12: Images.BackGround.Bg2,
      name: 'TONGLEN',
      title: 'Title',
      textA: 'BUDDHISIM',
      // plus: 'plus',
      textB: 'See All',
      img4: Images.BackGround.rectangle2,
      one: Images.Icons.circleplus,
      heart1: true,
    },
    {
      id: 4,
      // bg1: Images.BackGround.black,
      bg1: Images.BackGround.rectangle2,
      bg12: Images.BackGround.Bg2,
      // heart1: Images.Icons.heart1,
      name: 'TONGLEN',
      title: 'Title',
      textA: 'QUANTUM PHYSICS',
      textB: 'See All',
      plus: 'plus',
      img4: Images.BackGround.rectangle2,
      one: Images.Icons.circleplus,
      // heart1: Images.Icons.heart1,
    },
  ];
  return (
    <SafeAreaView style={styles.main}>
      <ImageBackground
        source={Images.BackGround.backgroundHue}
        resizeMode="stretch"
        style={styles.image}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <StatusBar animated={true} backgroundColor="#000" />
          <View
            style={{
              width: '90%',
              alignSelf: 'center',
              marginVertical: 5,
              marginTop: 25,
            }}>
            <Header
              marginTop={-40}
              marginLeft={-15}
              img1
              heartplus
              search1="search1"
              color="green"
              homeheader={true}
              search={() => setVisible(true)}
              heart
              plus
              size={22}
              colorplus={'green'}
              marginTopplus={-2}
            />
          </View>
          <View style={styles.Box1}>
            <View
              style={{width: '90%', alignSelf: 'center', marginVertical: 8}}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 28,
                  fontWeight: '600',
                  color: '#000000',
                  marginTop: 20,
                  fontFamily: 'BrandonGrotesque-Regular',
                }}>
                Hi, You.
              </Text>
            </View>
            <View style={styles.centerbox}>
              <View
                style={
                  {
                    // backgroundColor: 'red',
                  }
                }>
                <SeeAll
                  onPress={() => {
                    navigation.navigate('me', {
                      screen: 'FressBlooms',
                      params: {
                        otherParam: 'Fresh Blooms',
                        heart: true,
                        icon1: false,
                        fromHome: true,
                      },
                    });
                  }}
                  color1="#1C5C2E"
                  textA="FRESH BLOOMS"
                  textB="See All"
                />
                <View style={[styles.box2, {}]}>
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    {Data.map((item, index) => {
                      return (
                        <MainBox
                          marginTop11={24}
                          minutes={'5 min'}
                          Wheart
                          left={100}
                          bgcolor={'#1C5C2E87'}
                          img2={item.img4}
                          marginTop2={43}
                          item={item.ImgICon}
                          color={'green'}
                          textone="TONGLEN"
                          date1={'Posted Date:12-01-2022'}
                          text2={'5 min'}
                        />
                      );
                    })}
                  </ScrollView>
                </View>
              </View>

              <View style={[styles.box2, {}]}>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={item => item.id}
                  data={Data}
                  renderItem={({item}) => {
                    return (
                      <>
                        <All
                          marginTop={13}
                          marginBottom={10}
                          color1="#1C5C2E"
                          pressI={() => {
                            navigation.navigate('GroundWork', {
                              screen: 'Video',
                              params: {
                                otherParam: false,
                                plus: false,
                                otherParam1: 'FAMILY OF LIGHT',
                                backoption: () => navigation.goBack(),
                                fromHome: true,
                              },
                            });
                            // setTimeout(function () {
                            //   navigation.navigate('Video', {
                            //     otherParam: false,
                            //     plus: false,
                            //     otherParam1: 'FAMILY OF LIGHT',
                            //     backoption: () => navigation.goBack(),
                            //   });
                            // }, 100);
                          }}
                          textA={item.textA}
                          heart1={item.heart1}
                          textB={item.textB}
                          homebox
                          plus={item.plus}
                          bghome2={item.bg12}
                          title={item.title}
                        />
                      </>
                    );
                  }}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
      <SearchModal
        visible={visible}
        setVisible={setVisible}
        navigation={navigation}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  Box1: {
    width: '90%',
    height: '100%',
    // backgroundColor: 'yellow',
    alignSelf: 'center',
  },
  centerbox: {
    // backgroundColor: '#1C5C2E',
    width: '100%',
    // // height: '100%',
    marginVertical: 10,
    justifyContent: 'center',
  },
  box1: {
    width: '90%',
    alignSelf: 'center',
    // height: '100%',
    backgroundColor: 'yellow',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    // paddingTop: 100,
  },
});

export default Home;
