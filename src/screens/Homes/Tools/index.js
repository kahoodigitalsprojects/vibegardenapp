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
import Images from '../../../constants';

const Tools = () => {
  const [active, setActive] = useState();
  const [data1, setdata1] = useState(0);
  const Data = [
    {
      bg1: Images.BackGround.black,
      bg12: Images.BackGround.greenbg,
      name: 'TONGLEN',
      title: 'title',
    },
    {
      bg1: Images.BackGround.black,
      bg12: Images.BackGround.greenbg,
      name: 'TONGLEN',
      title: 'title',
    },
    {
      bg1: Images.BackGround.black,
      bg12: Images.BackGround.greenbg,
      name: 'TONGLEN',
      title: 'title',
    },
    {
      bg1: Images.BackGround.black,
      bg12: Images.BackGround.greenbg,
      name: 'TONGLEN',
      title: 'title',
    },
    {
      bg1: Images.BackGround.black,
      bg12: Images.BackGround.greenbg,
      name: 'TONGLEN',
      title: 'title',
    },
    {
      bg1: Images.BackGround.black,
      bg12: Images.BackGround.greenbg,
      name: 'TONGLEN',
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
            marginTop: 15,
          }}>
          <Header homeheader={true} />
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
              Tools
            </Text>
          </View>
          <View style={{width: '90%', alignSelf: 'center'}}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 20,
                // fontWeight: '600',
                color: '#000000',
                marginVertical: 10,
              }}>
              Its Blooms Time
            </Text>
          </View>

          <View style={styles.centerbox}>
            <Greenbox />
            <View
              style={{
                backgroundColor: 'blue',
              }}>
              <View style={styles.box1}>
                <FlatList
                  numColumns={2}
                  data={Data}
                  renderItem={({item}) => {
                    return (
                      <View
                        style={{
                          alignSelf: 'center',
                          display: 'flex',
                          flexGrow: 1,
                        }}>
                        <Imgbox
                          homebox
                          bghome2={item.bg12}
                          title={item.title}
                        />
                      </View>
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
    marginVertical: 10,
    justifyContent: 'center',
  },
  box1: {
    width: '90%',
    alignSelf: 'center',
    // height: '100%',
    // backgroundColor: 'yellow',
  },
  greenbox: {},
});

export default Tools;
