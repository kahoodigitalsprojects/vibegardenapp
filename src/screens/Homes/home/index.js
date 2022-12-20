import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  BackHandler,
  FlatList,
  StatusBar,
} from 'react-native';
import {Header, Imgbox, SeeAll, StoryData} from '../../../componrnts';
import All from '../../../componrnts/all';
import MainBox from '../../../componrnts/mainbox';
import Images from '../../../constants';

const Home = ({navigation, route}) => {
  const backAction = () => {
    // navigation.navigate('Mytabes', {screen: 'homes'});
  };
  BackHandler.addEventListener('hardwareBackPress', () => {
    // navigation.navigate('Mytabes', {screen: 'homes'});
    console.log('home baclhandler called');
    // BackHandler.exitApp();
  });
  useEffect(() => {}, []);

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
      bg1: Images.BackGround.black,
      bg1: Images.BackGround.rectangle2,
      bg12: Images.BackGround.Bg2,
      heart1: Images.Icons.heart1,
      name: 'TONGLEN',
      title: 'Title',
      textA: 'FEATURED GROUNDWORK',
      textB: 'See All',
      img4: Images.BackGround.rectangle2,
      one: Images.Icons.circleplus,
      heart1: Images.Icons.heart1,
    },
    {
      id: 3,
      bg1: Images.BackGround.black,
      bg1: Images.BackGround.rectangle2,
      bg12: Images.BackGround.Bg2,
      name: 'TONGLEN',
      title: 'Title',
      textA: 'BUDDHISIM',
      // plus: 'plus',
      textB: 'See All',
      img4: Images.BackGround.rectangle2,
      one: Images.Icons.circleplus,
      heart1: Images.Icons.heart1,
    },
    {
      id: 4,
      bg1: Images.BackGround.black,
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
            marginLeft={-15}
            img1
            heartplus
            search1="search1"
            color="green"
            homeheader={true}
            search={() => navigation.navigate('Homes', {screen: 'Search'})}
            heart
            plus
            size={22}
            colorplus={'green'}
            marginTopplus={-2}
          />
        </View>
        <View style={styles.Box1}>
          <View style={{width: '90%', alignSelf: 'center', marginVertical: 8}}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 28,
                fontWeight: '700',
                color: '#000000',
                marginTop: 20,
                fontFamily: 'Brandon_reg',
              }}>
              Hi, You.
            </Text>
          </View>
          <View style={styles.centerbox}>
            <View
              style={
                {
                  // backgroundColor: 'red'
                }
              }>
              <SeeAll
                onPress={() =>
                  navigation.navigate('Homes', {
                    screen: 'FressBlooms',
                    params: {
                      otherParam: 'Fresh Blooms',
                      heart: true,
                      icon1: false,
                      backoption: () =>
                        navigation.navigate('Mytabs', {screen: 'Home'}),
                    },
                  })
                }
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
                      <View style={{}}>
                        <MainBox
                          minutes={'5 min'}
                          Wheart
                          left={100}
                          bgcolor={'#4E805C89'}
                          img2={item.img4}
                          item={item.ImgICon}
                          color={'green'}
                          textone="TONGLEN"
                          date1={'Posted Date:12-01-2022'}
                          text2={'5 min'}
                        />
                      </View>
                    );
                  })}
                </ScrollView>
              </View>
            </View>
            <View
              style={
                {
                  // backgroundColor: 'blue'
                }
              }>
              <View style={[styles.box2, {marginVertical: 10}]}>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={item => item.id}
                  data={Data}
                  renderItem={({item}) => {
                    return (
                      <>
                        <All
                          color1="#1C5C2E"
                          pressI={() =>
                            navigation.navigate('Homes', {
                              screen: 'Video',
                              params: {
                                otherParam: false,
                                plus: false,
                                otherParam1: 'FAMILY OF LIGHT',
                                backoption: () =>
                                  navigation.navigate('Mytabs', {
                                    screen: 'GroundWork',
                                  }),
                              },
                            })
                          }
                          // onPressALL={item.pressAll}
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
        </View>
      </ScrollView>
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
});

export default Home;
