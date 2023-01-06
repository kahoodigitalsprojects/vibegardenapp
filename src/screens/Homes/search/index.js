import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  StatusBar,
  Image,
} from 'react-native';
import Searcbart1 from '../../../componrnts/searchbar1';
import Images from '../../../constants';
import {useBackButton} from '../../../hooks/BackHandler';
const Search = ({navigation}) => {
  //BackHandler
  const onBackPress = () => {
    navigation.goBack();
    return true;
  };
  useBackButton(navigation, onBackPress);
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <StatusBar animated={true} backgroundColor="#000" />
        <Searcbart1
          onpress1={() => {
            navigation.navigate('Search2');
          }}
          onpress2={() => navigation.goBack()}
        />
        <View style={styles.container}>
          <View
            style={{
              width: '90%',
              height: '90%',
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={{width: 80, height: 80}}>
              <Image
                source={Images.Logos.logo1}
                resizeMode="contain"
                style={{width: '100%', height: '100%'}}
              />
            </View>
            <Text
              style={{
                color: '#323232',
                fontSize: 18,
                lineHeight: 35,
                marginTop: 20,
                textAlign: 'center',
                fontFamily: 'BrandonGrotesque-Regular',
              }}>
              Search Tools , And{'\n'}Groundwork Videos
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    width: '90%',
    // height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
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
export default Search;
