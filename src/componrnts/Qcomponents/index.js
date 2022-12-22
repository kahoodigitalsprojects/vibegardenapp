import React from 'react';
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
  ImageBackground,
} from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/Ionicons';
import Images from '../../constants';
import {color} from 'react-native-elements/dist/helpers';

const QComponents = ({
  text1,
  text2,
  text3,
  text4,
  text5,
  marginVertical,
  textflower,
  text6,
  name,
  width,
  name11,
  name2,
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
              source={Images.BackGround.path1}>
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
                      backgroundColor: '#FF4056',
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
          width: '90%',
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
                    color: '#000',
                    fontSize: 18,
                    fontWeight: '500',
                    alignSelf: 'center',
                    fontFamily: 'BrandonGrotesque-Regular',
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
                <TouchableOpacity
                  onPress={() => {}}
                  style={{marginTop: 1, marginLeft: 5}}>
                  <Icon name={name2} size={25} color="#1C5C2E" />
                </TouchableOpacity>
              )}
            </View>
            <View
              style={{
                // backgroundColor: 'yellow',
                width: '100%',
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
                  <TouchableOpacity onPress={() => {}} style={{marginRight: 5}}>
                    <Icon2 name={name11} size={22} color="#1C5C2E" />
                  </TouchableOpacity>
                )}
                {icontwo && (
                  <TouchableOpacity onPress={() => {}} style={{}}>
                    <Icon name={name2} size={22} color="#EF3A71" />
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </View>
          <View style={{marginTop: 6}}>
            {text5 && (
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
            )}
          </View>
          <View style={{width: width, alignSelf: 'center'}}>
            <Text
              style={[
                {
                  marginTop: margintopS,
                  color: '#000',
                  fontSize: 16,
                  marginTop: marginTop1,
                  fontFamily: 'BrandonGrotesque-Medium',
                  letterSpacing: 1.5,
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
                  letterSpacing: 1.5,
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
                    color: '#1C5C2E',
               
                    fontSize: 22,
                    fontSize: 31,
                    color: '#000',
                    fontFamily: 'BrandonGrotesque-Regular',
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

            justifyContent: 'space-around',
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
                      onPress={item.onPress}
                      style={styles.circle}>
                      <Image
                        source={item.img1}
                        style={{width: '100%', height: '100%'}}
                      />
                    </TouchableOpacity>
                    <View style={{width: 78}}>
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
    fontFamily: 'BrandonGrotesque-Regular',
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
    width: 74,
    height: 74,
    borderRadius: 100,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export {QComponents};
