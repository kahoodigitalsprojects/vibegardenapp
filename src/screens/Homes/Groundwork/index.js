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
import {Greenbox, Header, Imgbox, SeeAll, StoryData} from '../../../componrnts';
import All from '../../../componrnts/all';
import MainBox from '../../../componrnts/mainbox';
import Images from '../../../constants';

const GroundWork = props => {
  const Data = [
    {
      id: 1,
      bg1: Images.BackGround.black,
      bg12: Images.BackGround.greenbg,
      img4: Images.BackGround.rectangle2,
      heart1: Images.Icons.heart1,
      name: 'TONGLEN',
      title: 'title',
    },
    {
      id: 2,
      bg1: Images.BackGround.black,
      bg12: Images.BackGround.greenbg,
      img4: Images.BackGround.rectangle2,
      heart1: Images.Icons.heart1,
      name: 'TONGLEN',
      title: 'title',
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
            heartleft1={25}
            hearttop={5}
            img1
            heartplus
            search1="search1"
            homeheader={true}
            search={() => navigation.navigate('Homes', {screen: 'Search'})}
            heart
            // plus
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
              Groundwork
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 18,
                marginVertical: 10,
              }}>
              Let's remember together Erin
            </Text>
          </View>
          <View style={styles.centerbox}>
            <Greenbox
              boxtex1={'Buddhism'}
              boxtex2="Quantum Physics"
              boxtex3={'Nature'}
              img2
              onPress1={() => {
                props.navigation.navigate('Homes', {screen: 'Buddhisim'}, {});
              }}
            />
            <View
              style={
                {
                  // backgroundColor: 'red'
                }
              }>
              <View style={styles.box2}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}>
                  {Data.map((item, index) => {
                    return (
                      <View style={{}}>
                        <MainBox
                          marginTop11={40}
                          minutes={'3 min'}
                          icon2={true}
                          left={65}
                          img2={item.img4}
                          item={item.ImgICon}
                          bgcolor={'#FF405679'}
                          textone="FAMILY OF LIGHT"
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
              <View
                style={
                  {
                    // backgroundColor: 'blue'
                  }
                }>
                <View style={[styles.box2, {}]}>
                  <FlatList
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => item.id}
                    data={Data}
                    renderItem={({item}) => {
                      return (
                        <All
                          pressI={() =>
                            props.navigation.navigate('Homes', {
                              screen: 'Video',
                              params: {
                                otherParam: false,
                                plus: false,
                                otherParam1: 'FAMILY OF LIGHT',
                                icon1: false,
                                backoption: () =>
                                  props.navigation.navigate('Mytabs', {
                                    screen: 'GroundWork',
                                  }),
                              },
                            })
                          }
                          onPressALL={item.pressAll}
                          textA={item.textA}
                          heart1={item.heart1}
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

export default GroundWork;
