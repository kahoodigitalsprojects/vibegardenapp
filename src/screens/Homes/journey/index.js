import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {yellow100} from 'react-native-paper/lib/typescript/styles/colors';
import {Header, Pinkbtn} from '../../../componrnts';
import Images from '../../../constants';

const Journey = props => {
  const [data1, setdata1] = useState(0);
  const Data = [
    {
      img1: Images.Imgs.women,
      text: 'Meet Wolf Women',
      st: 0,
    },
    {
      img1: Images.Imgs.bear,
      text: 'Meet Bear Man',
      st: 1,
    },
    {
      img1: Images.Imgs.jaguar,
      text: 'Meet Jaguar Being',
      st: 2,
    },
    {
      img1: Images.Imgs.bird,
      text: 'Meet Bird Women',
      st: 3,
    },
    {
      img1: Images.Logos.dolphin,
      text: 'Meet Bird Women',
      st: 4,
    },
  ];
  return (
    <>
      <SafeAreaView style={styles.main}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{}}>
          <StatusBar animated={true} backgroundColor="#000" />
          <View style={{}}>
            <View style={{width: '90%', alignSelf: 'center', marginTop: 10}}>
              <Text style={styles.txt}>
                Which of these journey resonates must?
              </Text>
              <FlatList
                data={Data}
                numColumns={2}
                renderItem={({item, index}) => {
                  return (
                    <>
                      <View style={{marginVertical: 10, flexGrow: 2}}>
                        <View
                          style={{
                            width: '100%',
                            justifyContent: 'space-around',
                          }}>
                          <TouchableOpacity
                            onPress={() =>
                              index === true ? '' : setdata1(index)
                            }
                            style={{}}>
                            <>
                              {data1 === index ? (
                                <ImageBackground
                                  source={item.img1}
                                  style={[
                                    styles.img,
                                    {marginTop: 0, opacity: 0.7},
                                  ]}
                                  resizeMode="contain">
                                  <View
                                    style={{
                                      width: 100,
                                      height: 100,
                                      borderRadius: 100,
                                      justifyContent: 'center',
                                      alignItems: 'center',
                                      alignSelf: 'center',
                                      backgroundColor:
                                        data1 === index ? '#CD258D' : '',
                                      opacity: 0.8,
                                      elevation: data1 === index ? 0 : 5,
                                    }}>
                                    <Icon
                                      name="check"
                                      size={39}
                                      color="#fff"
                                      style={{}}
                                    />
                                  </View>
                                </ImageBackground>
                              ) : (
                                <View style={{}}>
                                  <Image
                                    source={item.img1}
                                    style={[styles.img]}
                                    resizeMode="contain"
                                  />
                                </View>
                              )}
                            </>
                          </TouchableOpacity>

                          <View style={{}}>
                            <Text
                              style={{
                                textAlign: 'center',
                                margin: 5,
                                fontSize: 16,
                                color: '#000',
                              }}>
                              {item.text}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </>
                  );
                }}
              />
            </View>
            <View style={{marginTop: 10}}>
              <Pinkbtn
                onPress={() =>
                  props.navigation.navigate('Homes', {screen: 'meet'})
                }
                width={'60%'}
                btntxt="Continue"
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
export default Journey;

const styles = StyleSheet.create({
  main: {flex: 1,},

  img: {
    width: 100,
    height: 100,
    borderRadius: 100,
    alignSelf: 'center',
  },
  txt: {
    textAlign: 'left',
    fontSize: 24,
    color: '#1C5C2E',
    fontWeight: '400',
    marginVertical: 20,
  },
  txt1: {
    textAlign: 'left',
    fontSize: 18,
    color: '#030303',
  },
});
