import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/Ionicons';
import Images from '../../constants';

import {Menu, MenuOptions, MenuTrigger} from 'react-native-popup-menu';
const Header = ({
  color,
  marginTop,
  alignItems,
  heartplus,
  toggle,
  plus,
  heart,
  iconName,
  search,
  fontSize,
  gbg,
  flower,
  img23,
  heading,
  img1,
  search1,
  hearttop,
  greenicon1,
  heartleft1,
  header4,
  size,
  width,
  colorplus,
  headertext2,
  marginTopplus,
  marginRight,
  show,
  OnPress,
  headertext,
  headertextColor,
}) => {
  const [state, setState] = useState(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={OnPress}
        style={{
          width: 40,
          height: 40,
          borderRadius: 12,
          backgroundColor: '#1C5C2E',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icon2 name={iconName} size={25} color="#fff" />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 25,
          color: headertextColor,
          fontFamily: 'BrandonGrotesque-Medium',
        }}>
        {headertext}
      </Text>
      <View style={{width: 40, height: 40}}></View>
    </View>
  );
};

export {Header};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
    paddingVertical: 10,
  },
});
