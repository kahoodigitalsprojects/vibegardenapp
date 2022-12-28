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

import {Flowers, Header, Percentage, Pinkbtn} from '../../../componrnts';

import Icon from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import Images from '../../../constants';
import All from '../../../componrnts/all';

const BloomsCheck = ({route, navigation, newtext, Heading}) => {
  // const {Image1, Image2, Image3, Image4, newtext, Image5, Image6, Heading} =
  //   route.params;

  const [data1, setdata1] = useState(0);
  const [data, setData] = useState({
    Image1: Images.Logos.redleaf1,
    newtext: 'TONGLEN',
  });
  // const [state1, setState1] = useState(false);
  const Data1 = [
    {
      id: 1,
      bg1: Images.BackGround.black,
      bg12: Images.BackGround.Bg2,
      plus: 'plus',
      name: 'TONGLEN',
      title: 'Title',
      textA: 'Tools to Try:',
    },
    {
      id: 2,
      bg1: Images.BackGround.black,
      bg12: Images.BackGround.Bg2,
      plus: 'plus',
      name: 'TONGLEN',
      title: 'Title',
      textA: 'Top Tools:',
    },
    {
      id: 3,
      bg1: Images.BackGround.black,
      bg12: Images.BackGround.Bg2,
      name: 'TONGLEN',
      title: 'Title',
      textA: 'Featured Tools:',
      plus: 'plus',
    },
  ];
  const Data = [
    {
      image2: Images.Imgs.lotusb,
      text: '0-25%',
    },
    {
      image2: Images.Imgs.smallblue1,
      text: '25-50%',
    },
    {
      image2: Images.Imgs.lotus1,
      text: '50-75%',
    },
    {
      image2: Images.Imgs.lotus1,
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

          <View style={{width: '100%', alignSelf: 'center'}}>
            <View style={{width: '90%', alignSelf: 'center'}}>
              <Header
                header2
                iconName="closesquareo"
                OnPress={() => {
                  navigation.goBack();
                }}
              />
            </View>

            <View style={{width: '100%'}}>
              <View style={{width: '90%', alignSelf: 'center'}}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 28,
                    color: '#000',
                    fontFamily: 'BrandonGrotesque-Medium',
                  }}>
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
              </View>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  data={Data}
                  horizontal={true}
                  renderItem={({item, index}) => {
                    return (
                      <>
                        <View
                          style={{
                            margin: 2,
                            marginTop: 10,
                          }}>
                          <TouchableOpacity
                            onPress={() => {
                              index === true ? '' : setdata1(index);
                              let obj = {};
                              index === 0
                                ? (obj = {
                                    Image1: Images.Logos.redleaf1,
                                    newtext: 'TONGLEN',
                                  })
                                : index === 1
                                ? (obj = {
                                    Image1: Images.Logos.redleaf2,
                                    newtext: 'TONGLEN',
                                  })
                                : index === 2
                                ? (obj = {
                                    Image1: Images.Logos.redleaf3,
                                    newtext: 'TONGLEN',
                                  })
                                : index === 3
                                ? (obj = {
                                    Image1: Images.Logos.redleaf4,
                                    newtext: 'TONGLEN',
                                  })
                                : null;

                              setData(obj);
                            }}
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
              <View
                style={{
                  width: '90%',
                  alignSelf: 'center',
                  marginTop: 15,
                  fontFamily: 'BrandonGrotesque-Regular',
                }}>
                <Text
                  style={{
                    color: '#000',
                    fontWeight: '400',
                    fontSize: 20,
                    fontFamily: 'BrandonGrotesque-MEdium',
                  }}>
                  Refine your Vibe:
                </Text>
                <View style={styles.box}>
                  <Percentage
                    Pertext
                    icons={true}
                    btntxt="continue"
                    Image1={Images.Imgs.lotusb}
                  />
                  <TouchableOpacity
                    style={styles.btn1}
                    disabled={data1 === false ? true : false}
                    onPress={() => navigation.navigate('Bigblooms', data)}>
                    <LinearGradient
                      colors={['#ED535E', '#CD258D']}
                      style={[styles.btn1]}>
                      <Text
                        style={{
                          fontWeight: '400',
                          color: '#fff',
                          fontSize: 20,
                        }}>
                        Save
                      </Text>
                    </LinearGradient>
                  </TouchableOpacity>
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
                        color1={'#000'}
                        marginVertical2={15}
                        marginTop2={-10}
                      />
                    );
                  }}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
export default BloomsCheck;

const styles = StyleSheet.create({
  main: {flex: 1, backgroundColor: '#fff', paddingTop: 15},
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
    fontFamily: 'BrandonGrotesque-Regular',
  },
  txt1: {
    textAlign: 'left',
    fontSize: 18,
    color: '#030303',
    fontFamily: 'BrandonGrotesque-Regular',
  },
  btn1: {
    shadowOffset: {
      width: 70,
      height: 52,
    },
    shadowColor: '#00000029',
    shadowOpacity: 20.58,
    shadowRadius: 16.0,
    elevation: 24,
    width: '50%',
  },
  btn1: {
    shadowOffset: {
      width: 70,
      height: 52,
    },
    shadowColor: '#00000029',
    shadowOpacity: 20.58,
    shadowRadius: 16.0,
    elevation: 24,
    width: '60%',
    marginVertical: 25,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 55,
    borderRadius: 30,
    fontFamily: 'BrandonGrotesque-Regular',
  },
  box1: {
    width: '90%',
    alignSelf: 'center',
  },
});
