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
} from 'react-native';
import Swiper from 'react-native-swiper';
import {Header, StoryData} from '../../../componrnts';

import Images from '../../../constants';

const Story1 = () => {
  const [state, setState] = useState(0);

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
              buttonWrapperStyle={{
                // marginTop: 250,
                backgroundColor: 'transparent',
                flexDirection: 'row',
                position: 'absolute',
                top: 338,
                left: 0,
                flex: 1,
                paddingVertical: 70,
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 100,
              }}
              style={styles.wrapper}
              activeDotColor={'#CD258D'}
              dotStyle={{width: 15, height: 15, borderRadius: 15}}
              activeDotStyle={{width: 15, height: 15, borderRadius: 15}}>
              <View style={styles.slide1}>
                <View style={styles.img}>
                  <Image
                    source={Images.BackGround.storybg1}
                    resizeMode="contain"
                    style={{width: '100%', height: '80%'}}
                  />
                </View>
                <View>
                  <View style={{width: '90%', alignSelf: 'center'}}>
                    <Text style={[styles.txt]}>
                      AND. Embodying our fullness down here can be tricky! So
                      with VibeBloom, we quest together. Kindling one another,
                      as we employ joyful, powerful tools for coming home to
                      ourselves and being all that we truly, uniquely are.
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.slide2}>
                <View style={styles.img}>
                  <Image
                    source={Images.BackGround.storybg2}
                    resizeMode="contain"
                    style={{width: '100%', height: '80%'}}
                  />
                </View>
                <View>
                  <View style={{width: '90%', alignSelf: 'center'}}>
                    <Text style={[styles.txt]}>
                      AND. Embodying our fullness down here can be tricky! So
                      with VibeBloom, we quest together. Kindling one another,
                      as we employ joyful, powerful tools for coming home to
                      ourselves and being all that we truly, uniquely are.
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.slide3}>
                <View style={styles.img}>
                  <Image
                    source={Images.BackGround.storybg3}
                    resizeMode="contain"
                    style={{width: '100%', height: '80%'}}
                  />
                </View>
                <View>
                  <View style={{width: '90%', alignSelf: 'center'}}>
                    <Text style={[styles.txt]}>
                      AND. Embodying our fullness down here can be tricky! So
                      with VibeBloom, we quest together. Kindling one another,
                      as we employ joyful, powerful tools for coming home to
                      ourselves and being all that we truly, uniquely are.
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.slide4}>
                <View style={styles.img}>
                  <Image
                    source={Images.BackGround.story4}
                    resizeMode="contain"
                    style={{width: '100%', height: '80%'}}
                  />
                </View>
                <View>
                  <View style={{width: '90%', alignSelf: 'center'}}>
                    <Text style={[styles.txt]}>
                      AND. Embodying our fullness down here can be tricky! So
                      with VibeBloom, we quest together. Kindling one another,
                      as we employ joyful, powerful tools for coming home to
                      ourselves and being all that we truly, uniquely are.
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.slide5}>
                <View style={styles.img}>
                  <Image
                    source={Images.BackGround.story5}
                    resizeMode="contain"
                    style={{width: '100%', height: '80%'}}
                  />
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => prop.navigation.navigate('Welcome')}
                    style={{width: '90%', alignSelf: 'center'}}>
                    <Text style={[styles.txt]}>
                      AND. Embodying our fullness down here can be tricky! So
                      with VibeBloom, we quest together. Kindling one another,
                      as we employ joyful, powerful tools for coming home to
                      ourselves and being all that we truly, uniquely are.
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              {state === true ? '' : handleClick}
            </Swiper>
            <View style={{backgroundColor: '#ffff', marginVertical: 10}}>
              <Text style={{alignSelf: 'center'}}>
                Swipe To See How It Works
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  slide4: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  slide5: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  img: {alignSelf: 'center', width: '100%', height: 360},
  txt: {
    textAlign: 'center',
    fontSize: 14,
    color: '#1C5C2E',
    letterSpacing: 0.5,
  },
});

AppRegistry.registerComponent('myproject', () => SwiperComponent);
export default Story1;
