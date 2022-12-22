import React, { startTransition, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  StatusBar,
  Switch,
  Image,
  TouchableOpacity,
  Appearance,
} from 'react-native';

import { Header, Pinkbtn, QComponents, Switch1 } from '../../../componrnts';
import Icon from 'react-native-vector-icons/FontAwesome';
import Images from '../../../constants';

const EditScreen = ({ navigation, route }) => {
  let colorScheme = Appearance.getColorScheme();
  console.log(colorScheme);
  const { itemId } = route.params;
  const { otherParam } = route.params;
  const { otherParam1 } = route.params;
  const { otherParam2 } = route.params;
  const { two } = route.params;

  return (

    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}>
      <StatusBar animated={true} backgroundColor="#000" />

      <View
        style={{
          // marginVertical: 10,
          marginTop: 10,
          width: '90%',
          alignSelf: 'center',
        }}>
        <Header
          iconName="left"
          marginTop={-40}

          header2
          headertext={itemId}
          fontSize={25}
          color="#000"
          OnPress={() => navigation.navigate('Homes', { screen: 'settings' })}
        />
        <View style={{ marginTop: 50 }}>
          <View style={styles.center}>
            <Text style={[styles.Text]}>{otherParam1} </Text>
          </View>
          {two && (
            <View style={styles.center}>
              <Text style={styles.Text}>{otherParam2} </Text>
            </View>
          )}
        </View>
        <View style={{ marginVertical: 5, alignSelf: 'center', width: '90%' }}>
          <View style={{ marginTop: 20 }}>
            <Pinkbtn
              // onPress={() =>
              //   props.navigation.navigate('signup', {
              //     registerd1: () => props.navigation.navigate('signup'),
              //   })
              // }
              width={'60%'}
              btntxt={otherParam}
            />
          </View>
        </View>
      </View>
    </ScrollView>

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
