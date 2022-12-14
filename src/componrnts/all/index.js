import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React from 'react';
import Images from '../../constants';
import Icon from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import {SeeAll} from '../SeeAll';
import {FlatList} from 'react-native';
import {CardHeartSvg} from '../../assests/svgs/GardenSvg';

const All = ({
  newtext1,
  newtext2,
  bghome2,
  title,
  heart1,
  marginTop2,
  searchmargin,

  plustop,
  searchTop,
  textA,
  textB,
  onPress,
  iconimg,
  color1,
  circle,
  iconimg2,
  onPressALL,
  iconimg12,
  iconimg13,
  iconimg14,
  marginVertical2,
  plus,
  marginBottom,
  iconimg1,

  pressI,
  marginTop,
}) => {
  const Data = [
    {
      id: 1,
      bg1: Images.BackGround.black,
      bg12: Images.BackGround.greenbg,
      heart1: Images.Icons.heart1,
      name: 'TONGLEN',
      title: 'title',

      iconimg1: Images.Icons.Pcircle,
      iconimg2: Images.Icons.pinki,
    },
    {
      id: 2,
      bg1: Images.BackGround.black,
      bg12: Images.BackGround.greenbg,
      heart1: Images.Icons.pinki,
      name: 'TONGLEN',
      title: 'title',
      iconimg2: iconimg2,
      iconimg1: Images.Icons.prectangel,
      iconimg2: Images.Icons.pinki,
    },
    {
      id: 3,
      bg1: Images.BackGround.black,
      bg12: Images.BackGround.greenbg,
      heart1: Images.Icons.heart1,
      name: 'TONGLEN',
      title: 'title',
      iconimg1: Images.Icons.sun,
      iconimg2: Images.Icons.pinki,
    },
  ];
  return (
    <>
      <View>
        <View
          style={{
            width: '95%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: marginBottom,
            marginTop: marginTop,
            marginVertical: 5,
          }}>
          <Text style={[styles.txtA, {color: color1}]}>{textA}</Text>
          <TouchableOpacity onPress={onPressALL} style={{}}>
            <Text style={styles.txtB}>{textB}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.box2}>
        {/*  */}
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={Data}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  // backgroundColor: 'red',
                  width: 172,
                  height: 229,
                  borderRadius: 10,
                  marginRight: index == 0 ? 10 : null,
                  marginHorizontal: index == 0 ? null : 10,
                  overflow: 'hidden',
                }}>
                <Image
                  source={bghome2}
                  style={{
                    // backgroundColor: 'blue',
                    height: '100%',
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                />
                <View
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    // backgroundColor: 'yellow',
                    width: '100%',
                    height: '100%',
                  }}>
                  <TouchableOpacity
                    onPress={pressI}
                    style={{
                      // backgroundColor: 'pink',
                      top: 12,
                      right: 4,
                      position: 'absolute',
                      height: 33,
                      width: 33,
                      alignSelf: 'flex-end',
                      // backgroundColor: 'yellow',
                    }}>
                    {/* <Image
                      source={heart1}
                      resizeMode="contain"
                      style={{
                        width: '100%',
                        height: '100%',
                        marginLeft: 2,
                      }}
                    /> */}
                    {heart1 && <CardHeartSvg />}
                    <Icon
                      name={plus}
                      color={'#fefefe'}
                      size={25}
                      style={{
                        fontWeight: 'bold',
                        position: 'absolute',
                        marginTop: plustop,
                      }}
                    />
                  </TouchableOpacity>

                  <View
                    style={{
                      marginTop: 100,
                      // backgroundColor: 'yellow',

                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        marginVertical: searchmargin,
                        marginTop: searchTop,
                      }}>
                      {iconimg1 && (
                        <View
                          style={{
                            width: 30,
                            height: 25,

                            // backgroundColor: 'yellow',
                          }}>
                          <Image
                            source={item.iconimg1}
                            resizeMode="contain"
                            style={{
                              width: '100%',
                              height: '100%',
                            }}
                          />
                        </View>
                      )}
                      {iconimg2 && (
                        <View
                          style={{
                            width: 30,
                            height: 25,

                            // backgroundColor: 'yellow',
                          }}></View>
                      )}
                    </View>
                    <View style={{marginTop: -15}}>
                      <Text
                        style={{
                          textAlign: 'center',
                          fontSize: 20,
                          color: '#000',
                          fontFamily: 'BrandonGrotesque-Medium',
                          paddingBottom: 10,
                        }}>
                        {title}
                      </Text>

                      <View style={{}}>
                        <LinearGradient
                          colors={['#ED535E', '#CD258D']}
                          style={{
                            width: 40,
                            height: 25,
                            borderRadius: 10,
                            marginVertical: 3,

                            justifyContent: 'center',
                            // backgroundColor: '#CD258D',
                            alignItems: 'center',
                          }}>
                          <Text
                            style={{
                              color: '#fff',
                              fontWeight: 'bold',

                              fontSize: 10,
                              fontFamily: 'BrandonGrotesque-Regular',
                            }}>
                            5Min
                          </Text>
                        </LinearGradient>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
    </>
  );
};

export default All;

const styles = StyleSheet.create({
  box2: {
    // backgroundColor: 'yellow',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    // height: 100,
  },
  txtA: {
    color: '#1C5C2E',
    fontWeight: '500',
    fontSize: 18,
    fontFamily: 'BrandonGrotesque-Regular',
    fontWeight: '700',
    opacity: 0.85,
  },
  txtB: {
    color: '#1C5C2E',
    fontWeight: '500',
    fontSize: 14,
    textDecorationLine: 'underline',
    fontFamily: 'BrandonGrotesque-Regular',
    fontWeight: '700',
    opacity: 0.85,
  },
});
