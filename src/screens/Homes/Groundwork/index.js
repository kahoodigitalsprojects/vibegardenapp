import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  StatusBar,
  ImageBackground,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Greenbox, Header, Imgbox, SeeAll, StoryData} from '../../../componrnts';
import All from '../../../componrnts/all';
import MainBox from '../../../componrnts/mainbox';
import SearchModal from '../../../componrnts/SearchModal';
import Images from '../../../constants';
import {useBackButton} from '../../../hooks/BackHandler';
const GroundWork = ({navigation}) => {
  const [visible, setVisible] = useState(false);
  const Data = [
    {
      id: 1,
      bg1: Images.BackGround.black,
      bg12: Images.BackGround.Bg2,
      img4: Images.BackGround.rectangle2,
      heart1: Images.Icons.heart1,
      name: 'TONGLEN',
      title: 'Title',
    },
    {
      id: 2,
      bg1: Images.BackGround.black,
      bg12: Images.BackGround.Bg2,
      img4: Images.BackGround.rectangle2,
      heart1: Images.Icons.heart1,
      name: 'TONGLEN',
      title: 'Title',
    },
  ];
  //BackHandler
  const onBackPress = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'Homes'}],
    });
    return true;
  };
  useBackButton(navigation, onBackPress);
  return (
    <SafeAreaView style={styles.main}>
      <ImageBackground
        source={Images.BackGround.backgroundHue}
        resizeMode="stretch"
        style={styles.image}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <Header
            heartPress={() =>
              navigation.navigate('me', {
                screen: 'FressBlooms',
                params: {
                  otherParam: 'Fresh Blooms',
                  heart: true,
                },
              })
            }
            plusPress={() =>
              navigation.navigate('me', {
                screen: 'FressBlooms',
                params: {
                  otherParam: 'Fresh Blooms',
                  plus: true,
                },
              })
            }
            iconName="search1"
            OnPress={() => setVisible(true)}
            search={true}
            logo={true}
            right="heartplus"
          />
          <View style={styles.Box1}>
            <View style={{width: '90%', alignSelf: 'center'}}>
              <Text
                style={{
                  textAlign: 'center',
                  marginTop: 10,
                  fontSize: 28,
                  fontFamily: 'BrandonGrotesque-Regular',
                  color: '#000000',
                }}>
                Groundwork
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 18,
                  marginVertical: 10,
                  fontFamily: 'BrandonGrotesque-Regular',
                  color: '#000',
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
                  navigation.navigate('Buddhisim');
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
                            marginTop={30}
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
                              navigation.navigate('Video', {
                                otherParam: false,
                                plus: false,
                                otherParam1: 'FAMILY OF LIGHT',
                                icon1: false,
                                backoption: () => navigation.goBack(),
                              })
                            }
                            // iconimg1

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
    backgroundColor: '#fff',
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
  image: {
    flex: 1,
    justifyContent: 'center',
    // paddingTop: 100,
  },
});

export default GroundWork;
