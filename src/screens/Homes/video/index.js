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

import {
  Flowers,
  Header,
  Pinkbtn,
  QComponents,
  Userdetails,
} from '../../../componrnts';
import Icon from 'react-native-vector-icons/FontAwesome';
import Images from '../../../constants';
import MainBox from '../../../componrnts/mainbox';
import All from '../../../componrnts/all';
import Question from '../Question';
import {useBackButton} from '../../../hooks/BackHandler';
import {GreenIcon1, GreenIcon2} from '../../../assests/svgs/GroundworkSvg';

const Video = ({route, navigation}) => {
  const [state, setState] = useState(icon1);
  const {otherParam} = route.params;
  const {otherParam1} = route.params;
  const {itemId} = route.params;
  const {heart} = route.params;
  const {plus} = route.params;
  const {icon1} = route.params;
  const {redbtn} = route.params;
  const {backoption} = route.params;
  const {fromHome} = route.params || null;
  // const { Heading } = route.params;

  //BackHandler
  const onBackPress = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'GroundWork'}, {name: 'Homes'}],
    });
    return true;
  };
  useBackButton(navigation, onBackPress);
  const Data3 = [
    {text1: 'Not Really', img11: Images.Imgs.R1},

    {
      text1: 'Baby Bloom',
      img11: Images.Imgs.R2,
    },
    {
      text1: 'Solid Bloom',
      img11: Images.Imgs.R3,
    },
    {
      text1: 'Big Bloom',
      img11: Images.Imgs.R4,
    },
  ];
  const data2 = [
    {
      texlist: 'Buddhism',
      img1: Images.Imgs.bear,
    },
    {
      texlist: 'Quantum physics',
      img1: Images.Imgs.bear,
    },
    {
      texlist: 'Nature',
      img1: Images.Imgs.bear,
    },
  ];
  const Data2 = [
    {
      bg1: Images.BackGround.black,
      bg12: Images.BackGround.Bg2,
      heart1: Images.Icons.heart1,
      name: 'TONGLEN',
      title: 'Title',
      plus: 'plus',
    },
  ];
  return (
    <>
      <SafeAreaView style={styles.main}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <StatusBar animated={true} backgroundColor="#000" />

          <View
            style={{
              marginVertical: 10,
              marginTop: 10,
              // width: '90%',
            }}>
            <View
              style={{
                width: '90%',

                alignSelf: 'center',
                paddingVertical: 8,
              }}>
              <Header
                greenicon1={state === icon1 ? <GreenIcon1 /> : <GreenIcon2 />}
                heartplus
                heart
                plus={plus}
                hearttop={-4}
                size={22}
                colorplus={'green'}
                marginTopplus={-4}
                heading
                fontSize={20}
                search1="closesquareo"
                logo11
                color="#fff"
                gbg="#1C5C2E"
                alignItems="center"
                homeheader
                headertext={otherParam1}
                search={() =>
                  navigation.reset({
                    index: 0,
                    routes: [{name: 'GroundWork'}, {name: 'Homes'}],
                  })
                }
              />
            </View>
            <View
              style={{
                width: '100%',
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <QComponents
                margintopS={-15}
                flowwerlist={otherParam}
                iconone1={plus}
                //   video={true}
                marginTop1={-30}
                name11="plus"
                name="heart-outlined"
                video2={true}
                redbtn={redbtn}
                direction="Descriptions:"
                icontwo={true}
                // iconone1
                // name11="plus",
                // marginVertical={24}
                name2="heart-outlined"
                width={'95%'}
                Statement="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di At vero eos et accusam et justo duo Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di At vero eos et accusam et justo duo.."
                Statementtext="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di At vero eos et accusam et justo duo Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di At vero eos et accusam et justo duo.."
              />
            </View>
            <View
              style={{
                width: '95%',
                alignSelf: 'center',
              }}>
              <FlatList
                data={data2}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => {
                  return (
                    <>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignSelf: 'flex-start',
                        }}>
                        <TouchableOpacity style={[styles.topics, {padding: 6}]}>
                          <Text
                            style={{
                              color: '#1C5C2E',
                              fontSize: 12,
                              fontFamily: 'BrandonGrotesque-Regular',
                            }}>
                            {item.texlist}
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </>
                  );
                }}
              />

              {otherParam && (
                <>
                  <View
                    style={{
                      width: '95%',
                      alignSelf: 'center',
                      marginVertical: 20,
                    }}>
                    <Text
                      style={{
                        fontSize: 20,
                        color: '#1C5C2E',
                        fontFamily: 'BrandonGrotesque-Regular',
                      }}>
                      Did you try this tools?
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '100%',
                      alignSelf: 'center',
                      alignItems: 'center',
                      // backgroundColor: '#1C5C',
                    }}>
                    {/* <FlatList
                      showsHorizontalScrollIndicator={false}
                      horizontal={true}
                      data={Data3}
                      renderItem={({item, index}) => {
                        return (
                          <>
                            <View style={{}}>
                              <Flowers
                                flower1
                                img1={item.img11}
                                text1={item.text1}
                              />
                            </View>
                          </>
                        );
                      }}
                    /> */}

                    <QComponents
                      width1={ '100%'}
                      flowwerlist11={true}
                      marginTop1={-90}
                      text1={'Not Really'}
                      text2="Baby Bloom"
                      text3={'Solid Bloom'}
                      text4="Big Bloom"
                      fontfamily="BrandonGrotesque-Regular"
                    />
                  </View>
                </>
              )}
              <View
                style={[
                  styles.row,
                  {width: '95%', alignSelf: 'center', marginTop: 10},
                ]}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 14,
                    color: '#1C5C2E',
                    fontFamily: 'BrandonGrotesque-Bold',
                  }}>
                  Comments
                </Text>
                <View style={styles.line}></View>
              </View>
            </View>
            <View style={{width: '95%', alignSelf: 'center'}}>
              <FlatList
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{height: 160}}
                data={Data3}
                renderItem={({item}) => {
                  return (
                    <View style={styles.item1}>
                      <Userdetails
                        databox1
                        name={'Michael Grower'}
                        Img1={Images.Imgs.user2}
                        // name={name}
                        time={'12/8/22-03:00 PM'}
                        text={
                          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.'
                        }
                      />
                    </View>
                  );
                }}
              />
            </View>
          </View>

          <View
            style={
              {
                // width: '95%',
                // alignSelf: 'center',
              }
            }>
            <View style={styles.row}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 20,
                  color: '#1C5C2E',
                  fontFamily: 'BrandonGrotesque-Regular',
                  marginTop: 5,
                }}>
                Related Content:
              </Text>
            </View>
            <View style={styles.box1}>
              <FlatList
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
                numColumns={2}
                data={Data2}
                renderItem={({item}) => {
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

            <View
              style={{
                width: '90%',
                alignSelf: 'center',
                alignSelf: 'center',
                marginTop: 4,
              }}>
              <Text style={styles.text}>Additional Resonance:</Text>
              <Text style={[styles.text, {textDecorationLine: 'underline'}]}>
                Links
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontSize: 12,
                  marginTop: 5,
                  marginVertical: 20,
                  fontFamily: 'BrandonGrotesque-Medium',
                }}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam.
              </Text>
              <Text style={styles.text}>Suggested Teachers:</Text>
            </View>
          </View>
          <View
            style={{width: '90%', alignSelf: 'center', alignSelf: 'center'}}>
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
                        bear={item.img1}
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
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    width: '100%',
    // height: '100%',
    // justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  text: {
    color: 'black',
    fontSize: 20,
    color: '#1C5C2E',
    marginTop: 5,
    fontFamily: 'BrandonGrotesque-Regular',
  },
  text1: {
    fontSize: 25,
    textAlign: 'center',
    color: '#000',
    fontWeight: '400',
    fontFamily: 'BrandonGrotesque-Regular',
  },
  item1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text2: {
    marginVertical: 2,
    fontSize: 20,
    // textAlign: 'center',
    fontFamily: 'BrandonGrotesque-Regular',
    color: '#1C5C2E',
    fontWeight: '500',
  },
  topics: {
    // alignSelf: 'flex-start',
    backgroundColor: '#D1DED5',
    borderColor: '#00000029',
    elevation: 5,
    // width: 126,
    // height: 35,
    borderRadius: 5,
    borderWidth: 1,
    flexDirection: 'row',
    // justifyContent: 'space-around',
    margin: 10,
  },
  box1: {
    width: '90%',
    alignSelf: 'center',
    // height: '100%',
    marginTop: -25,
    // backgroundColor: 'yellow',
  },
  row: {
    flexDirection: 'row',
    // backgroundColor: 'green',
    width: '90%',
    alignSelf: 'center',

    flexDirection: 'row',
  },
  line: {
    width: '80%',
    height: 1,
    backgroundColor: '#afafaf',
    marginTop: 12,
    marginLeft: 2,
  },
});
export default Video;
