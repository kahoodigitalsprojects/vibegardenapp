import React, {useState} from 'react';
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
import {Imgbox, SeeAll, Userdetails} from '../../../componrnts';
import All from '../../../componrnts/all';
import MainBox from '../../../componrnts/mainbox';
import Searcbart1 from '../../../componrnts/searchbar1';
import Images from '../../../constants';

const Search2 = ({route, navigation, otherParam}) => {
  // const {newtext} = route.params;

  const [data1, setData1] = useState(0);
  const data2 = [{}, {}, {}];
  const data = [
    {
      text1: 'All',
      img2: Images.BackGround.path1,
      img3: Images.BackGround.nopath2,
      img4: Images.BackGround.rectangle2,
      one: Images.Icons.circleplus,
      heart1: Images.Icons.heart1,
      img: Images.Imgs.heart1,
    },
    {
      text1: 'Tools',
      img2: Images.BackGround.path1,
      img3: Images.BackGround.nopath2,
      img4: Images.BackGround.nopath2,
      img4: Images.BackGround.rectangle2,
      two: Images.Imgs.heart1,
      one: Images.Icons.circleplus,
      iconimg2: Images.Icons.Pcircle,
    },
    {
      text1: 'Ground Work',
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
      id: 2,
      bg1: Images.BackGround.black,
      bg12: Images.BackGround.greenbg,
      heart1: Images.Icons.heart1,
      name: 'TONGLEN',
      title: 'title',
      plus: 'plus',
      // iconimg2: Images.Icons.prectangel,
    },
    {
      id: 3,
      bg1: Images.BackGround.black,
      bg12: Images.BackGround.greenbg,
      heart1: Images.Icons.heart1,
      name: 'TONGLEN',
      title: 'title',
      plus: 'plus',
      // iconimg2: Images.Icons.Pcircle,
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
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <StatusBar animated={true} backgroundColor="#000" />
        <View style={{width: '100%'}}>
          <Searcbart1 onpress1={() => navigation.goBack('')} />
        </View>
        <View style={styles.container}>
          <View style={styles.row}>
            <View
              style={{
                alignSelf: 'center',
                alignSelf: 'center',
                display: 'flex',
                flexGrow: 1,
              }}>
              <TouchableOpacity
                onPress={() => (data1 === 0 ? '' : setData1(0))}
                style={{
                  backgroundColor: data1 === 0 ? '#205F2E' : '#D1DED5',
                  elevation: data1 === 1 ? 0 : 5,
                  // width: '33%',
                  borderRadius: 5,
                  padding: 10,
                  paddingLeft: 16,
                  paddingRight: 16,
                  alignSelf: 'center',
                  marginHorizontal: 28,
                  // backgroundColor: 'yellow',
                }}>
                <Text
                  style={{
                    color: data1 === 0 ? '#fff' : '#1C5C2E87',
                  }}>
                  All
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                alignSelf: 'center',
                alignSelf: 'center',
                display: 'flex',
                flexGrow: 1,
              }}>
              <TouchableOpacity
                onPress={() => (data1 === 1 ? '' : setData1(1))}
                style={{
                  backgroundColor: data1 === 1 ? '#205F2E' : '#D1DED5',
                  elevation: data1 === 1 ? 0 : 5,
                  // width: '33%',
                  borderRadius: 5,
                  padding: 10,
                  alignSelf: 'center',
                  marginHorizontal: 28,
                  // backgroundColor: 'yellow',
                }}>
                <Text
                  style={{
                    color: data1 === 1 ? '#fff' : '#1C5C2E87',
                  }}>
                  Tools
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                alignSelf: 'center',
                alignSelf: 'center',
                display: 'flex',
                flexGrow: 1,
              }}>
              <TouchableOpacity
                onPress={() => (data1 === 2 ? '' : setData1(2))}
                style={{
                  backgroundColor: data1 === 2 ? '#205F2E' : '#D1DED5',
                  elevation: data1 === 1 ? 0 : 5,
                  // width: '33%',
                  borderRadius: 5,
                  padding: 10,
                  alignSelf: 'center',
                  marginHorizontal: 28,
                  // backgroundColor: 'yellow',
                }}>
                <Text
                  style={{
                    color: data1 === 2 ? '#fff' : '#1C5C2E87',
                  }}>
                  Ground Work
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{width: '100%', marginVertical: 5}}>
            {data1 === 0 ? (
              <>
                <View
                  style={{
                    width: '100%',
                    flexDirection: 'row',
                    alignSelf: 'flex-start',
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      /* 1. Navigate to the Details route with params */
                      navigation.navigate('Search3', {
                        itemId: 'Topics',
                        otherParam1: 'Buddhism',
                        otherParam2: 'Plants',
                        otherParam3: 'Quantum Physics',
                        otherParam4: 'Body Wisdom',
                        otherParam5: 'Nature',
                        otherParam6: 'Ascended Master',
                        otherParam7: 'Hight Dimensional',
                        otherParam8: 'Light Beihngs',
                        otherParam9: 'Ancient Wisdom',
                        otherParam10: 'Western Psychology',
                        otherParam11: 'Mindfullness',
                        otherParam12: 'Science',
                      });
                    }}
                    style={[styles.topics, {backgroundColor: '#fff'}]}>
                    <Text style={{color: '#1C5C2E', fontSize: 16, margin: 6}}>
                      Topics
                    </Text>
                    <Icon
                      name="chevron-down"
                      size={18}
                      color="#1C5C2E"
                      style={{margin: 6}}
                    />
                  </TouchableOpacity>
                </View>

                <View>
                  <View style={{marginVertical: 10}}>
                    <SeeAll
                      onPress={() =>
                        navigation.navigate('Mytabs', {screen: 'Home'})
                      }
                      textA="Tools"
                      textB="SeeAll"
                    />
                  </View>
                  <View style={styles.box1}>
                    <ScrollView
                      horizontal={true}
                      showsHorizontalScrollIndicator={true}>
                      {data.map((item, index) => {
                        return (
                          <>
                            <View style={{}}>
                              <MainBox
                                left={60}
                                bgcolor={'#FF4053'}
                                TONGLEN="TONGLEN"
                                textone={'TOOLS FOR LIGHT'}
                                I1={item.one}
                                item={item.ImgICon}
                                img2={item.img2}
                                heart1={item.heart1}
                                color={'green'}
                                text2={'5 min'}
                              />
                            </View>
                          </>
                        );
                      })}
                    </ScrollView>
                  </View>
                  <View style={{marginVertical: 10}}>
                    <SeeAll
                      onPress={() =>
                        navigation.navigate('Homes', {
                          screen: 'FressBlooms',
                        })
                      }
                      textA="GROUND WORK"
                      textB="SeeAll"
                    />
                  </View>
                  <View style={styles.box2}>
                    <ScrollView
                      horizontal={true}
                      showsHorizontalScrollIndicator={true}>
                      {data.map((item, index) => {
                        return (
                          <>
                            <View style={{}}>
                              <MainBox
                                left={60}
                                bgcolor={'#FF4053'}
                                TONGLEN="TONGLEN"
                                textone={'TOOLS FOR LIGHT'}
                                I1={item.heart1}
                                img2={item.img3}
                                color={'green'}
                                text2={'5 min'}
                              />
                            </View>
                          </>
                        );
                      })}
                    </ScrollView>
                  </View>
                  <View style={{marginVertical: 10}}>
                    <SeeAll
                      onPress={() =>
                        navigation.navigate('Homes', {
                          screen: 'FressBlooms',
                        })
                      }
                      textA="FRESH BLOOMS"
                      textB="SeeAll"
                    />
                  </View>
                  <View style={{}}>
                    <ScrollView
                      horizontal={true}
                      showsHorizontalScrollIndicator={true}>
                      {data.map((item, index) => {
                        return (
                          <>
                            <View style={{}}>
                              <MainBox
                                I1={item.heart1}
                                img2={item.img4}
                                item={item.ImgICon}
                                color={'green'}
                                left={60}
                                bgcolor={'#FF4053'}
                                TONGLEN="TONGLEN"
                                textone={'TOOLS FOR LIGHT'}
                                text2={'5 min'}
                              />
                            </View>
                          </>
                        );
                      })}
                    </ScrollView>
                  </View>
                </View>
                <View style={{}}>
                  <SeeAll
                    onPress={() =>
                      navigation.navigate('Homes', {
                        screen: 'FressBlooms',
                      })
                    }
                    textA="TEACHERS"
                    textB="SeeAll"
                  />
                </View>

                <View style={{}}>
                  <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={data2}
                    renderItem={({item}) => {
                      return (
                        <>
                          <View
                            style={{
                              marginTop: 20,
                              marginVertical: 5,
                              width: '100%',
                              alignSelf: 'center',
                            }}>
                            <Userdetails
                              backgroundColor={'#00000029'}
                              databox2
                              Img1={item.Img1}
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
                  <TouchableOpacity
                    onPress={() => {
                      /* 1. Navigate to the Details route with params */
                      navigation.navigate('Search3', {
                        itemId: 86,
                        otherParam1: 'Tools For Light',
                        otherParam2: 'Tools For Shadow',
                        otherParam3: 'Tools For Connections',
                      });
                    }}
                    style={styles.topics}>
                    <Text style={{color: '#1C5C2E', fontSize: 16, margin: 6}}>
                      Topics
                    </Text>
                    <Icon
                      name="chevron-down"
                      size={18}
                      color="#1C5C2E"
                      style={{margin: 6}}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      /* 1. Navigate to the Details route with params */
                      navigation.navigate('Search3', {
                        itemId: 'Groundwork Types',
                        otherParam1: 'Tools For Light',
                        otherParam2: 'Tools For Shadow',
                        otherParam3: 'Tools For Connections',
                        otherParam4: 'Buddhism',
                      });
                    }}
                    style={styles.topics}>
                    <Text style={{color: '#1C5C2E', fontSize: 16, margin: 6}}>
                      Types
                    </Text>
                    <Icon
                      name="chevron-down"
                      size={18}
                      color="#1C5C2E"
                      style={{margin: 6}}
                    />
                  </TouchableOpacity>
                </View>

                <View style={{}}>
                  <View style={styles.box1}>
                    <FlatList
                      showsHorizontalScrollIndicator={false}
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
                              iconimg={true}
                              iconimg2
                              I1={item.three}
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
                  <TouchableOpacity onPress={() => {}} style={styles.topics}>
                    <Text style={{color: '#1C5C2E', fontSize: 16, margin: 6}}>
                      Quantum Physics
                    </Text>
                    <Icon
                      name="close"
                      size={18}
                      color="#1C5C2E"
                      style={{margin: 6}}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => {
                      /* 1. Navigate to the Details route with params */
                      navigation.navigate('Search3', {
                        itemId: 'Groundwork Types',
                        otherParam1: 'Essentials',
                        otherParam2: 'Building Blocks',
                        otherParam3: 'Deep Dives',
                        otherParam4: 'Play!',
                      });
                    }}
                    style={styles.topics}>
                    <Text style={{color: '#1C5C2E', fontSize: 16, margin: 6}}>
                      Types
                    </Text>
                    <Icon
                      name="chevron-down"
                      size={18}
                      color="#1C5C2E"
                      style={{margin: 6}}
                    />
                  </TouchableOpacity>
                </View>
                <View style={{}}>
                  <View style={styles.box1}>
                    <FlatList
                      keyExtractor={item => item.id}
                      showsHorizontalScrollIndicator={false}
                      numColumns={2}
                      data={Data2}
                      renderItem={({item}) => {
                        return (
                          <View
                            style={{
                              alignSelf: 'center',
                              display: 'flex',
                              flexGrow: 1,
                            }}>
                            <All
                              iconimg={true}
                              iconimg2
                              heart1={item.heart1}
                              textA={item.textA}
                              textB={item.textB}
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
              </>
            ) : null}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // backgroundColor: '#fefe',
  },
  container: {
    width: '90%',
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
    justifyContent: 'space-around',
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
    backgroundColor: '#00000019',
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
