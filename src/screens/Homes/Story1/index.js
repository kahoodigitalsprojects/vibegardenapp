import React, {useState} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Swiper from 'react-native-swiper';
import {Header, Pinkbtn, StoryData} from '../../../componrnts';

import Images from '../../../constants';

const Story1 = props => {
  const [state, setState] = useState(false);

  const handleClick = () => {};
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <StatusBar animated={true} backgroundColor="#000" />
        <View>
          <View>
            <Swiper
              autoplay={false}
              // showsButtons={true}
              buttonWrapperStyle={{}}
              // showsButtons
              style={styles.wrapper}
              activeDotColor={'#CD258D'}
              dotStyle={{
                width: 15,
                height: 15,
                borderRadius: 15,
                backgroundColor: '#eee',
              }}
              activeDotStyle={{
                width: 15,
                height: 15,
                borderRadius: 15,
              }}>
              <SafeAreaView style={styles.slide1}>
                <ImageBackground
                  source={Images.BackGround.Bg1}
                  resizeMode="cover"
                  style={styles.mainbg}>
                  <View
                    style={{
                      marginTop: 40,
                      // marginVertical: 20,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image source={Images.Logos.logo1} style={{}} />
                  </View>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      // marginVertical: 40,
                    }}>
                    <Text style={styles.headtext}>
                      <Text style={{fontWeight: 'bold'}}>VIBE</Text>GARDEN
                    </Text>
                    <Text
                      style={{
                        color: '#fff',
                        fontSize: 16,
                        textAlign: 'center',
                      }}>
                      You're In full bloom
                    </Text>
                    <Text
                      style={{
                        color: '#fff',
                        fontSize: 20,
                        textAlign: 'center',
                        marginVertical: 5,
                      }}>
                      Tools, tips & magic for growing your communication to you!
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '80%',
                      marginTop: 130,
                      alignSelf: 'center',
                    }}>
                    <View style={{}}>
                      <Pinkbtn
                        width={'80%'}
                        btntxt=" Get Started"
                        onPress={() =>
                          props.navigation.replace('Auth', {
                            screen: 'login',
                          })
                        }
                      />
                    </View>
                    <TouchableOpacity
                      onPress={() => props.navigation.navigate('namescreen')}
                      style={styles.btn2}>
                      <Text style={{fontWeight: 'bold', color: '#fff'}}>
                        Login In
                      </Text>
                    </TouchableOpacity>
                  </View>
                </ImageBackground>
              </SafeAreaView>
              <View style={styles.slide2}>
                <View style={styles.img}>
                  <Image
                    source={Images.BackGround.storybg1}
                    resizeMode="contain"
                    style={{width: '100%', height: '80%'}}
                  />
                </View>
                <View>
                  <View>
                    <View>
                      <View
                        style={{
                          width: '90%',
                          alignSelf: 'center',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <Text
                          style={[
                            styles.txt,
                            {width: '80%', textAlign: 'center', lineHeight: 26},
                          ]}>
                          AND. Embodying our fullness down here can be tricky!
                          So with VibeBloom, we quest together. Kindling one
                          another, as we employ joyful, powerful tools for
                          coming home to ourselves and being all that we truly,
                          uniquely are.
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    backgroundColor: '#ffff',
                    marginVertical: 20,
                    position: 'absolute',
                    alignSelf: 'center',
                    bottom: -20,
                  }}>
                  <Text style={{alignSelf: 'center'}}>
                    Swipe To See How It Works
                  </Text>
                </View>
              </View>
              <View style={styles.slide3}>
                <View style={styles.img}>
                  <Image
                    source={Images.BackGround.storybg2}
                    resizeMode="contain"
                    style={{width: '100%', height: '80%'}}
                  />
                </View>
                <View>
                  <View>
                    <View
                      style={{
                        width: '90%',
                        alignSelf: 'center',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Text
                        style={[
                          styles.txt,
                          {width: '80%', textAlign: 'center', lineHeight: 26},
                        ]}>
                        AND. Embodying our fullness down here can be tricky! So
                        with VibeBloom, we quest together. Kindling one another,
                        as we employ joyful, powerful tools for coming home to
                        ourselves and being all that we truly, uniquely are.
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    backgroundColor: '#ffff',
                    marginVertical: 20,
                    position: 'absolute',
                    alignSelf: 'center',
                    bottom: -20,
                  }}>
                  <Text style={{alignSelf: 'center'}}>
                    Swipe To See How It Works
                  </Text>
                </View>
              </View>
              <View style={styles.slide4}>
                <View style={styles.img}>
                  <Image
                    source={Images.BackGround.storybg3}
                    resizeMode="contain"
                    style={{width: '100%', height: '80%'}}
                  />
                </View>
                <View>
                  <View
                    style={{
                      width: '90%',
                      alignSelf: 'center',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={[
                        styles.txt,
                        {width: '80%', textAlign: 'center', lineHeight: 26},
                      ]}>
                      AND. Embodying our fullness down here can be tricky! So
                      with VibeBloom, we quest together. Kindling one another,
                      as we employ joyful, powerful tools for coming home to
                      ourselves and being all that we truly, uniquely are.
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    backgroundColor: '#ffff',
                    marginVertical: 20,
                    position: 'absolute',
                    alignSelf: 'center',
                    bottom: -20,
                  }}>
                  <Text style={{alignSelf: 'center'}}>
                    Swipe To See How It Works
                  </Text>
                </View>
              </View>
              <View style={styles.slide5}>
                <View style={[styles.img]}>
                  <Image
                    source={Images.BackGround.story4}
                    resizeMode="contain"
                    style={{width: '100%', height: '100%'}}
                  />
                </View>
                <View>
                  <View
                    style={{
                      width: '90%',
                      alignSelf: 'center',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={[
                        styles.txt,
                        {width: '80%', textAlign: 'center', lineHeight: 26},
                      ]}>
                      AND. Embodying our fullness down here can be tricky! So
                      with VibeBloom, we quest together. Kindling one another,
                      as we employ joyful, powerful tools for coming home to
                      ourselves and being all that we truly, uniquely are.
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    backgroundColor: '#ffff',
                    marginVertical: 20,
                    position: 'absolute',
                    alignSelf: 'center',
                    bottom: -20,
                  }}>
                  <Text style={{alignSelf: 'center', textAlign: 'center'}}>
                    Swipe To See How It Works
                  </Text>
                </View>
              </View>
              <View style={styles.slide6}>
                <View style={styles.img}>
                  <Image
                    source={Images.BackGround.story5}
                    resizeMode="contain"
                    style={{width: '100%', height: '100%'}}
                  />
                </View>
                <View>
                  <View
                    style={{
                      width: '90%',
                      alignSelf: 'center',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={[
                        styles.txt,
                        {width: '80%', textAlign: 'center', lineHeight: 26},
                      ]}>
                      AND. Embodying our fullness down here can be tricky! So
                      with VibeBloom, we quest together. Kindling one another,
                      as we employ joyful, powerful tools for coming home to
                      ourselves and being all that we truly, uniquely are.
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    backgroundColor: '#ffff',
                    marginVertical: 20,
                    position: 'absolute',
                    alignSelf: 'center',
                    bottom: -20,
                  }}>
                  <Text style={{alignSelf: 'center'}}>
                    Swipe To See How It Works
                  </Text>
                </View>
              </View>
            </Swiper>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  slide1: {
    flex: 1,
    backgroundColor: '#ffffff',

    // backgroundColor: '#ffffff',
  },
  slide2: {
    flex: 1,

    backgroundColor: '#ffffff',
  },
  slide3: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  slide4: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  slide5: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  slide6: {
    flex: 1,
  },
  text: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  img: {alignSelf: 'center', width: 350, height: 430, marginVertical: 10},
  txt: {
    textAlign: 'center',
    fontSize: 14,
    color: '#1C5C2E',
    letterSpacing: 0.5,
  },
  main: {
    flex: 1,
  },
  mainbg: {
    width: '100%',
    height: '100%',
    // position: 'absolute',
  },
  headtext: {
    fontWeight: '300',
    fontSize: 32,
    color: '#fff',
    marginVertical: 15,
  },
  btn1: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    height: 44,
    borderRadius: 20,
    backgroundColor: '#FF4053',
  },
  btn2: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: 55,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#fff',
    marginBottom: 10,
  },
});

AppRegistry.registerComponent('myproject', () => SwiperComponent);
export default Story1;
