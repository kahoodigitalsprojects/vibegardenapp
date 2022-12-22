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
} from 'react-native';

import {Header, Percentage, Pinkbtn} from '../../../componrnts';

import Icon from 'react-native-vector-icons/AntDesign';
import Images from '../../../constants';
import LinearGradient from 'react-native-linear-gradient';

const ChuchuasDetails = ({route, navigation}) => {
  const {Image1, Image2, Image3, Image4, newtext, Image5, Image6, Heading} =
    route.params;

  const [data1, setdata1] = useState();

  const Data = [
    {
      image2: Image1,
      text: '0-25%',
    },
    {
      image2: Image2,
      text: '25-50%',
    },
    {
      image2: Image3,
      text: '50-75%',
    },
    {
      image2: Image5,
      text: '75-100%',
    },
  ];
  return (
    <>
      <SafeAreaView style={styles.main}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <StatusBar animated={true} backgroundColor="#000" />

          <View style={{width: '100%', alignSelf: 'center'}}>
            <View style={{width: '90%', alignSelf: 'center'}}>
              <Header
                header2
                iconName="arrowleft"
                fontSize={25}
                color="#1C5C2E"
                OnPress={() => {
                  navigation.navigate('Bluelotus', {
                    Heading: Heading,
                    newtext:
                      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
                    Image1: Image6,
                  });
                }}
              />
            </View>

            <View style={{width: '90%', alignSelf: 'center'}}>
              <Text style={styles.txt}>
                Finally How Bloom is Your Vibe Today?
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  color: '#000',
                  letterSpacing: 0.2,
                  fontWeight: '6',

                  fontFamily: 'BrandonGrotesque-Regular',
                }}>
                {newtext}
              </Text>
            </View>

            <View
              style={{
                marginTop: 45,

                alignItems: 'center',
              }}>
              <FlatList
                showsHorizontalScrollIndicator={false}
                data={Data}
                horizontal={true}
                renderItem={({item, index}) => {
                  return (
                    <>
                      <View
                        style={{
                          margin: 4,
                          marginTop: 10,
                          justifyContent: 'center',
                          alignItems: 'center',
                          alignSelf: 'center',
                        }}>
                        <TouchableOpacity
                          onPress={() =>
                            index === true ? '' : setdata1(index)
                          }
                          style={{
                            width: '100%',
                            display: 'flex',
                            flexGrow: 1,
                            width: 76,
                            height: 78,
                            borderRadius: 100,
                            justifyContent: 'center',
                            alignItems: 'center',
                            alignSelf: 'center',
                            marginVertical: 10,
                          }}>
                          <>
                            {data1 === index ? (
                              <LinearGradient
                                colors={['#ED535E', '#CD258D']}
                                style={{
                                  width: 80,
                                  height: 80,
                                  borderRadius: 100,
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                  alignSelf: 'center',
                                  backgroundColor:
                                    data1 === index ? '#CD258D' : '',
                                  opacity: 0.8,
                                  elevation: data1 === index ? 0 : 5,
                                }}>
                                <View style={{}}>
                                  <Icon
                                    name="check"
                                    size={39}
                                    color="#fff"
                                    style={{}}
                                  />
                                </View>
                              </LinearGradient>
                            ) : (
                              <View
                                style={{
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                  alignSelf: 'center',
                                }}>
                                <Image
                                  source={item.image2}
                                  style={[styles.img]}
                                  resizeMode="contain"
                                />
                              </View>
                            )}
                            <Text
                              style={{
                                textAlign: 'center',
                                fontFamily: 'BrandonGrotesque-Regular',
                                color: data1 === index ? '#fff' : '#000',
                              }}>
                              {item.title}
                            </Text>
                          </>
                        </TouchableOpacity>

                        <View style={{marginVertical: 5, margin: 10}}>
                          <Text
                            style={{
                              textAlign: 'center',
                              fontSize: 12,
                              color: '#1C5C2E',
                              fontFamily: 'BrandonGrotesque-Regular',
                            }}>
                            {item.text}
                          </Text>
                        </View>
                      </View>
                    </>
                  );
                }}
              />
            </View>
            <View style={{width: '90%', alignSelf: 'center'}}>
              <Percentage
                simpletext={true}
                simpletext1="Dial It In If You Have Any Wish:"
                btn={true}
                icons={true}
                Image1={Image1}
                btntxt="Continue"
                width={'50%'}
                onPress={() =>
                  navigation.navigate('MeetScreen2', {
                    Image1: Image1,
                    newtext:
                      'We Have Tools to Support Your Unique Journey to full bloom the world could sure use more of your light?',
                  })
                }
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
export default ChuchuasDetails;

const styles = StyleSheet.create({
  main: {flex: 1, paddingTop: 15},

  img: {
    width: 80,
    height: 80,
    borderRadius: 100,
    alignSelf: 'center',
  },
  txt: {
    textAlign: 'left',
    fontSize: 25,
    color: '#1C5C2E',
    fontWeight: '600',
    marginVertical: 20,
    fontFamily: 'BrandonGrotesque-Medium',
  },

  txt1: {
    textAlign: 'left',
    fontSize: 18,
    color: '#030303',
  },
});
