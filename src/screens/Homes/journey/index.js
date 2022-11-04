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
import {Icon} from 'react-native-elements';
import {yellow100} from 'react-native-paper/lib/typescript/styles/colors';
import {Header, Pinkbtn} from '../../../componrnts';
import Images from '../../../constants';

const Journey = props => {
  const [data1, setdata1] = useState();
  const Data = [
    {
      img1: Images.Imgs.women,
      text: 'Meet Wolf Women',
    },
    {
      img1: Images.Imgs.bear,
      text: 'Meet Bear Man',
    },
    {
      img1: Images.Imgs.jaguar,
      text: 'Meet Jaguar Being',
    },
    {
      img1: Images.Imgs.bird,
      text: 'Meet Bird Women',
    },
    {
      img1: Images.Imgs.bird,
      text: 'Meet Bird Women',
    },
  ];
  return (
    <>
      <SafeAreaView style={styles.main}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <StatusBar animated={true} backgroundColor="#000" />

          <View style={{width: '90%', marginTop: 20}}>
            {/* <Header header2 /> */}
          </View>
          <View style={{}}>
            <Text style={styles.txt}>
              Which of these journey resonates must?
            </Text>
            <View
              style={
                {
                  // marginTop: 10,
                  // justifyContent: 'center',
                  // alignItems: 'center',
                  // alignSelf: 'center',
                }
              }>
              <FlatList
                data={Data}
                numColumns={2}
                renderItem={({item, index}) => {
                  return (
                    <>
                      <View
                        style={{
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
                            width: 100,
                            height: 100,
                            borderRadius: 100,
                            justifyContent: 'center',
                            alignItems: 'center',
                            alignSelf: 'center',
                          }}>
                          <>
                            {data1 === index ? (
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
                                <Text style={{}}>hello</Text>
                              </View>
                            ) : (
                              <View
                                style={{
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                  alignSelf: 'center',
                                }}>
                                <Image
                                  source={item.img1}
                                  style={[styles.img]}
                                  resizeMode="contain"
                                />
                              </View>
                            )}
                            <Text
                              style={{
                                textAlign: 'center',
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
                              fontSize: 18,
                              color: '#000',
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
  main: {flex: 1, alignItems: 'center', paddingTop: 15},

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
