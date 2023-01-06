import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {
  ArrowUpGreen,
  ArrowUpWhite,
  LeafWhite,
  LeafGreen,
  BlocksWhite,
  BlocksGreen,
  DivesGreen,
  DivesWhite,
  PlayGreen,
  PlayWhite,
} from '../../assests/svgs/GroundworkSvg';
import {
  ArrowUPG,
  ArrowUPW,
  GreenSun,
  WhiteSun,
  GreenCircle,
  WhiteCircle,
  WhiteTriangle,
  GreenTriangle,
} from '../../assests/svgs/ToolsSvg';

const Greenbox = ({
  img1,
  img2,
  onPress,
  onPress1,
  Press,
  navigation,
  boxtex1,
  boxtex2,
  boxtex3,
}) => {
  const [data1, setdata1] = useState(0);

  const [state, setstate] = useState(true);
  const Data = [
    {
      toolsSvgWhite: <ArrowUPW />,
      toolsSvgGreen: <ArrowUPG />,
      groundworkSvgWhite: <ArrowUpWhite />,
      groundworkSvgGreen: <ArrowUpGreen />,
      title: 'Top',
      title2: 'Top',
      Press: Press,
    },
    {
      toolsSvgWhite: <WhiteSun />,
      toolsSvgGreen: <GreenSun />,
      groundworkSvgWhite: <LeafWhite />,
      groundworkSvgGreen: <LeafGreen />,
      title: 'Tools For Light',
      title2: 'Essents',
    },
    {
      toolsSvgWhite: <WhiteCircle />,
      toolsSvgGreen: <GreenCircle />,
      groundworkSvgWhite: <BlocksWhite />,
      groundworkSvgGreen: <BlocksGreen />,
      title: ' Tools for Shadow',
      title2: 'Build Blocks',
    },
    {
      toolsSvgWhite: <WhiteTriangle />,
      toolsSvgGreen: <GreenTriangle />,
      groundworkSvgWhite: <DivesWhite />,
      groundworkSvgGreen: <DivesGreen />,
      title: 'Tools for Content',
      title2: 'Deep Dives',
    },
    {
      toolsSvgWhite: <WhiteTriangle />,
      toolsSvgGreen: <GreenTriangle />,
      groundworkSvgWhite: <PlayWhite />,
      groundworkSvgGreen: <PlayGreen />,
      title: 'Tools for Content',
      title2: 'Play',
    },
  ];
  const data = [
    {
      name: boxtex1,
    },
    {
      name: boxtex2,
    },
    {
      name: boxtex3,
    },
  ];
  return (
    <View style={{marginVertical: 10}}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={Data}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              onPress={() => (index === true ? '' : setdata1(index))}
              style={{
                backgroundColor: data1 === index ? '#1C5C2E87' : '#fff',
                elevation: data1 === index ? 0 : 5,
                width: 100,
                height: 80,
                borderRadius: 15,
                margin: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <>
                {img1 && (
                  <>
                    <View
                      style={{
                        width: 25,
                        height: 34,
                        alignSelf: 'center',
                      }}>
                      {index === 0
                        ? data1 === 0
                          ? item.toolsSvgWhite
                          : item.toolsSvgGreen
                        : data1 === index
                        ? item.toolsSvgWhite
                        : item.toolsSvgGreen}
                    </View>
                    <Text
                      style={{
                        textAlign: 'center',
                        color: data1 === index ? '#fff' : '#1C5C2E',
                        fontFamily: 'BrandonGrotesque-Regular',
                        fontSize: 12,
                        width: 45,
                      }}>
                      {item.title}
                    </Text>
                  </>
                )}
                {/* {img2 && (
                  <>
                    <View style={{width: 24, height: 24, alignSelf: 'center'}}>
                      {index === 0 ? (
                        <Image
                          source={data1 === 0 ? item.Image2 : item.Image4}
                          resizeMode="contain"
                          style={{width: '100%', height: '100%'}}
                        />
                      ) : (
                        <Image
                          resizeMode="contain"
                          source={data1 === index ? item.Image4 : item.Image2}
                          style={{width: '100%', height: '100%'}}
                        />
                      )}
                    </View>
                    <Text
                      style={{
                        textAlign: 'center',
                        color: data1 === index ? '#fff' : '#1C5C2E',
                        fontFamily: 'BrandonGrotesque-Regular',
                        fontSize: 12,
                        width: 50,
                      }}>
                      {item.title2}
                    </Text>
                  </>
                )} */}
              </>
              {/* //////////////////////////////////////////////////////////////// */}
              {/* <Image
                          resizeMode="contain"
                          source={data1 === 0 ? item.Image2 : item.Image3}
                          style={{width: '100%', height: '100%'}}
                        /> */}
              <View>
                {img2 && (
                  <>
                    <View style={{width: 24, height: 24, alignSelf: 'center'}}>
                      {index === 0
                        ? data1 === 0
                          ? item.groundworkSvgWhite
                          : item.groundworkSvgGreen
                        : data1 === index
                        ? item.groundworkSvgWhite
                        : item.groundworkSvgGreen}
                    </View>

                    <Text
                      style={{
                        textAlign: 'center',
                        color: data1 === index ? '#fff' : '#1C5C2E',
                        fontFamily: 'BrandonGrotesque-Regular',
                        fontSize: 12,
                        width: 45,
                      }}>
                      {item.title2}
                    </Text>
                  </>
                )}
              </View>
            </TouchableOpacity>
          );
        }}
      />
      <View View style={{marginVertical: 30, flexDirection: 'row'}}>
        <View>
          <FlatList
            horizontal={true}
            data={data}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  onPress={onPress1}
                  style={{
                    elevation: 2,
                    backgroundColor: '#BCCFC1',
                    margin: 5,
                    padding: 5,
                    borderRadius: 8,
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontFamily: 'BrandonGrotesque-Regular',
                      color: '#1C5C2E',
                      fontSize: 12,
                    }}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>

        <TouchableOpacity
          onPress={onPress}
          style={{
            marginTop: 6,
            backgroundColor: '#1C5C2E',
            width: 25,
            height: 25,
            color: '#fff',
            marginLeft: 10,
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: '#fff', fontFamily: 'BrandonGrotesque-Regular'}}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    </View>
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
  greebbtn: {
    backgroundColor: 'green',
    borderRadius: 100,
    justifyContent: 'crnter',
    alignItems: 'center',
  },
});

export {Greenbox};
