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
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/AntDesign';
import {SeeAll} from '../SeeAll';

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
  circle,
  iconimg2,
  plus,
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
      iconimg2: Images.Icons.Pcircle,
    },
    {
      id: 2,
      bg1: Images.BackGround.black,
      bg12: Images.BackGround.greenbg,
      heart1: Images.Icons.heart1,
      name: 'TONGLEN',
      title: 'title',
    },
    {
      id: 3,
      bg1: Images.BackGround.black,
      bg12: Images.BackGround.greenbg,
      heart1: Images.Icons.heart1,
      name: 'TONGLEN',
      title: 'title',
      iconimg2: Images.Icons.sun,
    },
    {
      id: 4,
      bg1: Images.BackGround.black,
      bg12: Images.BackGround.greenbg,
      heart1: Images.Icons.heart1,
      name: 'TONGLEN',
      title: 'title',
    },
    {
      id: 4,
      bg1: Images.BackGround.black,
      bg12: Images.BackGround.greenbg,
      heart1: Images.Icons.heart1,
      name: 'TONGLEN',
      title: 'title',
    },
  ];
  return (
    <>
      <View>
        <View
          style={{
            // backgroundColor: 'pink',
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.txtA}>{textA}</Text>
          <TouchableOpacity
            onPress={onPress}
            style={{borderBottomWidth: 1, borderColor: '#1C5C2E'}}>
            <Text style={styles.txtB}>{textB}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.box2}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
          {Data.map((item, index) => {
            return (
              <View style={{}}>
                <View
                  style={{
                    alignSelf: 'center',
                    width: '100%',
                    flexDirection: 'row',
                    // backgroundColor:'yellow'
                  }}>
                  <View style={{width: 175, height: 299}}>
                    <Image
                      source={bghome2}
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: 10,
                      }}
                    />

                    <TouchableOpacity
                      onPress={pressI}
                      style={{
                        // backgroundColor: 'pink',
                        top: 35,
                        right: 40,
                        position: 'absolute',
                        height: 33,
                        width: 33,
                        alignSelf: 'flex-end',

                        // backgroundColor: 'yellow',
                      }}>
                      <Image
                        source={heart1}
                        resizeMode="contain"
                        style={{width: '100%', height: '100%'}}
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
                            source={Images.Icons.prectangel}
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
                          marginVertical: 10,
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
                  </View>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </>
  );
};

export default All;

const styles = StyleSheet.create({
  box2: {
    // backgroundColor:'yellow'
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
  },
});
