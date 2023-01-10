import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  StatusBar,
  FlatList,
  ImageBackground,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Header} from '../../../componrnts';
import Reset from '../../../componrnts/ResetComponent';
import Images from '../../../constants';
import {useBackButton} from '../../../hooks/BackHandler';
const FressBlooms = ({navigation, route}) => {
  const {otherParam, itemId, heart, plus, fromHome} = route.params || null;

  //BackHandler
  const onBackPress = () => {
    fromHome
      ? navigation.reset({
          index: 0,
          routes: [{name: 'Homes'}, {name: 'me'}],
        })
      : navigation.reset({
          index: 0,
          routes: [{name: 'me'}, {name: 'Homes'}],
        });
    return true;
  };
  useBackButton(navigation, onBackPress);

  return (
    <SafeAreaView style={styles.main}>
      {/* <StatusBar animated={true} backgroundColor="#000" /> */}

      <ImageBackground
        source={Images.BackGround.backgroundHue}
        resizeMode="stretch"
        style={styles.image}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
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
              OnPress={() =>
                fromHome
                  ? navigation.reset({
                      index: 0,
                      routes: [{name: 'Homes'}, {name: 'me'}],
                    })
                  : navigation.reset({
                      index: 0,
                      routes: [{name: 'me'}, {name: 'Homes'}],
                    })
              }
            />
            <View style={{marginTop: 25}}>
              <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={({item}) => {
                  return <Reset imgtrue={plus} icontrue={heart} />;
                }}
              />
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});
export default FressBlooms;

const data = [
  {id: 1, icon1: 'heart'},
  {id: 2, icon1: 'heart'},
  {id: 3, icon1: 'heart'},
  {id: 4, icon1: 'heart'},
];
