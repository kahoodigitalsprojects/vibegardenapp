import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  FlatList,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {act} from 'react-test-renderer';
import {Greenbox, Header, Imgbox, SeeAll, StoryData} from '../../../componrnts';
import All from '../../../componrnts/all';
import Images from '../../../constants';

const Tools = props => {
  const [active, setActive] = useState();
  const [data1, setdata1] = useState(0);
  const Data = [
    {
      id: 1,
      bg1: Images.BackGround.black,
      bg12: Images.BackGround.Bg2,
      // heart1: Images.Icons.heart1,
      name: 'TONGLEN',
      title: 'title',
      plus: 'plus',
    },
    {
      id: 2,
      bg1: Images.BackGround.black,
      bg12: Images.BackGround.Bg2,
      // heart1: Images.Icons.heart1,
      name: 'TONGLEN',
      plus: 'plus',
      title: 'title',
    },
  ];
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <StatusBar animated={true} backgroundColor="#000" />
        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            marginVertical: 5,
            marginTop: 25,
          }}>
          <Header
            marginLeft={-15}
            size={22}
            colorplus={'green'}
            marginTopplus={-2}
            img1
            heartplus
            search1="search1"
            homeheader={true}
            search={() =>
              props.navigation.navigate('Homes', {screen: 'Search'})
            }
            heart
            plus
          />
        </View>
        <View style={styles.Box1}>
          <View style={{width: '100%', alignSelf: 'center'}}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 28,
                fontWeight: '600',
                color: '#000000',
                fontFamily: 'Brandon_reg',
              }}>
              Tools
            </Text>
          </View>
          <View style={{width: '90%', alignSelf: 'center', marginTop: 5}}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 20,
                // fontWeight: '600',
                color: '#000000',
                marginVertical: 10,
                fontFamily: 'Brandon_reg',
              }}>
              Its Blooms Time
            </Text>
          </View>

          <View style={[styles.centerbox, {}]}>
            <Greenbox
              boxtex1={'Buddhism'}
              boxtex2="Quantum Physics"
              boxtex3={'Plants'}
              img1
              onPress={() => {
                props.navigation.navigate('Homes', {screen: 'resonance'});
              }}
            />

            <View
              style={
                {
                  // backgroundColor: 'blue'
                }
              }>
              <View style={[styles.box2, {marginTop: -35}]}>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={item => item.id}
                  data={Data}
                  renderItem={({item}) => {
                    return (
                      <All
                        // pressI={() =>
                        //   navigation.navigate('Homes', {screen: 'Video'})
                        // }
                        textA={item.textA}
                        heart1={item.heart1}
                        textB={item.textB}
                        homebox
                        plus={item.plus}
                        bghome2={item.bg12}
                        title={item.title}
                      />
                    );
                  }}
                />
              </View>
            </View>
            {/* <View style={styles.box1}>
              <FlatList
                keyExtractor={item => item.id}
                data={Data}
                renderItem={({item}) => {
                  return (
                    <All
                      showsHorizontalScrollIndicator={false}
                      // pressI={() =>
                      //   props.navigation.navigate('Homes', { screen: 'Video' })
                      // }
                      heart1={item.heart1}
                      textA={item.textA}
                      textB={item.textB}
                      homebox
                      plus={item.plus}
                      bghome2={item.bg12}
                      title={item.title}
                    />
                  );
                }}
              />
            </View> */}
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
  Box1: {
    width: '90%',
    height: '100%',
    // backgroundColor: 'yellow',
    alignSelf: 'center',
  },
  centerbox: {
    // backgroundColor: '#1C5C2E',
    width: '100%',
    // // height: '100%',
    justifyContent: 'center',
  },
  box1: {
    width: '95%',
    alignSelf: 'center',
    // height: '100%',
    // backgroundColor: 'yellow',
  },
  greenbox: {},
});

export default Tools;
