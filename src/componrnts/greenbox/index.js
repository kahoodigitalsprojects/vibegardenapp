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

const Greenbox = navigation => {
  const [data1, setdata1] = useState(0);
  const Data = [
    {
      Image1: Images.Icons.upload,
      title: 'Top',
      name: 'Buddhism',
    },
    {
      Image1: Images.Icons.light,
      title: 'Tools For Light',
      name: 'Quant',
    },
    {
      Image1: Images.Icons.circle,
      title: 'Tools for Shadow',
      name: 'Buddhism',
    },
    {
      Image1: Images.Icons.triangle,
      title: 'Tools for Content',
    },
  ];
  const data = [
    {
      name: 'Buddhism',
    },
    {
      name: 'Quantum Physics',
    },
    {
      name: 'Tools for Content',
    },
    {
      name: '+',
    },
  ];
  return (
    <View style={{marginVertical: 10}}>
      <FlatList
        horizontal={true}
        data={Data}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              onPress={() =>
                index === 0 ? navigation.navigate('/') : setdata1(index - 1)
              }
              style={{
                backgroundColor: data1 === index - 0 ? '#1C5C2E87' : '#fff',
                width: 90,
                height: 80,
                borderRadius: 15,
                margin: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View style={{width: 24, height: 24}}>
                <Image
                  source={item.Image1}
                  style={{width: '100%', height: '100%'}}
                />
              </View>
              <Text
                style={{
                  textAlign: 'center',
                  color: data1 === index - 0 ? '#fff' : '#000',
                }}>
                {item.title}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
      <View>
        <FlatList
          horizontal={true}
          data={data}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  backgroundColor: '#BCCFC1',
                  margin: 5,
                  padding: 5,
                  borderRadius: 8,
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 12,
                  }}>
                  {item.name}
                </Text>
              </View>
            );
          }}
        />
        <View style={styles.greebbtn}>
          <Text>hhjfffj</Text>
        </View>
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
