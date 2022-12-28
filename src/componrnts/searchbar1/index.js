import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import {SearchBar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';

const Searcbart1 = ({setIsTyping, onPressRight, onPressLeft}) => {
  return (
    <View style={{width: '100%', paddingHorizontal: 20}}>
      <View
        style={{
          width: '100%',
          // marginHorizontal: 10,
          height: 40,
          backgroundColor: '#BCCFC1',
          marginTop: 20,
          borderRadius: 12,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            onPress={onPressLeft}
            style={{
              width: 40,
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
            }}>
            <Icon name="search1" size={25} color="#1C5C2E" />
          </TouchableOpacity>
          <TextInput
            onFocus={() => setIsTyping(true)}
            placeholder="Heart"
            placeholderTextColor={'#323232'}
            style={{
              flex: 1,
              color: 'black',
              // backgroundColor: 'red',
            }}
          />
        </View>
        <TouchableOpacity
          onPress={onPressRight}
          style={{
            width: 40,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <Icon name="close" size={25} color="#1C5C2E" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Searcbart1;

const styles = StyleSheet.create({
  input: {
    width: '100%',

    flexDirection: 'row',
    // justifyContent: 'space-between',
    // borderWidth: 0.5,
    borderRadius: 10,
    backgroundColor: '#BCCFC1',
    opacity: 0.5,
    // alignSelf: 'flex-start',
    // borderColor: '#1C5C2E',
    // marginVertical: 20,
    // marginTop: 20,
  },
});
