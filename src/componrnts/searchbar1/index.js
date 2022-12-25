import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import { SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';

const Searcbart1 = props => {
  const { close1 } = props;
  return (
    <View>
      <View
        style={{
          width: '90%',
          height: 40,
          backgroundColor: '#BCCFC1',
          alignSelf: 'center',
          marginTop: 20,
          borderRadius: 12,
          border: ' none',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            width: '86%',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            onPress={props.onpress1}
            style={{
              width: 40,
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
            }}>
            <Icon name="search1" size={25} color="#1C5C2E" />
          </TouchableOpacity>
          <TextInput placeholder="Heart" style={{ width: '80%' }}></TextInput>
        </View>
        <TouchableOpacity
          onPress={props.onpress2}
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
