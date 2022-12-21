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
  // const { Heading } = route.params;
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
      texlist: 'Buddhidum',
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
      title: 'title',
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
                marginTop: 10,
                alignSelf: 'center',
              }}>
              <Header
                greenicon1={
                  state === icon1
                    ? Images.Logos.greenicon1
                    : Images.Logos.greenicon2
                }
                heartplus
                heart
                plus={plus}
                size={22}
                colorplus={'green'}
                marginTopplus={2}
                heading
                fontSize={20}
                search1="closesquareo"
                logo11
                hearttop={4}
                color="#fff"
                gbg="#1C5C2E"
                homeheader
                headertext={otherParam1}
                search={backoption}
              />
            </View>
            <View style={{width: '100%'}}>
              <QComponents
                flowwerlist={otherParam}
                iconone1={plus}
                //   video={true}
                marginTop1={-20}
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
              />
            </View>

            <View
              style={{
                width: '90%',
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
                      width: '100%',
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

                  <FlatList
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
                  />
                </>
              )}
              <View
                style={[
                  styles.row,
                  {marginVertical: 20, width: '95%', alignSelf: 'center'},
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
              {Data3.map(index => {
                return (
                  <View style={{}}>
                    <ScrollView style={{marginVertical: 10, height: 120}}>
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
                    </ScrollView>
                  </View>
                );
              })}
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
              }}>
              <Text style={styles.text}>Additional Resonance:</Text>
              <Text style={[styles.text, {textDecorationLine: 'underline'}]}>
                Links
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontSize: 12,
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
                        width: '95%',
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
    backgroundColor: '#fefe',
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
    // backgroundColor: 'yellow',
    marginTop: -30,
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
