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
import { color } from 'react-native-elements/dist/helpers';

const QComponents = ({
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
  name,
  name11,
  name2,
  number,
  video,
  video2,
  image1,
  flowwerlist,
  Statement,
  flow,
  direction,
  direction2,
  iconone,
  iconone1,
  icontwo,
  redbtn
}) => {
  const data = [
    { text1: text1, img1: Images.Imgs.R1 },

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
              marginTop: 10,
            }}>
            <Image
              resizeMode="cover"
              style={{
                width: '100%',
                position: 'absolute',
              }}
              source={Images.BackGround.path1}
            />
            <View style={styles.starimgbg}>
              <Image
                source={Images.Icons.playbtn}
                resizeMode="contain"
                style={{ width: '100%', height: '100%' }}
              />
            </View>
            {redbtn && (
              <View style={{ backgroundColor: '#EF3A71', width: 60, height: 60, borderRadius: 12 }}>
                5:00 Min
              </View>
            )}
          </View>
        </View>
      )}
      <View
        style={{
          marginVertical: 10,

          width: '90%',
          alignSelf: 'center',
        }}>
        <View style={{ marginVertical: 2 }}>
          <Text style={styles.text1}>{number}</Text>
          {video && (
            <View style={styles.starbg}>
              <Text style={{ color: '#000', fontSize: 18, fontWeight: '500' }}>
                Resonance Finder Video Here
              </Text>
              <Image
                source={Images.Icons.playbtn}
                resizeMode="contain"
                style={{ width: '60%', height: '60%' }}
              />
            </View>
          )}

          {image1 && (
            <View style={styles.starimgbg}>
              <Image
                source={Images.Imgs.startbg}
                resizeMode="contain"
                style={{ width: '100%', height: '100%' }}
              />
            </View>
          )}

          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.text2}>{direction2}</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={[styles.text2, { color: '#000', fontSize: 18, marginLeft: 5 }]}>{flow}</Text>

              {iconone && (
                <TouchableOpacity onPress={() => { }} style={{ marginTop: 5, marginLeft: 5 }}>
                  <Icon name={name2} size={18} color="#1C5C2E" />
                </TouchableOpacity>
              )}

            </View>
            <View
              style={{
                backgroundColor: 'yewllow',
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={styles.text2}>{direction}</Text>
              <View style={{ flexDirection: 'row' }}>
                {iconone1 && (
                  <TouchableOpacity onPress={() => { }} style={{ marginLeft: 5 }}>
                    <Icon name={name11} size={30} color="#1C5C2E" />
                  </TouchableOpacity>
                )}
                {icontwo && (
                  <TouchableOpacity onPress={() => { }} style={{}}>
                    <Icon name={name2} size={30} color="#EF3A71" />
                  </TouchableOpacity>
                )}</View>
            </View>
          </View>
          <View style={{}}>
            <Text style={[styles.text2, { color: '#000' }]}>{text5}</Text>
          </View>
          <View>
            <Text
              style={[
                styles.text2,
                {
                  color: 'black',
                  fontWeight: '350',
                  fontSize: 16,
                  lineHeight: 26,
                },
              ]}>
              {Statement}
            </Text>
          </View>
          <View style={{ marginVertical: 20 }}>
            <Text style={[styles.text1, { textAlign: 'left' }]}>{text6}</Text>
          </View>
        </View>
      </View>
      {flowwerlist && (
        <View style={styles.container}>
          <FlatList
            horizontal={true}
            data={data}
            renderItem={({ item, index }) => {
              return (
                <>
                  <View style={{ margin: 5 }}>
                    <TouchableOpacity
                      onPress={item.onPress}
                      style={styles.circle}>
                      <Image source={item.img1} />
                    </TouchableOpacity>
                    <View style={{ fontSize: 10, width: 80 }}>
                      <Text
                        style={{
                          margin: 5,
                          fontSize: 18,
                          color: '#000',
                          textAlign: 'center',
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
  },
  text2: {
    fontSize: 20,
    // textAlign: 'center',
    color: '#1C5C2E',
    fontWeight: '500',
  },
  starbg: {
    width: 330,
    height: 200,
    alignSelf: 'center',
    marginVertical: 10,
    backgroundColor: '#00000029',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  starbg2: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  starimgbg: {
    width: 330,
    height: 200,
    alignSelf: 'center',
    marginVertical: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 100,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export { QComponents };
