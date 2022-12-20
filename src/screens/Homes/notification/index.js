import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';
import {Header} from '../../../componrnts';
import Images from '../../../constants';

const Notification = props => {
  const data = [
    {
      Img1: Images.BackGround.Bg1,
      name: 'Alexa Martin',
      text: ' Lorem ipsum dolor sit amet.',
      time: '0.2.00 AM',
      Date: '11/12/21',
    },
    {
      Img1: Images.BackGround.Bg1,
      name: 'Fiona Collin',
      text: ' Lorem ipsum dolor sit amet.',
      time: '0.2.00 AM',
      Date: '11/12/21',
    },
    {
      Img1: Images.BackGround.Bg1,
      name: 'Niki Martin',
      text: ' Lorem ipsum dolor sit amet.',
      time: '0.2.00 AM',
      Date: '11/12/21',
    },
    {
      Img1: Images.BackGround.Bg1,
      name: 'Martha jose',
      text: ' Lorem ipsum dolor sit amet.',
      time: '0.2.00 AM',
      Date: '11/12/21',
    },
    {
      Img1: Images.BackGround.Bg1,
      name: 'Ziouhan Change',
      text: ' Lorem ipsum dolor sit amet.',
      time: '0.2.00 AM',
      Date: '11/12/21',
    },
    {
      Img1: Images.BackGround.Bg1,
      name: 'Ziouhan Change',
      text: ' Lorem ipsum dolor sit amet.',
      time: '0.2.00 AM',
      Date: '11/12/21',
    },
  ];
  return (
    <View style={styles.main}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <StatusBar
          animated={true}
          backgroundColor="#000"
          // barStyle={statusBarStyle}
          // showHideTransition={statusBarTransition}
          // hidden={hidden}
        />
        <View
          style={{
            marginVertical: 10,
            // marginTop: 20,
            width: '95%',
            alignSelf: 'center',
          }}>
          <Header
            fontSize={25}
            color=""
            iconName="closesquareo"
            header2
            headertext="Notification"
            OnPress={() => props.navigation.goBack('')}
          />

          <View
            style={{
              width: '95%',
              marginVertical: 15,
              justifyContent: 'flex-end',
            }}>
            <Text
              style={{
                color: '#F54F84',
                textAlign: 'right',
                fontWeight: 'bold',
                fontFamily: 'Brandon_reg',
              }}>
              Clear All
            </Text>
          </View>
          <View
            style={{
              marginVertical: 10,
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <View
              style={{
                backgroundColor: 'grey',
                width: '28%',
                height: 1,
                marginTop: 15,
              }}></View>
            <View style={{}}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: '#000',
                  fontFamily: 'Brandon_reg',
                }}>
                Recent Notification
              </Text>
            </View>

            <View
              style={{
                backgroundColor: 'grey',
                width: '28%',
                height: 1,
                marginTop: 15,
              }}></View>
          </View>
          <View style={styles.boxouter}>
            <FlatList
              data={data}
              renderItem={({item}) => {
                return (
                  <View style={{width: '90%', alignSelf: 'center', margin: 3}}>
                    <View style={styles.box}>
                      <View style={{width: '75%', flexDirection: 'row'}}>
                        <View style={styles.img}>
                          <Image
                            source={item.Img1}
                            style={{
                              width: 60,
                              height: 60,
                              borderRadius: 100,
                              marginLeft: 10,
                            }}
                          />
                        </View>
                        <View style={styles.txtview}>
                          <Text
                            style={[
                              styles.text1,
                              {
                                marginLeft: 10,
                                fontFamily: 'Brandon_reg',
                              },
                            ]}>
                            {item.name}
                          </Text>
                          <Text
                            style={[
                              styles.text1,
                              {
                                fontWeight: '400',
                                fontSize: 14,
                                marginVertical: 5,
                                marginLeft: 6,
                                fontFamily: 'Brandon_reg',
                              },
                            ]}>
                            {item.text}
                          </Text>
                        </View>
                      </View>
                      <View style={{marginTop: 10, marginRight: 24}}>
                        <Text
                          style={{
                            fontSize: 12,
                            color: '#000',
                            fontWeight: 'bold',
                            fontFamily: 'Brandon_reg',
                          }}>
                          {item.time}
                        </Text>
                        <Text
                          style={{
                            fontSize: 12,
                            color: '#000',
                            marginTop: 35,
                            fontWeight: 'bold',
                            fontFamily: 'Brandon_reg',
                          }}>
                          {item.Date}
                        </Text>
                      </View>
                    </View>
                  </View>
                );
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // backgroundColor: 'pink',
  },
  box: {
    marginVertical: 10,
    justifyContent: 'space-between',
    width: '100%',
    borderRadius: 30,
    height: 86,
    // borderWidth: 1,
    backgroundColor: '#fff',
    elevation: 5,
    // borderColor: 'grey',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    // elevation: 1,
  },

  boxouter: {},
  img: {
    marginTop: 10,
    marginLeft: 5,
    // marginRight: 10,
  },

  txtview: {
    marginTop: 20,
    marginRight: 5,
  },
  text1: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'Brandon_reg',
  },
});
export default Notification;
