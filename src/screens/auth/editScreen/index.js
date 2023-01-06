import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import {Header, Pinkbtn} from '../../../componrnts';
import {useBackButton} from '../../../hooks/BackHandler';

const EditScreen = ({navigation, route}) => {
  const {itemId, otherParam, otherParam1, otherParam2, two} = route.params;

  //BackHandler
  const onBackPress = () => {
    navigation.goBack();
    return true;
  };
  useBackButton(navigation, onBackPress);
  return (
    <SafeAreaView>
      <StatusBar animated={true} backgroundColor="#000" />
      <View
        style={{
          marginTop: 10,
          width: '90%',
          alignSelf: 'center',
        }}>
        <Header
          iconName="left"
          marginTop={-40}
          marginRight={-40}
          header2
          headertext={itemId}
          fontSize={25}
          color="#191919B8"
          OnPress={() => navigation.goBack()}
        />
        <View style={{marginTop: 50}}>
          <View style={styles.center}>
            <Text style={[styles.Text]}>{otherParam1} </Text>
          </View>
          {two && (
            <View style={styles.center}>
              <Text style={styles.Text}>{otherParam2} </Text>
            </View>
          )}
        </View>
        <View style={{marginVertical: 5, alignSelf: 'center', width: '90%'}}>
          <View style={{marginTop: 20}}>
            <Pinkbtn
              shadow={'#00000019'}
              onPress={() => navigation.goBack()}
              width={'60%'}
              btntxt={otherParam}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
  },
  center: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
    marginVertical: 20,
    borderBottomWidth: 1,
    borderColor: '#75997E',
  },
  Text: {
    color: '#75997E',
    fontSize: 14,
    marginVertical: 5,
    fontFamily: 'BrandonGrotesque-Regular',
  },
  btns: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
});
export default EditScreen;
