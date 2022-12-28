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
  ImageBackground,
} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
import {Header, Pinkbtn} from '../../../componrnts';
import LinearGradient from 'react-native-linear-gradient';

import Images from '../../../constants';

const Meet = props => {
  const [data2, setData2] = useState({});
  const [data, setdata] = useState();
  // const [data1, setdata1] = useState(true);
  const [data1, setdata1] = useState(false);

  const Data = [
    {
      img1: Images.Imgs.lotus1,
      text: 'Meet  Blue  Lotus',
    },
    {
      img1: Images.Imgs.rose,
      text: 'Meet Devine Ross',
    },
    {
      img1: Images.Imgs.mushrooms,
      text: 'Meet Mushrooms',
    },
    {
      img1: Images.Imgs.cuhuchuhuas1,
      text: 'Meet Chuchuhuas',
    },
  ];
  return (
    <>
      <SafeAreaView style={styles.main}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{}}>
          <StatusBar animated={true} backgroundColor="#000" />
          <View style={{}}>
            <View
              style={{
                width: '90%',
                alignSelf: 'center',
                marginTop: 10,
                fontFamily: 'BrandonGrotesque-Regular',
              }}>
              <Text style={styles.txt}>
                Brilliant! And Now which Blooms Speaks To your heart?
              </Text>
              <FlatList
                showsHorizontalScrollIndicator={false}
                data={Data}
                numColumns={2}
                renderItem={({item, index}) => {
                  return (
                    <>
                      <View
                        style={{
                          marginTop: 30,
                          marginVertical: 20,
                          flexGrow: 2,
                        }}>
                        <TouchableOpacity
                          onPress={() => {
                            index === true ? '' : setdata1(index);
                            let obj = {};
                            index === 0
                              ? (obj = {
                                  Heading: 'Meet Blue Lotus',
                                  Image1: Images.Imgs.lotusb,
                                  Image2: Images.Imgs.lotusc,
                                  Image3: Images.Imgs.lotus1,
                                  Images4: Images.Imgs.lotus1,
                                  Image5: Images.Imgs.lotus1,
                                  Image6: Images.BackGround.BlueL,
                                  newtext:
                                    'Meaning , How Connected to your feel to your light , your Unique essence',
                                })
                              : index === 1
                              ? (obj = {
                                  Heading: 'Meet Divine Ross',
                                  Image1: Images.Imgs.rose1,
                                  Image2: Images.Imgs.rose2,
                                  Image3: Images.Imgs.rose3,
                                  Images4: Images.Imgs.rose4,
                                  Image5: Images.Imgs.rose,
                                  Image6: Images.BackGround.largerose,
                                  newtext:
                                    'Meaning , How Connected to your feel to your light , your Unique essence',
                                })
                              : index === 2
                              ? (obj = {
                                  Heading: 'Meet Mushrooms',
                                  Image1: Images.Imgs.mushroomsa,
                                  Image2: Images.Imgs.mushroomsb,
                                  Image3: Images.Imgs.mushrooms,
                                  Images4: Images.Imgs.mushrooms,
                                  Image5: Images.Imgs.mushrooms,
                                  Image6: Images.BackGround.larggeMushrom,
                                  newtext:
                                    'Meaning , How Connected to your feel to your light , your Unique essence',
                                })
                              : index === 3
                              ? (obj = {
                                  Heading: 'Meet Chuchuhuas',
                                  Image1: Images.Imgs.chuchuhuasa,
                                  Image2: Images.Imgs.chuchuhuasc,
                                  Image3: Images.Imgs.cuhuchuhuas1,
                                  Images4: Images.Imgs.chuchuhua,
                                  Image5: Images.Imgs.cuhuchuhuas1,
                                  Image6: Images.BackGround.lageChuchu,
                                  newtext:
                                    'Meaning , How Connected to your feel to your light , your Unique essence',
                                })
                              : null;

                            setData2(obj);
                          }}
                          style={{
                            width: '100%',
                            display: 'flex',
                            flexGrow: 1,
                            width: 100,
                            height: 100,
                            borderRadius: 100,
                            justifyContent: 'center',
                            alignItems: 'center',
                            alignSelf: 'center',
                          }}>
                          <>
                            {data1 === index ? (
                              <ImageBackground
                                source={item.img1}
                                style={[
                                  styles.img,
                                  {marginTop: 0, opacity: 0.7},
                                ]}
                                resizeMode="contain">
                                <LinearGradient
                                  colors={['#ED535E', '#CD258D']}
                                  style={{
                                    width: 100,
                                    height: 100,
                                    borderRadius: 100,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    alignSelf: 'center',
                                    backgroundColor:
                                      data1 === index ? '#CD258D' : '',
                                    opacity: 0.9,
                                    elevation: data1 === index ? 0 : 5,
                                  }}>
                                  <Icon
                                    name="check"
                                    size={39}
                                    color="#fff"
                                    style={{}}
                                  />
                                </LinearGradient>
                              </ImageBackground>
                            ) : (
                              <View
                                style={{
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                  alignSelf: 'center',
                                  width: 100,
                                  height: 100,
                                }}>
                                <Image
                                  source={item.img1}
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

                        <View style={{marginVertical: 5, margin: 5}}>
                          <Text
                            style={{
                              textAlign: 'center',
                              fontSize: 18,
                              color: '#000',
                              fontFamily: 'BrandonGrotesque-Medium',
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
            <TouchableOpacity
              disabled={data1 === false ? true : false}
              onPress={() => {
                props.navigation.navigate('chuchuhuasDetails', data2);
              }}
              style={{
                marginVertical: 10,
                width: '70%',
                marginTop: 70,
                alignItems: 'center',
                alignSelf: 'center',
              }}>
              <LinearGradient
                colors={['#ED535E', '#CD258D']}
                style={[styles.btn1]}>
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 20,
                    fontFamily: 'BrandonGrotesque-Medium',
                  }}>
                  Continue
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
export default Meet;

const styles = StyleSheet.create({
  main: {flex: 1, paddingTop: 15, backgroundColor: '#ffff'},

  img: {
    // width: 136,
    // height: 136,
    width: ' 100%',
    height: ' 100%',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  txt: {
    // textAlign: 'left',
    fontSize: 25,
    color: '#1C5C2E',
    fontWeight: '400',
    marginVertical: 10,
    fontFamily: 'BrandonGrotesque-Medium',
  },
  txt1: {
    textAlign: 'left',
    fontSize: 18,
    color: '#030303',
  },
  btn1: {
    width: '60%',
    height: 55,
    borderRadius: 30,
    backgroundColor: '#ED535E',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
