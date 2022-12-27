import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  StatusBar,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Header} from '../../../componrnts';
import Reset from '../../../componrnts/ResetComponent';
// import { BackHandler } from 'react-native';
const FressBlooms = ({navigation, route}) => {
  // const itemId = 'asdas';

  // console.log('route', route.params.itemId);
  // console.log('route', route.params.otherParam);
  console.log(' sdfd', navigation);
  const {otherParam} = route.params;
  const {itemId} = route.params;
  const {heart} = route.params;
  const {plus} = route.params;
  const {backoption} = route.params;
  const data = [
    {id: 1, icon1: 'heart'},
    {id: 2, icon1: 'heart'},
    {id: 3, icon1: 'heart'},
    {id: 4, icon1: 'heart'},
  ];
  // const backAction = () => {
  //   console.log(' freshbloom');
  //   backoption();
  //   // navigation.goBack();
  //   return true;
  // };
  // BackHandler.addEventListener('hardwareBackPress', () => {
  //   // // navigation.navigate('homes');
  //   // route.params.backoption();
  //   // console.log('helo ');
  //   // // navigation.goBack();
  //   backAction();
  // });

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <StatusBar animated={true} backgroundColor="#000" />
        <View style={styles.main}>
          <View
            style={{
              width: '90%',
              alignSelf: 'center',
              fontFamily: 'BrandonGrotesque-Regular',
            }}>
            <Text style={{color: 'yellow'}}>{itemId}</Text>
            <Header
              marginTop={-40}
              iconName="closesquareo"
              color="#000"
              fontSize={18}
              header2
              headertext={otherParam}
              OnPress={() => navigation.goBack()}
            />
            <View style={{marginTop: 47}}>
              <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={({item}) => {
                  return <Reset imgtrue={plus} icontrue={heart} />;
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    // backgroundColor: 'pink',
  },
});
export default FressBlooms;
