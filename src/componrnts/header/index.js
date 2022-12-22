import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/Ionicons';
import Images from '../../constants';

const Header = props => {
  const {
    color,
    heartplus,
    toggle,
    plus,
    heart,
    iconName,
    press1,
    press2,
    search,
    fontSize,
    logo1,
    gbg,
    flower,
    img23,
    heading,
    img1,
    search1,
    hearttop,
    greenicon1,
    marginLeft,
    heartleft1,
    header4,
    size,
    width,
    colorplus,
    headertext2,
    marginTopplus,
    show,
  } = props;
  const [state, setState] = useState(false);
  return (
    <View style={{width: '100%'}}>
      {props.homeheader && (
        <View style={styles.header}>
          <TouchableOpacity
            onPress={search}
            style={{
              width: 40,
              height: 40,
              marginTop: -8,
              backgroundColor: gbg,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
            }}>
            <Icon2
              name={search1}
              size={20}
              color={color}
              style={{
                fontWeight: 'bold',
                marginLeft: marginLeft,
                marginTop: -2,
              }}
            />
          </TouchableOpacity>
          {img1 && (
            <View style={{width: 40, height: 4, marginTop: -10}}>
              <Image
                source={Images.Logos.logo1}
                resizeMode="contain"
                style={{width: 40, height: 40}}
              />
            </View>
          )}
          {heading && (
            <View
              style={{
                width: '70%',
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View style={{width: 25, height: 25, margin: 5}}>
                <Image
                  source={greenicon1}
                  resizeMode="contain"
                  style={{width: '100%', height: '100%'}}
                />
              </View>
              <Text
                style={{
                  fontSize: fontSize,
                  color: '#000',
                  fontFamily: 'BrandonGrotesque-Bold',
                }}>
                {props.headertext}
              </Text>
            </View>
          )}

          {toggle && (
            <>
              <View
                style={{
                  flexDirection: 'column',
                  // justifyContent: 'space-around',
                }}>
                <TouchableOpacity
                  onPress={() => setState(!state)}
                  style={styles.greenbox}>
                  <Icon3 name="ios-menu" size={25} color="#1C5C2E" />
                </TouchableOpacity>
                {state === true ? (
                  <View style={{}}>
                    <TouchableOpacity
                      onPress={props.OnPress}
                      style={[
                        styles.greenbox1,
                        {width: 40, height: 40, padding: 4, marginVertical: 8},
                      ]}>
                      <Icon3
                        name="md-notifications-outline"
                        size={25}
                        color="#fff"
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={props.OnPress1}
                      style={[
                        styles.greenbox1,
                        {width: 40, height: 40, padding: 4, marginVertical: 10},
                      ]}>
                      <Icon2 name="setting" size={25} color="#fff" />
                    </TouchableOpacity>
                  </View>
                ) : null}
              </View>
            </>
          )}
          {props.header21 && (
            <View style={styles.header}>
              <TouchableOpacity
                onPress={props.OnPress}
                style={{width: '10%', marginTop: 5}}>
                <View
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 12,
                    backgroundColor: '#1C5C2E',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Icon2 name={iconName} size={25} color="#fff" />
                </View>
              </TouchableOpacity>
              <View style={{width: '95%', alignItems: 'center'}}>
                <Text
                  style={{
                    fontSize: fontSize,
                    marginTop: 8,
                    color: color,
                    fontWeight: '500',
                    fontFamily: 'BrandonGrotesque-Medium',
                  }}>
                  {props.headertext}
                </Text>
              </View>
            </View>
          )}
          {heartplus && (
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                // width: '15%',
                // marginTop: 5,
              }}>
              {plus && (
                <View style={{marginRight: 8, marginTop: marginTopplus}}>
                  <Icon2 name="plus" size={size} color={colorplus} style={{}} />
                </View>
              )}
              {heart && (
                <Icon
                  name="heart"
                  size={20}
                  color="#EF3A71"
                  style={{marginTop: hearttop, marginLeft: heartleft1}}
                />
              )}
            </TouchableOpacity>
          )}
        </View>
      )}
      {props.header2 && (
        <View style={styles.header}>
          <TouchableOpacity
            disabled={(show === true && true) || false}
            onPress={props.OnPress}
            style={{width: '5%', marginTop: 5}}>
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 12,
                backgroundColor: (show === true && 'transparent') || '#1C5C2E',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon2
                name={iconName}
                size={20}
                color={(show === true && 'transparent') || '#fff'}
              />
            </View>
          </TouchableOpacity>
          <View
            style={{
              width: '95%',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
            {flower && (
              <View
                style={{
                  marginRight: 8,
                  marginTop: 10,
                  // backgroundColor: 'yellow',
                  width: 34,
                  height: 34,
                }}>
                <Image
                  source={img23}
                  resizeMode="contain"
                  style={{width: '100%', height: '100%'}}
                />
              </View>
            )}
            <Text
              style={{
                fontSize: fontSize,
                marginTop: 8,
                color: color,

                fontFamily: 'BrandonGrotesque-bold',
              }}>
              {props.headertext}
            </Text>
          </View>
        </View>
      )}

      {header4 && (
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
          }}>
          <View
            style={{
              width: width,
              flexDirection: 'row',
            }}>
            <TouchableOpacity onPress={props.OnPress} style={{marginTop: 5}}>
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  backgroundColor: '#1C5C2E',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon2 name={iconName} size={25} color="#fff" />
              </View>
            </TouchableOpacity>
            {headertext2 && (
              <View style={{alignItems: 'center', marginLeft: 10}}>
                <Text
                  style={{
                    fontSize: fontSize,
                    marginTop: 10,
                    color: color,
                    fontWeight: '500',
                    fontFamily: 'BrandonGrotesque-Medium',
                  }}>
                  {props.headertext2}
                </Text>
              </View>
            )}
          </View>
          <View style={{alignItems: 'center', width: '50%', marginTop: 3}}>
            <Text
              style={{
                fontSize: fontSize,
                marginTop: 8,
                color: color,
                fontWeight: '500',
                fontFamily: 'BrandonGrotesque-Medium',
              }}>
              {props.headertext}
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

export {Header};

const styles = StyleSheet.create({
  greenbox: {
    backgroundColor: '#CFDCD2',
    marginVertical: 2,
    height: 43,
    width: 43,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  greenbox1: {
    backgroundColor: '#1C5C2E',
    marginVertical: 2,
    height: 43,
    width: 43,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  header: {marginTop: 5, flexDirection: 'row', justifyContent: 'space-between'},
});

//  {
//    heartplus && (
//      <TouchableOpacity
//        style={{
//          flexDirection: 'row',
//          justifyContent: 'space-between',

//          marginTop: 5,
//        }}>
//        {plus && (
//          <View style={{marginRight: 8}}>
//            <Icon name="plus" size={25} color="#1C5C2E" style={{}} />
//          </View>
//        )}
//        {heart && <Icon name="heart" size={25} color="#900" />}
//      </TouchableOpacity>
//    );
//  }
