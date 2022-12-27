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
      title: 'Title',
      plus: 'plus',
    },
    {
      id: 2,
      bg1: Images.BackGround.black,
      bg12: Images.BackGround.Bg2,
      // heart1: Images.Icons.heart1,
      name: 'TONGLEN',
      plus: 'plus',
      title: 'Title',
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
            marginTop={-30}
            marginLeft={-15}
            size={22}
            colorplus={'green'}
            marginTopplus={-2}
            img1
            heartplus
            search1="search1"
            homeheader={true}
            search={
              () => {
                props.navigation.navigate('Homes', {screen: 'Search'});
              }
              // props.navigation.navigate('Homes', { screen: 'Search' })
            }
            heart
            plus
          />
        </View>
        <View style={styles.Box1}>
          <View style={{width: '100%', alignItems: 'center'}}>
            <Text
              style={{
                marginTop: 15,
                fontSize: 28,
                color: '#000000',
                fontFamily: 'BrandonGrotesque-Regular',
              }}>
              Tools
            </Text>
          </View>
          <View style={{width: '90%', alignSelf: 'center', marginTop: 5}}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 20,
                color: '#000000',
                fontFamily: 'BrandonGrotesque-Regular',
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
                props.navigation.navigate('resonance');
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
