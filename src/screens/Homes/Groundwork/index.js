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
    {
      id: 3,
      bg1: Images.BackGround.black,
      bg12: Images.BackGround.greenbg,
      img4: Images.BackGround.rectangle2,
      heart1: Images.Icons.heart1,
      name: 'TONGLEN',
      title: 'title',

    },
    {
      id: 4,
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
            marginTop: 15,
          }}>
          <Header
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
              img2
              onPress1={() => {
                props.navigation.navigate('Homes', {screen: 'Buddhisim'});
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
                  showsHorizontalScrollIndicator={true}>
                  {Data.map((item, index) => {
                    return (
                      <View style={{}}>
                        <MainBox
                          left={65}
                          img2={item.img4}
                          item={item.ImgICon}
                          bgcolor={'#FF4053'}
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
              <View style={styles.box1}>
                <FlatList
                  keyExtractor={item => item.id}
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
                        <All
                          pressI={() =>
                            props.navigation.navigate('Homes', {
                              screen: 'Video',
                            })
                          }
                          heart1={item.heart1}
                          textA={item.textA}
                          textB={item.textB}
                          homebox
                          plus={item.plus}
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

export default GroundWork;
