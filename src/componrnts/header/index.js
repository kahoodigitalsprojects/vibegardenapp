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
  } = props;
  const [state, setState] = useState(false);
  return (
    <View style={{width: '100%'}}>
      {props.homeheader && (
        <View style={styles.header}>
          <TouchableOpacity
            onPress={search}
            style={{width: '15%', marginTop: 5}}>
            <Icon name="search" size={25} color="#1C5C2E" />
          </TouchableOpacity>
          <View>
            <View style={{width: 45, height: 45}}>
              <Image
                source={Images.Logos.logo1}
                resizeMode="contain"
                style={{width: '100%', height: '100%'}}
              />
            </View>
          </View>
          {toggle && (
            <>
              <View style={{flexDirection: 'column'}}>
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
                        {width: 40, height: 40, position: 'relative'},
                      ]}>
                      <Icon3 name="md-notifications" size={25} color="#fff" />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={props.OnPress1}
                      style={[
                        styles.greenbox1,
                        {width: 40, height: 40, position: 'relative'},
                      ]}>
                      <Icon3 name="settings" size={25} color="#fff" />
                    </TouchableOpacity>
                  </View>
                ) : null}
              </View>
            </>
          )}
          {heartplus && (
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '15%',
                marginTop: 5,
              }}>
              {plus && (
                <View style={{marginRight: 8}}>
                  <Icon name="plus" size={25} color="#1C5C2E" style={{}} />
                </View>
              )}
              {heart && <Icon name="heart" size={25} color="#900" />}
            </TouchableOpacity>
          )}
        </View>
      )}
      {props.header2 && (
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
          <View style={{width: '90%', alignItems: 'center'}}>
            <Text
              style={{
                fontSize: fontSize,
                marginTop: 8,
                color: color,
                fontWeight: '500',
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
