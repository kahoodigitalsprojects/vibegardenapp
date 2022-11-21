import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  StatusBar,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import {Header, Pinkbtn, QComponents, Userdetails} from '../../../componrnts';
import Icon from 'react-native-vector-icons/FontAwesome';
import Images from '../../../constants';
import MainBox from '../../../componrnts/mainbox';
import All from '../../../componrnts/all';

const Video = props => {
  const Data3 = [{}, {}];
  const data = [
    {
      text1: 'Yeah,no',
      texlist: 'Buddhidum',
      Img1: Images.Imgs.user2,
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.',
      name: 'Michael Grower',
      time: '12/8/22-03:00 PM',
    },
    {
      text1: 'No idea What a Multiverse is',
      texlist: 'Quantum physics',
      Img1: Images.Imgs.user2,
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.',
      name: 'Michael Grower',
      time: '12/8/22-03:00 PM',
    },
    {
      text1: 'SMCA Peepsceen to think so',
      texlist: 'Nature',
      Img1: Images.Imgs.user2,
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.',
      name: 'Michael Grower',
      time: '12/8/22-03:00 PM',
    },
    {
      text1: 'Shall we Question Heap',
      Img1: Images.Imgs.user2,
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.',
      name: 'Michael Grower',
      time: '12/8/22-03:00 PM',
    },
  ];
  const data2 = [
    {texlist: 'Buddhidum'},
    {texlist: 'Quantum physics'},
    {texlist: 'Nature'},
  ];
  const Data2 = [
    {
      bg1: Images.BackGround.black,
      bg12: Images.BackGround.greenbg,
      heart1: Images.Icons.heart1,
      name: 'TONGLEN',
      title: 'title',
      plus: 'plus',
    },
  ];

  return (
    <>
      <SafeAreaView style={styles.main}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <StatusBar animated={true} backgroundColor="#000" />

          <View
            style={{
              marginVertical: 10,
              marginTop: 10,
              // width: '90%',
            }}>
            <View
              style={{
                marginVertical: 10,
                marginTop: 10,
                width: '90%',
                alignSelf: 'center',
              }}>
              <Header
                iconName="closesquareo"
                header2
                headertext="Resonance Finder"
                OnPress={() => props.navigation.goBack('')}
              />
            </View>

            <View style={{}}>
              <QComponents
                //   video={true}

                video2={true}
                direction="Description:"
                icontwo={true}
                name2="heart"
                Statement="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di At vero eos et accusam et justo duo Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di At vero eos et accusam et justo duo.."
              />
            </View>

            <View
              style={{
                width: '95%',
                alignSelf: 'center',
              }}>
              <FlatList
                data={data2}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => {
                  return (
                    <>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignSelf: 'flex-start',
                        }}>
                        <TouchableOpacity
                          onPress={() => {
                            /* 1. Navigate to the Details route with params */
                            navigation.navigate('Search3', {
                              itemId: 86,
                              otherParam1: 'Tools For Light',
                              otherParam2: 'Tools For Shadow',
                              otherParam3: 'Tools For Connections',
                              otherParam4: 'Buddhism',
                            });
                          }}
                          style={styles.topics}>
                          <Text
                            style={{color: '#1C5C2E', fontSize: 12, margin: 3}}>
                            {item.texlist}
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </>
                  );
                }}
              />
              <View style={styles.row}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 14,
                    color: '#1C5C2E',
                    marginTop: 5,
                  }}>
                  Comments
                </Text>
                <View style={styles.line}></View>
              </View>
            </View>
            <View style={{}}>
              <FlatList
                data={data}
                renderItem={({item}) => {
                  return (
                    <>
                      <View>
                        <Userdetails
                          databox1
                          Img1={item.Img1}
                          name={item.name}
                          time={item.time}
                          text={item.text}
                        />
                      </View>
                    </>
                  );
                }}
              />
            </View>
          </View>

          <View
            style={{
              width: '90%',
              alignSelf: 'center',
            }}>
            <View style={styles.row}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 20,
                  color: '#1C5C2E',
                  marginTop: 5,
                }}>
                Related Content:
              </Text>
            </View>
            <View style={styles.box1}>
              <FlatList
                keyExtractor={item => item.id}
                data={Data2}
                renderItem={({item}) => {
                  return (
                    <All
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
            </View>
            <View
              style={{
                alignSelf: 'center',
              }}>
              <Text style={styles.text}>Additional Resonance:</Text>
              <Text style={[styles.text, {textDecorationLine: 'underline'}]}>
                Links
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontSize: 12,
                  marginVertical: 20,
                }}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam.
              </Text>
              <Text style={styles.text}>Suggested Teachers:</Text>
            </View>
          </View>
          <View style={{}}>
            <FlatList
              data={Data3}
              renderItem={({item}) => {
                return (
                  <>
                    <View
                      style={{
                        marginTop: 20,
                        marginVertical: 5,
                        width: '90%',
                        alignSelf: 'center',
                      }}>
                      <Userdetails
                        databox2
                        Img1={item.Img1}
                        name={item.name}
                        time={item.time}
                        text={item.text}
                      />
                    </View>
                  </>
                );
              }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fefe',
  },
  container: {
    width: '100%',
    // height: '100%',
    // justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  text: {
    color: 'black',
    fontSize: 20,
    color: '#1C5C2E',
    marginTop: 5,
  },
  text1: {
    fontSize: 25,
    textAlign: 'center',
    color: '#000',
    fontWeight: '400',
  },
  text2: {
    marginVertical: 2,
    fontSize: 20,
    // textAlign: 'center',
    color: '#1C5C2E',
    fontWeight: '500',
  },
  topics: {
    // alignSelf: 'flex-start',
    backgroundColor: '#D1DED5',
    borderColor: '#00000029',
    elevation: 5,
    // width: 126,
    // height: 35,
    borderRadius: 5,
    borderWidth: 1,
    flexDirection: 'row',
    // justifyContent: 'space-around',
    margin: 10,
  },
  box1: {
    width: '100%',
    alignSelf: 'center',
    // height: '100%',
    // backgroundColor: 'yellow',
  },
  row: {
    flexDirection: 'row',
    // backgroundColor: 'green',
    width: '90%',
    alignSelf: 'center',
    marginVertical: 10,
    flexDirection: 'row',
  },
  line: {
    width: '80%',
    height: 1,
    backgroundColor: '#afafaf',
    marginTop: 16,
    marginLeft: 2,
  },
});
export default Video;
