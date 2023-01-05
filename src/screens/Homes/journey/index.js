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
import Icon from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import {Pinkbtn} from '../../../componrnts';
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

          <View
            style={{
              // backgroundColor: 'yellow',
              width: '90%',
              alignSelf: 'center',
              height: '100%',
            }}>
            <View
              style={
                {
                  // backgroundColor: 'red',
                  // width: '90%',
                  // alignSelf: 'center',
                }
              }>
              <Text style={styles.txt}>
                Which of these journey resonates must?
              </Text>
            </View>
            <View style={{}}>
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
                                  <LinearGradient
                                    colors={['#ED535E', '#CD258D']}
                                    style={{
                                      width: 100,
                                      height: 100,
                                      borderRadius: 100,
                                      justifyContent: 'center',
                                      alignItems: 'center',
                                      alignSelf: 'center',
                                      backgroundColor:
                                        data1 === index ? '#CD258D' : '',
                                      opacity: 0.9,
                                      elevation: data1 === index ? 0 : 5,
                                    }}>
                                    <Icon
                                      name="check"
                                      size={39}
                                      color="#fff"
                                      style={{}}
                                    />
                                  </LinearGradient>
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
                                fontSize: 18,
                                color: '#000',
                                fontFamily: 'BrandonGrotesque-Medium',
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

            <View style={{}}>
              <Pinkbtn
                shadow={'#00000029'}
                onPress={() => props.navigation.navigate('meet')}
                width={'50%'}
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
  main: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffff',
    justifyContent: 'center',
  },

  img: {
    width: 100,
    height: 100,
    borderRadius: 100,
    alignSelf: 'center',
  },
  txt: {
    textAlign: 'left',
    fontSize: 25,
    color: '#1C5C2E',
    // fontWeight: '600',
    marginVertical: 20,
    fontFamily: 'BrandonGrotesque-Medium',
  },
  txt1: {
    textAlign: 'left',
    fontFamily: 'BrandonGrotesque-Medium',
    fontSize: 18,
    color: '#030303',
  },
});
