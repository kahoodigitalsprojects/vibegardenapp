import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Images from '../../constants';
import Collapsible from 'react-native-collapsible';
import LinearGradient from 'react-native-linear-gradient';
import {
  FirstSvg,
  FourthSvg,
  SecondSvg,
  ThirdSvg,
} from '../../assests/svgs/QuestionsSvg';

const QComponents = ({
  text1,
  text2,
  text3,
  text4,
  width1,
  text5,
  marginVertical,
  alignSelfitems,
  fontfamily,
  textflower,
  text6,
  name,
  textfontsize,
  width,
  name11,
  name2,
  name3,
  number,
  video,
  video2,
  image1,
  marginTop1,
  flowwerlist11,
  Statement1,
  Statement,
  flow,
  direction,
  direction2,
  iconone,
  margintopS,

  iconone1,
  icontwo,
  redbtn,
  textforvideo,
  colapse,
}) => {
  const [data1, setdata1] = useState(0);
  const [isCollapsed, setIsCollapsed] = useState(colapse);
  const numColumns = 4;
  const data = [
    {text1: text1, img1: <FirstSvg />},

    {
      text1: text2,
      img1: <SecondSvg />,
    },
    {
      text1: text3,
      img1: <ThirdSvg />,
    },
    {
      text1: text4,
      img1: <FourthSvg />,
    },
  ];

  return (
    <>
      {video2 && (
        <View style={styles.starbg2}>
          <View
            style={{
              width: '100%',
              height: 202,
              marginTop: 10,
              margin: 20,
            }}>
            <ImageBackground
              resizeMode="cover"
              style={{
                width: '100%',
                alignItems: 'center',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              source={Images.BackGround.pathbg}>
              <View style={{width: 100, height: 70, alignSelf: 'center'}}>
                <Image
                  source={Images.Icons.playbtn}
                  resizeMode="contain"
                  style={{width: '100%', height: '100%'}}
                />
                {redbtn && (
                  <View
                    style={{
                      width: 77,
                      alignSelf: 'center',
                      height: 40,
                      borderRadius: 12,
                      // margin: 2,
                      backgroundColor: '#EF3A71',
                    }}>
                    <Text
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: '#fff',
                        textAlign: 'center',
                        fontFamily: 'BrandonGrotesque-Regular',
                        top: 10,
                      }}>
                      5 min
                    </Text>
                  </View>
                )}
              </View>
            </ImageBackground>
          </View>
        </View>
      )}
      <View
        style={{
          marginVertical: 10,
          width: width,
          alignSelf: 'center',
        }}>
        <View style={{marginVertical: 2}}>
          <Text style={styles.text1}>{number}</Text>
          {video && (
            <View style={styles.starbg}>
              <View
                style={{
                  alignItems: 'center',
                  alignSelf: 'center',
                  margin: 10,
                }}>
                <Text
                  style={{
                    color: '#191919B8',
                    fontSize: 18,
                    fontWeight: '500',
                    alignSelf: 'center',
                    fontFamily: 'BrandonGrotesque-Bold',
                  }}>
                  {textforvideo}
                </Text>
                <View style={{width: 160, height: 120}}>
                  <Image
                    source={Images.Icons.playbtn}
                    resizeMode="contain"
                    style={{width: '100%', height: '100%'}}
                  />
                </View>
              </View>
            </View>
          )}

          {image1 && (
            <View style={styles.starimgbg}>
              <Image
                source={Images.Imgs.startbg}
                resizeMode="contain"
                style={{width: '100%', height: '100%'}}
              />
            </View>
          )}

          <View style={{flexDirection: 'row', width: width1}}>
            <Text style={styles.text2}>{direction2}</Text>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={[
                  styles.text2,
                  {
                    color: '#000',
                    fontSize: 20,
                    marginLeft: 5,
                    fontFamily: 'BrandonGrotesque-Regular',
                  },
                ]}>
                {flow}
              </Text>

              {iconone && (
                <>
                  <TouchableOpacity
                    onPress={() => setIsCollapsed(!isCollapsed)}
                    style={{marginTop: 1, marginLeft: 5}}>
                    {isCollapsed === colapse ? (
                      <Icon name={name3} size={25} color="#1C5C2E" />
                    ) : (
                      <Icon name={name2} size={25} color="#1C5C2E" />
                    )}
                  </TouchableOpacity>
                </>
              )}
            </View>
            <View
              style={{
                // backgroundColor: 'yellow',
                width: '97%',
                marginTop: -25,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  marginTop: margintopS,
                  fontFamily: 'BrandonGrotesque-Medium',
                  color: '#1C5C2E',
                  // fontWeight: '700',
                  fontSize: 20,
                }}>
                {direction}
              </Text>
              <View style={{flexDirection: 'row'}}>
                {iconone1 && (
                  <TouchableOpacity
                    onPress={() => {}}
                    style={{marginRight: 5, marginTop: margintopS}}>
                    <Icon2 name={name11} size={22} color="#1C5C2E" />
                  </TouchableOpacity>
                )}
                {icontwo && (
                  <TouchableOpacity
                    onPress={() => {}}
                    style={{marginTop: margintopS}}>
                    <Icon name={name2} size={24} color="#EF3A71" />
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </View>
          <View style={{marginTop: 6}}>
            {text5 && (
              <Collapsible collapsed={isCollapsed}>
                <Text
                  style={[
                    {
                      color: '#000',
                      fontSize: 18,
                      lineHeight: 30,
                      fontFamily: 'BrandonGrotesque-Medium',
                    },
                  ]}>
                  {text5}
                </Text>
              </Collapsible>
            )}
          </View>
          <View style={{width: width, alignSelf: alignSelfitems}}>
            <Text
              style={[
                {
                  marginTop: margintopS,
                  color: '#000',
                  fontSize: 14,
                  marginTop: marginTop1,
                  fontFamily: 'BrandonGrotesque-Regular',
                },
              ]}>
              {Statement}
            </Text>
            <Text
              style={[
                {
                  marginTop: margintopS,
                  color: '#1C5C2E',
                  fontSize: 20,
                  marginTop: marginTop1,
                  fontFamily: 'BrandonGrotesque-Medium',
                  // letterSpacing: 1.5,
                },
              ]}>
              {Statement1}
            </Text>
          </View>
          {text6 && (
            <View style={{marginVertical: marginVertical}}>
              <Text
                style={[
                  styles.text2,

                  {
                    marginTop: marginTop1,
                    fontSize: textfontsize,
                    color: '#000', // fontSize: 31,
                    fontFamily: fontfamily,
                  },
                ]}>
                {text6}
              </Text>
            </View>
          )}
        </View>
      </View>
      {flowwerlist11 && (
        <View
          style={{
            marginTop: marginTop1,
            flex: 1,
          }}>
          <FlatList
            columnWrapperStyle={{justifyContent: 'space-between'}}
            data={data}
            style={{
              // height: 100,
              width: '92.5%',
              alignSelf: 'center',
            }}
            contentContainerStyle={{
              flex: 1,
              justifyContent: 'center',
              padding: 5,
            }}
            showsVerticalScrollIndicator={false}
            // ItemSeparatorComponent={() => (
            //   <View style={{marginHorizontal: 15}} />
            // )}
            renderItem={({item, index}) => (
              <View style={{alignItems: 'center', marginRight: 1.5}}>
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => (index === true ? '' : setdata1(index))}
                  style={{}}>
                  <>
                    {data1 === index ? (
                      <LinearGradient
                        colors={['#ED535E', '#CD258D']}
                        style={[
                          styles.circle,
                          {
                            width: 80,
                            height: 80,
                            borderRadius: 100,
                            justifyContent: 'center',
                            alignItems: 'center',
                            alignSelf: 'center',
                            backgroundColor: data1 === index ? '#CD258D' : '',
                            opacity: 0.9,
                            // elevation: data1 === index ? 0 : 5,
                          },
                        ]}>
                        <Icon name="check" size={39} color="#fff" style={{}} />
                      </LinearGradient>
                    ) : (
                      <View style={[styles.circle, {width: 80, height: 80}]}>
                        {item.img1}
                      </View>
                    )}
                  </>
                </TouchableOpacity>
                <Text
                  style={{
                    marginTop: 5,
                    width: 70,
                    fontSize: 12,
                    textAlign: 'center',
                    fontFamily: 'BrandonGrotesque-Regular',
                    color: '#1C5C2E',
                  }}>
                  {item.text1}
                </Text>
              </View>
            )}
            //Setting the number of column
            keyExtractor={(item, index) => index.toString()}
            numColumns={numColumns}
          />
        </View>
      )}
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
  text1: {
    fontSize: 25,
    textAlign: 'center',
    color: '#000',
    fontWeight: '400',
    fontFamily: 'BrandonGrotesque-Medium',
  },
  text2: {
    fontSize: 20,
    color: '#1C5C2E',
    fontFamily: 'BrandonGrotesque-Regular',
  },
  starbg: {
    width: '100%',
    height: 200,
    alignSelf: 'center',
    marginVertical: 10,
    backgroundColor: '#00000029',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  starbg2: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  starimgbg: {
    width: '100%',
    height: 200,
    alignSelf: 'center',
    marginVertical: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    // margin: 7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,

    borderRadius: 100,
    // backgroundColor: 'yellow',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export {QComponents};
