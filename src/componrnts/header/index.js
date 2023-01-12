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
  fontSize = 25,
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
  logo,
  right,
  menu1,
  menu2,
  settings,
  leftIconSize = 20,
  fontWeight = 'Medium',
  textToLeft,
  greenIcon,
}) => {
  const [state, setState] = useState(false);
  return (
    <View style={styles.container}>
      {right === 'heartplus' ? (
        <>
          <View style={{flex: 1, height: 40}}>
            <TouchableOpacity
              onPress={OnPress}
              style={{
                width: 40,
                height: 40,
                borderRadius: 12,
                backgroundColor: search ? 'transparent' : '#1C5C2E',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon2
                name={iconName}
                size={leftIconSize}
                color={search ? '#1C5C2E' : '#fff'}
              />
            </TouchableOpacity>
          </View>
          <View style={{flex: 1, height: 40, alignItems: 'center'}}>
            <Image
              source={Images.Logos.logo1}
              resizeMode="contain"
              style={{width: 40, height: 40}}
            />
          </View>
          <View
            style={{
              flex: 1,
              height: 40,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}>
            <TouchableOpacity style={[styles.iconRight, {marginRight: 5}]}>
              <Icon2 name="plus" size={20} color="#1C5C2E" style={{}} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconRight}>
              <Icon name="heart" size={20} color="#EF3A71" />
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <>
          <TouchableOpacity
            onPress={OnPress}
            style={{
              width: 40,
              height: 40,
              borderRadius: 12,
              backgroundColor: search ? 'transparent' : '#1C5C2E',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon2
              name={iconName}
              size={leftIconSize}
              color={search ? '#1C5C2E' : '#fff'}
            />
          </TouchableOpacity>
          {logo ? (
            <Image
              source={Images.Logos.logo1}
              resizeMode="contain"
              style={{width: 40, height: 40}}
            />
          ) : (
            <View
              style={{
                flexDirection: 'row',
                marginRight: textToLeft ? 'auto' : 0,
                marginLeft: textToLeft ? 15 : 0,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {settings && (
                <Image
                  source={Images.Imgs.lotus1}
                  resizeMode="contain"
                  style={{width: 34, height: 34, marginRight: 10}}
                />
              )}
              {greenIcon && <View style={{marginRight: 10}}>{greenIcon}</View>}
              <Text
                style={{
                  fontSize: fontSize,
                  color: headertextColor,
                  fontFamily: `BrandonGrotesque-${fontWeight}`,
                }}>
                {headertext}
              </Text>
            </View>
          )}
          {toggle ? (
            <View>
              <TouchableOpacity
                onPress={() => setState(!state)}
                style={styles.menubox}>
                <Icon3 name="ios-menu" size={25} color="#1C5C2E" />
              </TouchableOpacity>
              <Menu
                opened={state}
                onBackdropPress={() => setState(!state)}
                style={{width: 40}}>
                <MenuTrigger style={{}}></MenuTrigger>
                <MenuOptions
                  optionsContainerStyle={{
                    width: 40,
                    shadowColor: '#fff',
                    shadowOffset: {
                      width: 0,
                      height: 0,
                    },
                    shadowOpacity: 0,
                    shadowRadius: 0,

                    elevation: 0,
                    backgroundColor: '#fff',
                    marginLeft: 1.5,
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      setState(!state);
                      menu1();
                    }}
                    style={[
                      styles.menubox,
                      {
                        backgroundColor: '#1C5C2E',
                        marginTop: 10,
                      },
                    ]}>
                    <Icon3
                      name="notifications-outline"
                      size={25}
                      color="#fff"
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      setState(!state);
                      menu2();
                    }}
                    style={[
                      styles.menubox,
                      {
                        backgroundColor: '#1C5C2E',
                        marginTop: 10,
                      },
                    ]}>
                    <Icon2 name="setting" size={25} color="#fff" style={{}} />
                  </TouchableOpacity>
                </MenuOptions>
              </Menu>
            </View>
          ) : heart ? (
            <TouchableOpacity style={styles.iconRight}>
              <Icon name="heart" size={25} color="#EF3A71" />
            </TouchableOpacity>
          ) : (
            <View style={{width: 40, height: 40}}></View>
          )}
        </>
      )}
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
  menubox: {
    backgroundColor: '#CFDCD2',
    marginVertical: 2,
    height: 43,
    width: 43,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconRight: {
    width: 30,
    height: 30,
    borderRadius: 12,
    // backgroundColor: search ? 'transparent' : '#1C5C2E',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
