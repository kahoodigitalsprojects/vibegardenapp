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
        {/*  */}
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={Data}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  backgroundColor: 'red',
                  width: 172,
                  height: 229,
                  borderRadius: 10,
                  marginRight: index == 0 ? 10 : null,
                  marginHorizontal: index == 0 ? null : 10,
                  overflow: 'hidden',
                }}>
                {/* <ImageBackground
                  // resizeMode="cover"
                  source={bghome2}
                  style={{
                    width: '100%',
                    height: '100%',

                    margin: 0,
                  }}></ImageBackground> */}
                <Image
                  source={bghome2}
                  style={{
                    backgroundColor: 'blue',
                    height: '100%',
                    width: '100%',
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
                    <Text>SOME TEXT</Text>
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
    marginVertical: 5,
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
