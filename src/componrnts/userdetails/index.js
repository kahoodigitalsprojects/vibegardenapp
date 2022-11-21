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
import Images from '../../constants';

const Userdetails = ({
  Img1,
  text,
  time,
  Date,
  name,
  bgcolor,
  elevation,
  databox,
  databox1,
  databox2,
}) => {
  return (
    <>
      <View style={{}}>
        {databox1 && (
          <View style={styles.boxouter}>
            <View style={{width: '95%', alignSelf: 'center'}}>
              <View
                style={{
                  marginVertical: 10,
                  justifyContent: 'space-between',
                  width: '100%',
                  borderRadius: 30,
                  height: 86,
                  backgroundColor: bgcolor,
                  elevation: elevation,
                  flexDirection: 'row',
                  shadowColor: '#000',
                }}>
                <View style={styles.img}>
                  <Image
                    source={Img1}
                    style={{width: 60, height: 60, borderRadius: 100}}
                  />
                </View>
                <View style={{width: '70%'}}>
                  <View
                    style={{
                      width: '100%',
                      justifyContent: 'space-between',
                      flexDirection: 'row',
                      shadowColor: '#000',
                    }}>
                    <Text style={styles.text1}>{name}</Text>
                    <Text
                      style={{
                        fontSize: 12,
                        color: '#000',
                        fontWeight: 'bold',
                      }}>
                      {time}
                    </Text>
                  </View>

                  <Text
                    style={[
                      styles.text1,
                      {
                        fontWeight: '400',
                        fontSize: 14,
                        marginVertical: 5,
                      },
                    ]}>
                    {text}
                  </Text>
                </View>
                <View style={{marginTop: 8}}>
                  <Text
                    style={{
                      fontSize: 12,
                      color: '#000',
                      marginTop: 30,
                      fontWeight: 'bold',
                    }}>
                    {Date}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        )}
      </View>

      {databox2 && (
        <View style={{backgroundColor: '#BCCFC1', borderRadius: 12}}>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
            }}>
            <View style={{width: 44, height: 45, margin: 15}}>
              <Image
                source={Images.Imgs.bear}
                resizeMode="contain"
                style={{width: '100%', height: '100%'}}
              />
            </View>
            <View>
              <Text style={{fontSize: 12, marginTop: 16}}>
                Lorem ipsum dolor sit amet, consetetur {'\n'} sadipscing elitr,
                sed diam nonumy eirmod {'\n'} tepor
              </Text>
              <Text
                style={{
                  textAlign: 'right',
                  marginVertical: 5,
                  color: '#1C5C2E',
                  textDecorationLine: 'underline',
                }}>
                Link
              </Text>
            </View>
          </View>
        </View>
      )}
    </>
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
    marginTop: 14,
    marginLeft: 5,
    // marginRight: 10,
  },

  txtview: {
    marginTop: 20,
    marginRight: 15,
  },
  text1: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#000',
  },
});
export {Userdetails};
