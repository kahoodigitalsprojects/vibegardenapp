import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  ImageBackground,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Greenbox, Header, Imgbox, SeeAll, StoryData} from '../../../componrnts';
import All from '../../../componrnts/all';
import SearchModal from '../../../componrnts/SearchModal';
import Images from '../../../constants';

const Tools = ({navigation}) => {
  const [visible, setVisible] = useState(false);
  const Data = [
    {
      id: 1,
      bg1: Images.BackGround.black,
      bg12: Images.BackGround.Bg2,
      // heart1: Images.Icons.heart1,
      name: 'TONGLEN',
      title: 'Title',
      plus: 'plus',
    },
    {
      id: 2,
      bg1: Images.BackGround.black,
      bg12: Images.BackGround.Bg2,
      // heart1: Images.Icons.heart1,
      name: 'TONGLEN',
      plus: 'plus',
      title: 'Title',
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
            <View style={{width: '100%', alignItems: 'center'}}>
              <Text
                style={{
                  marginTop: 15,
                  fontSize: 28,
                  color: '#000000',
                  fontFamily: 'BrandonGrotesque-Regular',
                }}>
                Tools
              </Text>
            </View>
            <View style={{width: '90%', alignSelf: 'center', marginTop: 5}}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 20,
                  color: '#000000',
                  fontFamily: 'BrandonGrotesque-Regular',
                }}>
                Its Blooms Time
              </Text>
            </View>

            <View style={[styles.centerbox, {}]}>
              <Greenbox
                boxtex1={'Buddhism'}
                boxtex2="Quantum Physics"
                boxtex3={'Plants'}
                img1
                onPress={() => {
                  navigation.navigate('resonance');
                }}
              />
              <View
                style={
                  {
                    // backgroundColor: 'blue'
                  }
                }>
                <View style={[styles.box2, {marginTop: -35}]}>
                  <FlatList
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => item.id}
                    data={Data}
                    renderItem={({item}) => {
                      return (
                        <All
                          // pressI={() =>
                          //   navigation.navigate('Homes', {screen: 'Video'})
                          // }
                          textA={item.textA}
                          heart1={item.heart1}
                          textB={item.textB}
                          homebox
                          plus={item.plus}
                          bghome2={item.bg12}
                          title={item.title}
                          marginVertical2={15}
                          marginTop2={-10}
                        />
                      );
                    }}
                  />
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
    justifyContent: 'center',
  },
  box1: {
    width: '95%',
    alignSelf: 'center',
    // height: '100%',
    // backgroundColor: 'yellow',
  },
  greenbox: {},
  image: {
    flex: 1,
    justifyContent: 'center',
    // paddingTop: 100,
  },
});

export default Tools;
