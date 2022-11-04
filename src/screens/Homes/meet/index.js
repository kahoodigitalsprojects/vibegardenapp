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

import Icon from 'react-native-vector-icons/AntDesign';

import {Header, Pinkbtn} from '../../../componrnts';
import Images from '../../../constants';

const Meet = props => {
  const [data2, setData2] = useState({});
  const [data, setdata] = useState();
  const [data1, setdata1] = useState();

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
          contentContainerStyle={{flexGrow: 1}}>
          <StatusBar animated={true} backgroundColor="#000" />

          <View style={{width: '90%', marginTop: 20}}>
            {/* <Header header2 /> */}
          </View>
          <View style={{}}>
            <Text style={styles.txt}>
              Brilliant! And Now which Blooms Speaks To you heart ?
            </Text>
            <View>
              <FlatList
                data={Data}
                numColumns={2}
                renderItem={({item, index}) => {
                  return (
                    <>
                      <View
                        style={{
                          margin: 10,
                          justifyContent: 'center',
                          alignItems: 'center',
                          alignSelf: 'center',
                        }}>
                        <TouchableOpacity
                          onPress={() => {
                            index === true ? '' : setdata1(index);
                            let obj = {};

                            index === 0
                              ? (obj = {
                                  Heading: 'Meet Blue Lotus',
                                  Image1: Images.Imgs.lotusb,
                                  Image2: Images.Imgs.lotusa,
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
                                  Image2: Images.Imgs.cuhuchuhuas1,
                                  Image3: Images.Imgs.cuhuchuhuasb,
                                  Images4: Images.Imgs.chuchuhuasc,
                                  Image5: Images.Imgs.chuchuhuasc,
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
                            width: 136,
                            height: 136,
                            borderRadius: 100,
                            justifyContent: 'center',
                            alignItems: 'center',
                            alignSelf: 'center',
                          }}>
                          <>
                            {data1 === index ? (
                              <View
                                style={{
                                  width: 136,
                                  height: 136,
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

                        <View style={{marginVertical: 5, margin: 10}}>
                          <Text
                            style={{
                              textAlign: 'center',
                              fontSize: 18,
                              color: '#000',
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
            <View style={{marginTop: 10}}>
              <Pinkbtn
                onPress={() => {
                  props.navigation.navigate('chuchuhuasDetails', data2);
                }}
                width={'60%'}
                btntxt="Continue"
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
export default Meet;

const styles = StyleSheet.create({
  main: {flex: 1, alignItems: 'center', paddingTop: 15},

  img: {
    width: 136,
    height: 136,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  txt: {
    textAlign: 'left',
    fontSize: 24,
    color: '#1C5C2E',
    fontWeight: '400',
    marginVertical: 20,
  },
  txt1: {
    textAlign: 'left',
    fontSize: 18,
    color: '#030303',
  },
});
