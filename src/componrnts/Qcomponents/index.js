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
import Icon3 from 'react-native-vector-icons/Ionicons';
import Images from '../../constants';
import Collapsible from 'react-native-collapsible';
import LinearGradient from 'react-native-linear-gradient';
const QComponents = ({
  text1,
  text2,
  text3,
  text4,
  text5,
  marginVertical,
  fontfamily,
  textflower,
  text6,
  name,
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
}) => {
  const [data1, setdata1] = useState(0);
  const [isCollapsed, setIsCollapsed] = useState(true);

  const data = [
    {text1: text1, img1: Images.Imgs.R1},

    {
      text1: text2,
      img1: Images.Imgs.R2,
    },
    {
      text1: text3,
      img1: Images.Imgs.R3,
    },
    {
      text1: text4,
      img1: Images.Imgs.R4,
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

          <View style={{flexDirection: 'row'}}>
            <Text style={styles.text2}>{direction2}</Text>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={[
                  styles.text2,
                  {
                    color: '#000',
                    fontSize: 18,
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
                    {isCollapsed ? (
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
          <View style={{width: width, alignSelf: 'center'}}>
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
                    fontSize: 31,
                    color: '#000',
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
            width: '100%',
            alignSelf: 'center',
            alignItems: 'center',

            // justifyContent: 'space-around',
          }}>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={data}
            renderItem={({item, index}) => {
              return (
                <>
                  <View style={{width: '24%', margin: 2}}>
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
                                width: 74,
                                height: 74,
                                // width: 100,
                                // height: 100,
                                // borderRadius: 100,
                                // justifyContent: 'center',
                                // alignItems: 'center',
                                // alignSelf: 'center',
                                backgroundColor:
                                  data1 === index ? '#CD258D' : '',
                                opacity: 0.9,
                                // elevation: data1 === index ? 0 : 5,
                              },
                            ]}>
                            <Icon
                              name="check"
                              size={39}
                              color="#fff"
                              style={{}}
                            />
                          </LinearGradient>
                        ) : (
                          <View
                            style={[styles.circle, {width: 74, height: 74}]}>
                            <Image
                              source={item.img1}
                              resizeMode="contain"
                              style={{width: '100%', height: '100%'}}
                            />
                          </View>
                        )}
                      </>
                    </TouchableOpacity>
                    <View style={{width: 78, margin: 7}}>
                      <Text
                        style={{
                          marginTop: 5,
                          fontSize: 12,
                          color: '#000',
                          textAlign: 'center',
                          fontFamily: 'BrandonGrotesque-Regular',
                          color: '#1C5C2E',
                        }}>
                        {item.text1}
                      </Text>
                    </View>
                  </View>
                </>
              );
            }}
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
    // textAlign: 'center',
    color: '#1C5C2E',
    // fontWeight: '500',
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
    margin: 7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,

    borderRadius: 100,
    backgroundColor: 'yellow',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export {QComponents};
