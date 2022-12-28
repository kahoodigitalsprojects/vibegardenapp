import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  StatusBar,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/Ionicons';
import {Header, Userdetails} from '../../../componrnts';
import Images from '../../../constants';

const Search3 = ({route, navigation}) => {
  const [state, setSate] = useState(false);

  return (
    <SafeAreaView style={styles.main}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <StatusBar animated={true} backgroundColor="#000" />

        <View
          style={{
            marginVertical: 10,
            marginTop: 10,
            width: '90%',
            alignSelf: 'center',
          }}>
          <Header
            iconName="closesquareo"
            header2
            OnPress={() => navigation.navigate('settings')}
          />

          <View style={{marginVertical: 5, alignSelf: 'center'}}>
            <Text
              style={{
                fontSize: 25,
                textAlign: 'center',
                color: '#afafaa',
                marginVertical: 5,
                fontFamily: 'BrandonGrotesque-Medium',
              }}>
              Success
            </Text>

            <Text
              style={{
                fontSize: 28,
                textAlign: 'center',
                color: '#1C5C2E',
                marginVertical: 10,
                fontFamily: 'BrandonGrotesque-Medium',
              }}>
              Off You Go!
            </Text>
            <Text
              style={{
                marginVertical: 10,
                fontSize: 18,
                textAlign: 'center',
                color: '#000',
                lineHeight: 30,
                fontFamily: 'BrandonGrotesque-Medium',
              }}>
              Your Cancelation Is Submitted {'\n'} Be Well!
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
  },
  input: {
    width: '100%',

    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 0.5,
    borderRadius: 10,
    backgroundColor: '#BCCFC1',
    opacity: 0.5,
    // alignSelf: 'flex-start',
    // borderColor: '#1C5C2E',
    // marginVertical: 20,
    // marginTop: 20,
  },
});
export default Search3;
