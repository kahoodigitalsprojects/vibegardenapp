import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  StatusBar,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Header, SeeAll, Userdetails } from '../../../componrnts';
import All from '../../../componrnts/all';
import Imgbox from '../../../componrnts/imgbox';
import MainBox from '../../../componrnts/mainbox';
import Searcbart1 from '../../../componrnts/searchbar1';
import { Modal } from 'react-native';
import Images from '../../../constants';
import Modaldata from '../../../componrnts/modaldata';
const Search2 = ({ route, navigation, otherParam }) => {
  const { textchange } = route.params;
  const { Mydata } = route.params;
  const [state, setState] = useState(0);
  const [state1, setState1] = useState("My Original Text");
  const [state2, setState2] = useState(0);
  const [state3, setState3] = useState(0);
  const [data1, setData1] = useState(0);
  const [topicName, setTopicName] = useState('');
  const [myText, setMyText] = useState("My Original Text");
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <SafeAreaView style={styles.main}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}>
          <StatusBar animated={true} backgroundColor="#000" />
          <View style={{ width: '100%' }}>
            <Searcbart1
              onpress2={() => navigation.goBack('')}
            />
          </View>
          <View style={styles.container}>
            <View
              style={{
                width: '100%',
                borderBottomWidth: 1,
                borderColor: '#1C5C2E',
              }}>
              <View
                style={{
                  width: '95%',
                  alignSelf: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity
                  onPress={() => (data1 === 0 ? '' : setData1(0))}
                  style={{
                    backgroundColor: data1 === 0 ? '#1C5C2E' : '#D1DED5',
                    elevation: data1 === 1 ? 0 : 5,
                    borderRadius: 5,
                    alignSelf: 'center',
                    paddingVertical: 5,
                    paddingLeft: 20,
                    paddingRight: 20,
                  }}>
                  <Text
                    style={{
                      color: data1 === 0 ? '#fff' : '#1C5C2E',
                      fontFamily: 'BrandonGrotesque-Regular',
                    }}>
                    All
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => (data1 === 1 ? '' : setData1(1))}
                  style={{
                    backgroundColor: data1 === 1 ? '#205F2E' : '#D1DED5',
                    elevation: data1 === 1 ? 0 : 5,
                    borderRadius: 5,
                    alignSelf: 'center',
                    paddingVertical: 5,
                    paddingLeft: 20,
                    paddingRight: 20,
                  }}>
                  <Text
                    style={{
                      color: data1 === 1 ? '#fff' : '#205F2E',
                      fontFamily: 'BrandonGrotesque-Regular',
                    }}>
                    Tools
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => (data1 === 2 ? '' : setData1(2))}
                  style={{
                    backgroundColor: data1 === 2 ? '#205F2E' : '#D1DED5',
                    elevation: data1 === 1 ? 0 : 5,
                    borderRadius: 5,
                    alignSelf: 'center',
                    paddingVertical: 5,
                    paddingLeft: 20,
                    paddingRight: 20,
                  }}>
                  <Text
                    style={{
                      color: data1 === 2 ? '#fff' : '#205F2E',
                      fontFamily: 'BrandonGrotesque-Regular',
                    }}>
                    Ground Work
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ width: '100%', marginTop: 10 }}>
              {data1 === 0 ? (
                <>
                  <View
                    style={{
                      width: '100%',
                      flexDirection: 'row',
                      alignSelf: 'flex-start',
                      // backgroundColor: 'pink',
                    }}>
                    <TouchableOpacity
                      onPress={() => {
                        setState1(!state1);
                      }}
                      style={[styles.topics, { backgroundColor: '#fff' }]} >
                      <Text
                        style={{
                          color: '#1C5C2E',
                          fontSize: 16,
                          margin: 6,
                          fontFamily: 'BrandonGrotesque-Regular',
                        }}>
                        Topics
                      </Text>
                      <Icon
                        name="chevron-down"
                        size={18}
                        color="#1C5C2E"
                        style={{ margin: 6 }}
                      />
                    </TouchableOpacity>
                  </View>

                  <View>
                    <View style={{ marginVertical: 10 }}>
                      <SeeAll
                        onPress={() =>
                          navigation.navigate('Mytabs', {
                            screen: 'tools',
                            params: {
                              backoption: navigation.navigate('Mytabs', {
                                screen: 'me',
                              }),
                            },
                          })
                        }
                        color1="#1C5C2E"
                        textA="TOOLS"
                        textB="SeeAll"
                      />
                    </View>
                    <View style={styles.box1}>
                      <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}>
                        {data.map((item, index) => {
                          return (
                            <>
                              <View style={{}}>
                                <MainBox
                                  left={60}
                                  bgcolor={'#FF4053'}
                                  TONGLEN="TONGLEN"
                                  textone={item.centertexr}
                                  I1={item.one}
                                  item={item.ImgICon}
                                  img2={item.img2}
                                  heart1={item.heart1}
                                  color={'green'}
                                  minutes={'5 min'}
                                  marginTop11={50}
                                />
                              </View>
                            </>
                          );
                        })}
                      </ScrollView>
                    </View>
                    <View style={{ marginVertical: 10 }}>
                      <SeeAll
                        onPress={() =>
                          navigation.replace('Homes', {
                            screen: 'GroundWork',
                            params: {
                              otherParam: 'Top Tools',
                              plus: true,
                              backoption: () =>
                                navigation.replace('Mytabs', { screen: 'me' }),
                            },
                          })
                        }
                        color1="#1C5C2E"
                        textA="GROUND WORK"
                        textB="SeeAll"
                      />
                    </View>
                    <View style={{}}>
                      <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}>
                        {data.map((item, index) => {
                          return (
                            <>
                              <View style={{}}>
                                <MainBox
                                  marginTop11={50}
                                  left={60}
                                  bgcolor={'#FF4053'}
                                  TONGLEN="TONGLEN"
                                  textone={item.centertexr1}
                                  I1={item.heart1}
                                  img2={item.img3}
                                  color={'green'}
                                  minutes={'5 min'}
                                />
                              </View>
                            </>
                          );
                        })}
                      </ScrollView>
                    </View>
                    <View style={{ marginVertical: 10 }}>
                      <SeeAll
                        onPress={() => {
                          navigation.navigate('Homes', {
                            screen: 'FressBlooms',
                            params: {
                              otherParam: 'Fresh Blooms',
                              heart: true,

                              backoption: () =>
                                navigation.navigate('Mytabs', {
                                  screen: 'me',
                                }),
                            },
                          });
                        }}
                        textA="FRESH BLOOMS"
                        textB="SeeAll"
                        color1="#1C5C2E"
                      />
                    </View>
                    <View style={{}}>
                      <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}>
                        {data.map((item, index) => {
                          return (
                            <>
                              <View style={{}}>
                                <MainBox
                                  marginTop11={50}
                                  minutes={'5 min'}
                                  I1={item.heart1}
                                  img2={item.img4}
                                  item={item.ImgICon}
                                  color={'green'}
                                  left={60}
                                  bgcolor={'#FF4053'}
                                  TONGLEN="TONGLEN"
                                  textone={item.centertexr2}
                                  text2={'5 min'}
                                />
                              </View>
                            </>
                          );
                        })}
                      </ScrollView>
                    </View>
                  </View>
                  <View style={{ marginVertical: 20 }}>
                    <SeeAll color1="#1C5C2E" textA="TEACHERS" textB="SeeAll" />
                  </View>

                  <View style={{ marginTop: -15 }}>
                    <FlatList
                      showsHorizontalScrollIndicator={false}
                      data={data2}
                      renderItem={({ item }) => {
                        return (
                          <>
                            <View
                              style={{
                                marginVertical: 5,
                                width: '100%',
                                alignSelf: 'center',
                              }}>
                              <Userdetails
                                backgroundColor={'#00000029'}
                                databox2
                                bear={item.Img1}
                                name={item.name}
                                time={item.time}
                                text={item.text}
                              />
                            </View>
                          </>
                        );
                      }}
                    />
                  </View>
                </>
              ) : null}
              {data1 === 1 ? (
                <>
                  <View
                    style={{
                      width: '100%',
                      flexDirection: 'row',
                      alignSelf: 'flex-start',
                    }}>
                    <TouchableOpacity style={styles.topics}>
                      <Text
                        style={{
                          color: '#1C5C2E',
                          fontSize: 16,
                          margin: 6,
                          fontFamily: 'BrandonGrotesque-Regular',
                        }}>
                        Quantum Physics

                      </Text>
                      <Icon
                        name="chevron-down"
                        size={18}
                        color="#1C5C2E"
                        style={{ margin: 6 }}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => setState2(!state2)}
                      style={styles.topics}>
                      <Text
                        style={{
                          color: '#1C5C2E',
                          fontSize: 16,
                          margin: 6,
                          fontFamily: 'BrandonGrotesque-Regular',
                        }}>
                        Types
                      </Text>
                      <Icon
                        name="chevron-down"
                        size={18}
                        color="#1C5C2E"
                        style={{ margin: 6 }}
                      />
                    </TouchableOpacity>
                  </View>

                  <View style={[styles.box2, {}]}>
                    <FlatList
                      showsHorizontalScrollIndicator={false}
                      keyExtractor={item => item.id}
                      data={databox}
                      renderItem={({ item }) => {
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
                            iconimg1
                            onPressALL={item.pressAll}
                            textA={item.textA}
                            // heart1={item.heart1}
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
                </>
              ) : null}
              {data1 === 2 ? (
                <>
                  <View
                    style={{
                      width: '100%',
                      flexDirection: 'row',
                      alignSelf: 'flex-start',
                      alignSelf: 'center',
                    }}>
                    <TouchableOpacity onPress={() => { }} style={styles.topics}>
                      <Text
                        style={{
                          color: '#1C5C2E',
                          fontSize: 16,
                          margin: 6,
                          fontFamily: 'BrandonGrotesque-Regular',
                        }}>
                        Quantum Physics
                      </Text>
                      <Icon
                        name="close"
                        size={18}
                        color="#1C5C2E"
                        style={{ margin: 6 }}
                      />
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() => setState3(!state3)}
                      style={styles.topics}>
                      <Text
                        style={{
                          color: '#1C5C2E',
                          fontSize: 16,
                          margin: 6,
                          fontFamily: 'BrandonGrotesque-Regular',
                        }}>
                        Types
                      </Text>
                      <Icon
                        name="chevron-down"
                        size={18}
                        color="#1C5C2E"
                        style={{ margin: 6 }}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.box1}>
                    <FlatList
                      showsHorizontalScrollIndicator={false}
                      keyExtractor={item => item.id}
                      numColumns={2}
                      data={databox}
                      renderItem={({ item }) => {
                        return (
                          <View
                            style={{
                              alignSelf: 'center',
                              // display: 'flex',
                              // flexGrow: 1,
                              // width: '50%',
                            }}>
                            <All
                              color1="#1C5C2E"
                              onPressALL={item.pressAll}
                              textA={item.textA}
                              // heart1={item.heart1}
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
                </>
              ) : null}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      <Modaldata
        headtext="Topics"
        text1="Buddhism"
        text2="Plants"
        text3="Quantum Physics"
        text4="Nature"
        text5="Ascended Master"
        text6="Higher Dimensional"
        text7="Light Beings"
        text8="Ancient Wisdom"
        text9="Western Psychology"
        text10="Mindfulness"
        text11="Mindfulness"
        Visible={state1}
        setVisible={setState1}
        onPress={() => {
          setState1(false);


        }}
        onpress1={() => {
          data1 === 1 ? '' : setData1(1)
          setState1(false);

        }}
      />
      <Modaldata
        headtext="Topics"
        text1="Tools For Light"
        text2="Tools For Shadow"
        text3="Tools For Connections"
        Visible={state2}
        setVisible={setState2}
        onPress={() => {
          setState2(false);
        }}
        onpress1={() => {
          state === 1 ? '' : setState(1)
          setState2(false);
        }}
      />
      <Modaldata
        headtext="Topics"
        text1="Essentials"
        text2="Building Blocks"
        text3="Deep Dives"
        text4="Play!"
        Visible={state3}
        setVisible={setState3}
        onPress={() => {
          setState3(false);
          setState3(false);
        }}
        onpress1={() => {
          state === 2 ? '' : setState(2)
          setState3(false);
          // setState1(false);
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // backgroundColor: '#fefe',
  },
  container: {
    width: '95%',
    // height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  input: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 0.5,
    borderRadius: 10,
    backgroundColor: '#BCCFC1',
    opacity: 0.5,
    // alignSelf: 'flex-start',
  },
  row: {
    flexDirection: 'row',
    // justifyContent: 'space-around',
    justifyContent: 'space-between',
    width: '100%',

    // padding: 10,

    borderBottomColor: '#1C5C2E',
    borderBottomWidth: 1,
  },
  box: {
    // // width: '100%',
    // marginHorizontal: 50,
    // height: 42,
    // marginTop: 20,
    // backgroundColor: '#1C5C2E',
    // borderBottomColor: '#1C5C2E',
    // justifyContent: 'center',
    // alignItems: 'center',
    // borderRadius: 5,
  },
  topics: {
    // alignSelf: 'flex-start',
    backgroundColor: '#eeee',
    elevation: 1,
    opacity: 0.5,
    borderColor: '#00000029',

    // width: 126,
    // height: 35,
    borderRadius: 5,
    // borderWidth: 1,
    flexDirection: 'row',
    // justifyContent: 'space-around',
    margin: 10,
  },
  box1: {
    width: '100%',
    alignSelf: 'center',
    // height: '100%',
    // backgroundColor: 'yellow',
  },
});
export default Search2;
databox = [
  {
    heart1: Images.Icons.heart1,
    title: 'Title',
    iconimg1: Images.Icons.Pcircle,
    bg12: Images.BackGround.Bg2,
    plus: 'plus',
    iconimg: Images.Icons.Pcircle,
  },

  {
    heart1: Images.Icons.heart1,
    title: 'Title',
    iconimg1: Images.Icons.sun,
    heart1: Images.Icons.heart1,
    bg12: Images.BackGround.Bg2,
    plus: 'plus',
  },
];
databox2 = [
  {
    heart1: Images.Icons.heart1,
    heart1: Images.Icons.heart1,
    title: 'Title',
    iconimg1: Images.Icons.pinki,
  },
  {
    heart1: Images.Icons.heart1,
    title: 'Title',
    iconimg1: Images.Icons.pinki,
  },
];

const data2 = [
  { Img1: Images.Imgs.bear },
  { Img1: Images.Imgs.bear },
  { Img1: Images.Imgs.bear },
];
const data = [
  {
    text1: 'All',
    img2: Images.BackGround.path1,
    img3: Images.BackGround.nopath2,
    img4: Images.BackGround.rectangle2,
    one: Images.Icons.circleplus,
    heart1: Images.Icons.heart1,
    img: Images.Imgs.heart1,
    centertexr: 'TOOLS FOR LIGHT',
    centertexr1: 'FAMILY OF LIGHT',
    centertexr2: 'TONGLEN',
  },
  {
    text1: 'TOOLS',
    img2: Images.BackGround.path1,
    img3: Images.BackGround.nopath2,
    img4: Images.BackGround.nopath2,
    img4: Images.BackGround.rectangle2,
    two: Images.Imgs.heart1,
    one: Images.Icons.circleplus,
    iconimg2: Images.Icons.Pcircle,
  },
  {
    text1: 'GROUND WORK',
    img2: Images.BackGround.path1,
    img3: Images.BackGround.nopath2,
    img4: Images.BackGround.nopath2,
    img4: Images.BackGround.rectangle2,
    two: Images.Imgs.heart1,
    one: Images.Icons.circleplus,
  },
];
const Data = [
  {
    id: 1,
    bg1: Images.BackGround.black,
    bg12: Images.BackGround.greenbg,
    heart1: Images.Icons.heart1,
    img2: Images.BackGround.nopath2,
    name: 'TONGLEN',
    title: 'title',
    plus: 'plus',
    img: Images.Imgs.heart1,
    // iconimg2: Images.Icons.Pcircle,
  },

  {
    id: 3,
    bg1: Images.BackGround.black,
    bg12: Images.BackGround.greenbg,
    heart1: Images.Icons.heart1,
    name: 'TONGLEN',
    title: 'title',
    plus: 'plus',
    iconimg2: Images.Icons.Pcircle,
  },
  {
    id: 4,
    bg1: Images.BackGround.black,
    bg12: Images.BackGround.greenbg,
    heart1: Images.Icons.heart1,
    name: 'TONGLEN',
    title: 'title',
    plus: 'plus',
    // iconimg2: Images.Icons.Pcircle,
  },
];
const Data2 = [
  {
    id: 1,
    bg1: Images.BackGround.black,
    bg12: Images.BackGround.greenbg,
    heart1: Images.Icons.heart1,
    img2: Images.BackGround.nopath2,
    name: 'TONGLEN',
    title: 'title',
    plus: 'plus',
    img: Images.Imgs.heart1,
    // iconimg2: Images.Icons.Pcircle,
  },
  {
    id: 2,
    bg1: Images.BackGround.black,
    bg12: Images.BackGround.greenbg,
    heart1: Images.Icons.heart1,
    name: 'TONGLEN',
    title: 'title',
    plus: 'plus',
    // iconimg2: Images.Icons.prectangel,
  },
];
