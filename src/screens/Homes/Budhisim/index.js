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
import {Header, SeeAll, Userdetails} from '../../../componrnts';
import All from '../../../componrnts/all';
import Images from '../../../constants';

const Buddhisim = props => {
  const {Flowersbox, Heading} = props;
  const data = [
    {
      Img1: Images.Imgs.user2,
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.',
      name: 'Michael Grower',
    },
    {
      text1: 'No idea What a Multiverse is',
      texlist: 'Quantum physics',
      Img1: Images.Imgs.user2,
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.',
      name: 'Michael Grower',
    },
    {
      text1: 'SMCA Peepsceen to think so',
      texlist: 'Nature',
      Img1: Images.Imgs.user2,
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.',
      name: 'Michael Grower',
    },
    {
      text1: 'Shall we Question Heap',
      Img1: Images.Imgs.user2,
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.',
      name: 'Michael Grower',
    },
  ];
  const Data = [
    {
      id: 1,
      bg1: Images.BackGround.black,
      bg12: Images.BackGround.greenbg,
      name: 'TONGLEN',
      title: 'title',
      plus: 'plus',
      textA: 'Related Tools',
    },
    {
      id: 2,
      bg1: Images.BackGround.black,
      bg12: Images.BackGround.greenbg,
      heart1: Images.Icons.heart1,
      name: 'TONGLEN',
      title: 'title',
      textA: 'Related Groundwork',
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
          <Header
            color="#1C5C2E"
            fontSize={25}
            iconName="left"
            header2
            headertext="Buddhisim"
            OnPress={() => props.navigation.goBack('')}
          />
        </View>
        <View style={styles.Box1}>
          <View
            style={{
              width: '90%',
              alignSelf: 'center',
              marginTop: 30,
              marginVertical: 10,
            }}>
            <Text
              style={{
                textAlign: 'center',
                lineHeight: 25,
                fontSize: 12,
                fontWeight: '600',
                color: '#000000',
                // marginVertical: 10,
              }}>
              Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
              Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna.
            </Text>
          </View>
          <View style={styles.centerbox}>
            <View style={styles.box1}>
              <View style={{width: '100%', alignSelf: 'center'}}></View>
              <FlatList
                keyExtractor={item => item.id}
                data={Data}
                renderItem={({item}) => {
                  return (
                    <>
                      <SeeAll
                        onPress={() =>
                          props.navigation.navigate('Homes', {
                            screen: 'FressBlooms',
                          })
                        }
                        color1="#000"
                        textA={item.textA}
                      />
                      <All
                        pressI={() =>
                          props.navigation.navigate(
                            'Homes',
                            {screen: 'Video'},
                            {
                              Heading: Heading,
                            },
                          )
                        }
                        homebox
                        heart1={item.heart1}
                        plus={item.plus}
                        bghome2={item.bg12}
                        title={item.title}
                      />
                    </>
                  );
                }}
              />

              <SeeAll
                onPress={() =>
                  props.navigation.navigate('Homes', {
                    screen: 'FressBlooms',
                  })
                }
                color1="#000"
                textA="Teacher Related"
              />
              <View style={{marginVertical: 3}}>
                <View style={{}}>
                  <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={data}
                    renderItem={({item}) => {
                      return (
                        <>
                          <View style={{marginVertical: 10}}>
                            <Userdetails
                              databox2
                              bear={item.Img1}
                              nametext={true}
                              names={'Mark'}
                            />
                          </View>
                        </>
                      );
                    }}
                  />
                </View>
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

export default Buddhisim;
