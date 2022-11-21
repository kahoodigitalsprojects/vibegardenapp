import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Pinkbtn} from '../pinkbtn';

const Percentage = ({
  Image1,
  text1,
  margin1,
  check,
  icons,
  onPress,
  btntxt,
  simpletext,
  simpletext1,
  btn,
}) => {
  const [count, setCount] = useState(23);
  return (
    <View style={styles.box}>
      {simpletext && (
        <Text
          style={[
            styles.txt1,
            {
              textAlign: 'center',
              marginVertical: 10,
              marginTop: 30,
              // lineHeight: 40,
            },
          ]}>
          {simpletext1}
        </Text>
      )}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          marginVertical: 10,
        }}>
        <View>
          <Text style={{marginHorizontal: margin1}}>{text1}</Text>
        </View>
        <View
          style={{
            alignSelf: 'center',
            marginHorizontal: margin1,
          }}>
          <Image source={Image1} style={[styles.img]} resizeMode="contain" />
          <Text style={{textAlign: 'center', color: 'green'}}>0-25%</Text>
        </View>

        <Text
          style={{
            marginRight: 15,
            marginLeft: 10,
            fontSize: 18,
            color: '#979B9F',
          }}>
          {count}%
        </Text>
        <View>
          {icons && (
            <>
              <TouchableOpacity onPress={() => setCount(count + 1)}>
                <View style={{}}>
                  <Icon name="up" size={24} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setCount(count - 1)}>
                <View style={{}}>
                  <Icon name="down" size={24} />
                </View>
              </TouchableOpacity>
            </>
          )}
          {check && (
            <View
              style={{
                marginTop: 5,
                width: 18,
                height: 18,
                borderRadius: 100,
                backgroundColor: 'green',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon name="check" size={12} color="#fff" />
            </View>
          )}
        </View>
      </View>
      {btn && (
        <View style={{marginVertical: 10}}>
          <Pinkbtn onPress={onPress} width={'60%'} btntxt={btntxt} />
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  box: {
    paddingVertical: 10,
    marginTop: 20,
    backgroundColor: '#fff',
    borderRadius: 15,
    // height: 273,
    elevation: 10,
  },
  img: {
    width: 80,
    height: 80,
    borderRadius: 100,
    alignSelf: 'center',
  },
});
export {Percentage};
