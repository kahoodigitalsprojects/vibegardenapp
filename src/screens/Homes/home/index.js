import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  FlatList,
  StatusBar,
} from 'react-native';
import {Header, Imgbox, SeeAll, StoryData} from '../../../componrnts';
import All from '../../../componrnts/all';
import MainBox from '../../../componrnts/mainbox';
import Images from '../../../constants';

const Home = ({navigation, route}) => {
  const Data = [
    {
      id: 1,
      bg1: Images.BackGround.rectangle2,
      bg12: Images.BackGround.greenbg,
      // heart1: Images.Icons.heart1,
      name: 'TONGLEN',
      title: 'title',
      textA: 'FEATURED TOOLS',
      textB: 'See ALL',
      plus: 'plus',
      img4: Images.BackGround.rectangle2,
      one: Images.Icons.circleplus,
    },
    {
      id: 2,
      bg1: Images.BackGround.black,
      bg12: Images.BackGround.greenbg,
      heart1: Images.Icons.heart1,
      name: 'TONGLEN',
      title: 'title',
      textA: 'FEATURED GROUNDWORK',
      textB: 'See ALL',
      img4: Images.BackGround.rectangle2,
      one: Images.Icons.circleplus,
      heart1: Images.Icons.heart1,
    },
    {
      id: 3,
      bg1: Images.BackGround.black,
      bg12: Images.BackGround.greenbg,
      name: 'TONGLEN',
      title: 'title',
      textA: 'BUDDHISM',
      plus: 'plus',
      textB: 'See ALL',
      img4: Images.BackGround.rectangle2,
      one: Images.Icons.circleplus,
      heart1: Images.Icons.heart1,
    },
    {
      id: 4,
      bg1: Images.BackGround.black,
      bg12: Images.BackGround.greenbg,
      heart1: Images.Icons.heart1,
      name: 'TONGLEN',
      title: 'title',
      textA: 'QUANTUM PHYSICS',
      textB: 'See ALL',
      img4: Images.BackGround.rectangle2,
      one: Images.Icons.circleplus,
      heart1: Images.Icons.heart1,
    },
    {
      id: 5,
      bg1: Images.BackGround.black,
      bg12: Images.BackGround.greenbg,
      name: 'TONGLEN',
      title: 'title',
      textA: 'BUDDHISM',
      plus: 'plus',
      textB: 'See ALL',
      img4: Images.BackGround.rectangle2,
      one: Images.Icons.circleplus,
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
            marginTop: 15,
          }}>
          <Header
            img1
            heartplus
            search1="search1"
            homeheader={true}
            search={() => navigation.navigate('Homes', {screen: 'Search'})}
            heart
            plus
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
                  navigation.navigate('Homes', {screen: 'FressBlooms'})
                }
                textA="FRESH BLOOMS"
                textB="SeeAll"
              />
              <View style={styles.box2}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}>
                  {Data.map((item, index) => {
                    return (
                      <View style={{}}>
                        <MainBox
                          left={100}
                          bgcolor={'#4E805C'}
                          img2={item.img4}
                          item={item.ImgICon}
                          color={'green'}
                          textone="TONGLEN"
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
              <View style={styles.box1}>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={item => item.id}
                  data={Data}
                  renderItem={({item}) => {
                    return (
                      <All
                        pressI={() =>
                          navigation.navigate('Homes', {screen: 'Video'})
                        }
                        heart1={item.heart1}
                        textA={item.textA}
                        textB={item.textB}
                        homebox
                        plus={item.plus}
                        bghome2={item.bg12}
                        title={item.title}
                      />
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
    width: '100%',
    alignSelf: 'center',
    // height: '100%',
    // backgroundColor: 'yellow',
  },
});

export default Home;
