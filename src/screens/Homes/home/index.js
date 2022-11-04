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
import Images from '../../../constants';

const Home = props => {
  const Data = [
    {
      bg1: Images.BackGround.black,
      bg12: Images.BackGround.greenbg,
      heart1: Images.Icons.heart1,
      name: 'TONGLEN',
      title: 'title',
      myicon: 'plus',
    },
    {
      bg1: Images.BackGround.black,
      bg12: Images.BackGround.greenbg,
      heart1: Images.Icons.heart1,
      name: 'TONGLEN',
      title: 'title',
      myicon: 'plus',
    },
    {
      bg1: Images.BackGround.black,
      bg12: Images.BackGround.greenbg,
      heart1: Images.Icons.heart1,
      name: 'TONGLEN',
      title: 'title',
    },
    {
      bg1: Images.BackGround.black,
      bg12: Images.BackGround.greenbg,
      heart1: Images.Icons.heart1,
      name: 'TONGLEN',
      title: 'title',
    },
    {
      bg1: Images.BackGround.black,
      bg12: Images.BackGround.greenbg,
      heart1: Images.Icons.heart1,
      name: 'TONGLEN',
      title: 'title',
    },
    {
      bg1: Images.BackGround.black,
      bg12: Images.BackGround.greenbg,
      heart1: Images.Icons.heart1,
      name: 'TONGLEN',
      title: 'title',
    },
    {
      bg1: Images.BackGround.black,
      bg12: Images.BackGround.greenbg,
      name: 'TONGLEN',
      title: 'title',
      myicon: 'plus',
    },
    {
      bg1: Images.BackGround.black,
      bg12: Images.BackGround.greenbg,
      name: 'TONGLEN',
      title: 'title',
      myicon: 'plus',
    },
  ];
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <StatusBar
          animated={true}
          backgroundColor="#000"
          // barStyle={statusBarStyle}
          // showHideTransition={statusBarTransition}
          // hidden={hidden}
        />
        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            marginVertical: 5,
            marginTop: 15,
          }}>
          <Header heartplus homeheader={true} heart plus />
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
                  props.navigation.navigate('Homes', {screen: 'FressBlooms'})
                }
                textA="FRESH BLOOMS"
                textB="SeeAll"
              />
              <View style={styles.box2}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={true}>
                  {Data.map((item, index) => {
                    return (
                      <View style={{}}>
                        <Imgbox
                          homemainbox
                          heart1={item.heart1}
                          myicon={item.myicon}
                          bghome={item.bg1}
                          name={item.name}
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
              <SeeAll textA="FRESH BLOOMS" textB="SeeAll" />
              <View style={styles.box1}>
                <FlatList
                  numColumns={2}
                  data={Data}
                  renderItem={({item}) => {
                    return (
                      <View
                        style={{
                          alignSelf: 'center',
                          display: 'flex',
                          flexGrow: 1,
                        }}>
                        <Imgbox
                          homebox
                          myicon={item.myicon}
                          bghome2={item.bg12}
                          title={item.title}
                        />
                      </View>
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
    // backgroundColor: 'yellow',
  },
});

export default Home;
