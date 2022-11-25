import React from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Header, Percentage, Pinkbtn} from '../../../componrnts';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Images from '../../../constants';

const Me = props => {
  const data1 = [
    {
      img1: Images.Icons.gpluse,
      text1: 'Tools to try',
      onPress: () => {
        props.navigation.navigate('Homes', {
          screen: 'FressBlooms',
        });
      },
    },
    {
      img1: Images.Icons.arrow,
      text1: 'Recent Content',
      onPress: () => {
        props.navigation.navigate('Homes', {
          screen: 'FressBlooms',
        });
      },
    },
    {
      img1: Images.Icons.gheart,
      text1: 'Favorites',
      onPress: () => {
        props.navigation.navigate('Homes', {
          screen: 'FressBlooms',
        });
      },
    },
    {
      img1: Images.Icons.star,
      text1: 'Top Tools',
      onPress: () => {
        props.navigation.navigate('Homes', {
          screen: 'FressBlooms',
        });
      },
    },
    {
      img1: Images.Icons.spiral,
      text1: 'Your Resonance Finder Result',
      onPress: () => {
        props.navigation.navigate('Homes', {
          screen: 'Result',
        });
      },
    },
  ];
  return (
    <SafeAreaView style={styles.main}>
      <StatusBar animated={true} backgroundColor="#000" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            marginTop: 10,
            // paddingVertical: 20,
            // position: 'absolute',
            // top: 8,
            height: 60,
          }}>
     
          <Header
            img1
            toggle
            search1="search1"
            homeheader={true}
            search={() => {
              props.navigation.navigate('Homes', {screen: 'Search'});
            }}
            OnPress={() =>
              props.navigation.navigate('Homes', {screen: 'notification'})
            }
            OnPress1={() =>
              props.navigation.navigate('Homes', {screen: 'settings'})
            }
          />
        </View>
        <View style={styles.Box1}>
          <View style={{width: '90%', alignSelf: 'center'}}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 28,
                fontWeight: '600',
                color: '#000000',
              }}>
              Erin
            </Text>
            <View style={styles.imgb}>
              <Image
                source={Images.BackGround.croped}
                resizeMode="cover"
                style={styles.cropimg}
              />
            </View>
            <View style={styles.wbox}>
              <Percentage
                margin1={10}
                text1="Current Bloom:"
                Image1={Images.Imgs.lotus1}
                icons={true}
              />
            </View>
            <View style={styles.data}>
              <Text
                style={{
                  color: '#000',
                  fontSize: 20,
                  fontWeight: '500',
                  marginVertical: 10,
                }}>
                Library:
              </Text>
              <FlatList
                data={data1}
                renderItem={({item}) => {
                  return (
                    <>
                      <TouchableOpacity
                        onPress={item.onPress}
                        style={{flexDirection: 'row', marginVertical: 10}}>
                        <Image source={item.img1} />
                        <Text style={{marginLeft: 25}}>{item.text1}</Text>
                      </TouchableOpacity>
                    </>
                  );
                }}
              />
              <View style={{marginTop: 10}}>
                <Pinkbtn
                  onPress={() => {
                    props.navigation.navigate('Homes', {screen: 'BloomsCheck'});
                  }}
                  width={'60%'}
                  btntxt="Update Current Blooms"
                />
              </View>
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
  },
  Box1: {marginTop: 10},
  centerbox: {},
  data: {
    // position: 'relative',
  },
  imgb: {
    width: 330,
    height: 198,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  cropimg: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  box1: {
    width: '90%',
    alignSelf: 'center',
  },
});

export default Me;
