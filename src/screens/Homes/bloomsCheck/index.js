import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  SafeAreaView,
} from 'react-native';

import {Header, Percentage, Pinkbtn} from '../../../componrnts';

import Icon from 'react-native-vector-icons/AntDesign';
import Images from '../../../constants';
import All from '../../../componrnts/all';

const BloomsCheck = ({route, navigation, newtext, Heading}) => {
  // const {Image1, Image2, Image3, Image4, newtext, Image5, Image6, Heading} =
  //   route.params;

  const [data1, setdata1] = useState();
  const Data1 = [
    {
      id: 1,
      bg1: Images.BackGround.black,
      bg12: Images.BackGround.greenbg,
      plus: 'plus',
      name: 'TONGLEN',
      title: 'title',
      textA: 'Tools to Try:',
    },
    {
      id: 2,
      bg1: Images.BackGround.black,
      bg12: Images.BackGround.greenbg,
      plus: 'plus',
      name: 'TONGLEN',
      title: 'title',
      textA: 'Top Tools',
    },
    {
      id: 3,
      bg1: Images.BackGround.black,
      bg12: Images.BackGround.greenbg,
      name: 'TONGLEN',
      title: 'title',
      textA: 'Featured Tools',
      plus: 'plus',
    },
  ];
  const Data = [
    {
      image2: Images.Imgs.lotus1,
      text: '0-25%',
    },
    {
      image2: Images.Imgs.lotusb,
      text: '25-50%',
    },
    {
      image2: Images.Imgs.lotusa,
      text: '50-75%',
    },
    {
      image2: Images.Imgs.lotusa,
      text: '75-100%',
    },
    {
      image2: Images.Imgs.lotusa,
      text: '75-100%',
    },
  ];
  return (
    <>
      <SafeAreaView style={styles.main}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <StatusBar animated={true} backgroundColor="#000" />

          <View style={{width: '90%', alignSelf: 'center'}}>
            <Header
              header2
              iconName="closesquareo"
              OnPress={() => {
                navigation.navigate('Bluelotus', {});
              }}
            />

            <View style={{}}>
              <Text style={{textAlign: 'center', fontSize: 28, color: '#000'}}>
                Blooms Check
              </Text>

              <Text style={styles.txt}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  color: '#000',
                  letterSpacing: 0.2,
                }}>
                {newtext}
              </Text>

              <View style={{marginTop: 30}}>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  data={Data}
                  horizontal={true}
                  renderItem={({item, index}) => {
                    return (
                      <>
                        <View
                          style={{
                            margin: 5,
                            marginTop: 10,
                            justifyContent: 'center',
                            alignItems: 'center',
                            alignSelf: 'center',
                          }}>
                          <TouchableOpacity
                            onPress={() =>
                              index === true ? '' : setdata1(index)
                            }
                            style={{
                              width: '100%',
                              display: 'flex',
                              flexGrow: 1,
                              width: 80,
                              height: 80,
                              borderRadius: 100,
                              justifyContent: 'center',
                              alignItems: 'center',
                              alignSelf: 'center',
                            }}>
                            <>
                              {data1 === index ? (
                                <View
                                  style={{
                                    width: 80,
                                    height: 80,
                                    borderRadius: 100,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    alignSelf: 'center',
                                    backgroundColor:
                                      data1 === index ? '#CD258D' : '',
                                    opacity: 0.8,
                                    elevation: data1 === index ? 0 : 5,
                                  }}>
                                  <View style={{}}>
                                    <Icon
                                      name="check"
                                      size={39}
                                      color="#fff"
                                      style={{}}
                                    />
                                  </View>
                                </View>
                              ) : (
                                <View
                                  style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    alignSelf: 'center',
                                  }}>
                                  <Image
                                    source={item.image2}
                                    style={[styles.img]}
                                    resizeMode="contain"
                                  />
                                </View>
                              )}
                              <Text
                                style={{
                                  textAlign: 'center',
                                  color: data1 === index ? '#fff' : '#000',
                                }}>
                                {item.title}
                              </Text>
                            </>
                          </TouchableOpacity>

                          <View style={{marginVertical: 5, margin: 10}}>
                            <Text
                              style={{
                                textAlign: 'center',
                                fontSize: 12,
                                color: '#1C5C2E',
                              }}>
                              {item.text}
                            </Text>
                          </View>
                        </View>
                      </>
                    );
                  }}
                />
              </View>
              <Text style={{color: '#000', fontWeight: '400', fontSize: 20}}>
                Refine your Vibe:
              </Text>
              <View style={styles.box}>
                <Percentage
                  icons={true}
                  btntxt="continue"
                  Image1={Images.Imgs.lotusb}
                />
                <View style={{marginVertical: 10}}>
                  <Pinkbtn
                    onPress={() =>
                      navigation.navigate('Bigblooms', {
                        // Image1: Image1,
                        newtext: '',
                      })
                    }
                    width={'50%'}
                    btntxt="Save"
                  />
                </View>
              </View>
            </View>
            <View style={styles.box1}>
              <FlatList
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
                data={Data1}
                renderItem={({item}) => {
                  return (
                    <All
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
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
export default BloomsCheck;

const styles = StyleSheet.create({
  main: {flex: 1, paddingTop: 15},

  img: {
    width: 80,
    height: 80,
    borderRadius: 100,
    alignSelf: 'center',
  },
  txt: {
    textAlign: 'center',
    fontSize: 16,
    color: '#000',
    fontWeight: '400',
    marginTop: 10,
  },

  txt1: {
    textAlign: 'left',
    fontSize: 18,
    color: '#030303',
  },
});
