import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Images from '../../constants';

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
  const Data = [
    {
      Image1: Images.Icons.upload,
      Image2: Images.Icons.up1,
      title: 'Top',
      title2: 'Top',
      Press: Press,
    },
    {
      Image1: Images.Icons.light,
      Image2: Images.Icons.gleaf,
      title: 'Tools For Light',
      title2: 'Essents',
    },
    {
      Image1: Images.Icons.circle,
      Image2: Images.Icons.blocks,
      title: 'Tools for Shadow',
      title2: 'build Blocks',
    },
    {
      Image2: Images.Icons.gdownload,
      Image1: Images.Icons.triangle,
      title: 'Tools for Content',
      title2: 'Deep Dives',
    },
    {
      Image2: Images.Logos.greenheart,
      Image1: Images.Icons.triangle,
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
                width: 90,
                height: 80,
                borderRadius: 15,

                margin: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {img1 && (
                <>
                  <View style={{width: 24, height: 24, alignSelf: 'center'}}>
                    <Image
                      source={item.Image1}
                      style={{width: '100%', height: '100%'}}
                    />
                  </View>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: data1 === index ? '#fff' : '#1C5C2E',
                    }}>
                    {item.title}
                  </Text>
                </>
              )}
              <View>
                {img2 && (
                  <>
                    <View style={{width: 24, height: 24, alignSelf: 'center'}}>
                      <Image
                        source={item.Image2}
                        style={{width: '100%', height: '100%'}}
                      />
                    </View>
                    <Text
                      style={{
                        textAlign: 'center',
                        color: data1 === index ? '#fff' : '#000',
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

            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: '#fff'}}>+</Text>
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
