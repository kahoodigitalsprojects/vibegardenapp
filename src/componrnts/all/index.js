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
import {SeeAll} from '../SeeAll';
import {FlatList} from 'react-native';

const All = ({
  newtext1,
  newtext2,
  bghome2,
  title,
  heart1,
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
  plus,
  iconimg1,
  pressI,
}) => {
  const Data = [
    {
      id: 1,
      bg1: Images.BackGround.black,
      bg12: Images.BackGround.greenbg,
      heart1: Images.Icons.heart1,
      name: 'TONGLEN',
      title: 'title',
      iconimg2: iconimg2,
    },
    {
      id: 2,
      bg1: Images.BackGround.black,
      bg12: Images.BackGround.greenbg,
      heart1: Images.Icons.pinki,
      name: 'TONGLEN',
      title: 'title',
      iconimg2: iconimg2,
    },
    {
      id: 3,
      bg1: Images.BackGround.black,
      bg12: Images.BackGround.greenbg,
      heart1: Images.Icons.heart1,
      name: 'TONGLEN',
      title: 'title',
      iconimg2: iconimg2,
    },
  ];
  return (
    <>
      <View>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={[styles.txtA, {color: color1}]}>{textA}</Text>
          <TouchableOpacity onPress={onPressALL} style={{}}>
            <Text style={styles.txtB}>{textB}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.box2}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={Data}
          renderItem={({item}) => {
            return (
              <>
                <View style={{}}>
                  <View
                    style={{
                      alignSelf: 'center',
                      width: '100%',
                      flexDirection: 'row',
                      // backgroundColor: 'yellow',
                      // margin: 5,
                    }}>
                    <View style={{width: 172, height: 229}}>
                      <ImageBackground
                        resizeMode="cover"
                        source={bghome2}
                        style={{
                          width: '100%',
                          height: '100%',
                          borderRadius: 10,
                        }}>
                        <TouchableOpacity
                          onPress={pressI}
                          style={{
                            // backgroundColor: 'pink',
                            top: 28,
                            right: 30,
                            position: 'absolute',
                            height: 33,
                            width: 33,
                            alignSelf: 'flex-end',
                            // backgroundColor: 'yellow',
                          }}>
                          <Image
                            source={heart1}
                            resizeMode="contain"
                            style={{
                              width: '100%',
                              height: '100%',
                              marginLeft: -10,
                            }}
                          />
                          <Icon
                            name={plus}
                            color={'#fefefe'}
                            size={25}
                            style={{fontWeight: 'bold', position: 'absolute'}}
                          />
                        </TouchableOpacity>
                        <View
                          style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'absolute',
                            top: 100,
                            left: 60,
                          }}>
                          {iconimg && (
                            <View
                              style={{
                                width: 30,
                                height: 25,
                                // backgroundColor: 'yellow',
                              }}>
                              <Image
                                source={item.iconimg2}
                                resizeMode="contain"
                                style={{
                                  width: '100%',
                                  height: '100%',
                                }}
                              />
                            </View>
                          )}
                          {iconimg1 && (
                            <View
                              style={{
                                width: 30,
                                height: 25,
                                // backgroundColor: 'yellow',
                              }}>
                              <Image
                                source={iconimg1}
                                resizeMode="contain"
                                style={{
                                  width: '100%',
                                  height: '100%',
                                }}
                              />
                            </View>
                          )}
                          <Text
                            style={{
                              textAlign: 'center',
                              fontSize: 26,
                              marginVertical: 5,
                            }}>
                            {title}
                          </Text>
                          <View
                            style={{
                              width: 40,
                              height: 15,
                              borderRadius: 10,
                              justifyContent: 'center',
                              backgroundColor: '#CD258D',
                              alignItems: 'center',
                            }}>
                            <Text
                              style={{
                                color: '#fff',
                                fontWeight: 'bold',
                                fontSize: 10,
                              }}>
                              5Min
                            </Text>
                          </View>
                        </View>
                      </ImageBackground>
                    </View>
                  </View>
                </View>
              </>
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
    // backgroundColor:'yellow',
    marginTop: 10,
  },
  txtA: {
    color: '#1C5C2E',
    fontWeight: '500',
    fontSize: 18,
  },
  txtB: {
    color: '#1C5C2E',
    fontWeight: '500',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});
