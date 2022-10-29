import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import Images from '../../constants';

const Header = props => {
  const {color} = props;
  return (
    <View style={{width: '100%'}}>
      {props.homeheader && (
        <View style={styles.header}>
          <View style={{width: '15%', marginTop: 5}}>
            <Icon name="search" size={25} color="#1C5C2E" />
          </View>
          <View>
            <View style={{width: 45, height: 45}}>
              <Image
                source={Images.Logos.logo1}
                resizeMode="contain"
                style={{width: '100%', height: '100%'}}
              />
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '15%',
              marginTop: 5,
            }}>
            <View style={{marginRight: 8}}>
              <Icon name="plus" size={25} color="#1C5C2E" style={{}} />
            </View>

            <Icon name="heart" size={25} color="#900" />
          </View>
        </View>
      )}
      {props.header2 && (
        <View style={styles.header}>
          <View style={{width: '20%', marginTop: 5}}>
            <Icon name="heart" size={25} color="#900" />
          </View>
          <View style={{width: '90%'}}>
            <Text style={{fontSize: 25, color: {color}, fontWeight: '500'}}>
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
  header: {marginTop: 5, flexDirection: 'row', justifyContent: 'space-between'},
});
