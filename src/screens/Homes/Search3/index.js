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
  const {
    success,
    itemId,
    otherParam1,
    otherParam2,
    otherParam3,
    otherParam4,
    otherParam5,
    otherParam6,
    otherParam7,
    otherParam8,
    otherParam9,
    otherParam10,
    otherParam11,
    otherParam12,
    Name,
  } = route.params;
  const data = [
    {
      text1: otherParam1,
    },
    {
      text1: otherParam2,
      onPress: () => {
        navigation.goBack('');
      },
    },
    {
      text1: otherParam3,
      onPress: () => navigation.navigate('Search2'),
    },
    {
      text1: otherParam4,
    },
    {
      text1: otherParam5,
    },
    {
      text1: otherParam6,
    },
    {
      text1: otherParam7,
    },
    {
      text1: otherParam8,
    },
    {
      text1: otherParam9,
    },
    {
      text1: otherParam10,
    },
    {
      text1: otherParam11,
    },
    {
      text1: otherParam12,
    },
  ];
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <StatusBar animated={true} backgroundColor="#000" />

        {success && (
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
              OnPress={() => navigation.replace('settings')}
            />

            <View style={{marginVertical: 5, alignSelf: 'center'}}>
              <Text
                style={{
                  fontSize: 25,
                  textAlign: 'center',
                  color: '#afafaa',
                  fontWeight: '450',
                  marginVertical: 5,
                  fontFamily: 'Brandon_reg',
                }}>
                Success
              </Text>

              <Text
                style={{
                  fontSize: 25,
                  textAlign: 'center',
                  color: '#1C5C2E',
                  fontWeight: '600',
                  marginVertical: 10,
                  fontFamily: 'Brandon_reg',
                }}>
                Off You Go!
              </Text>
              <Text
                style={{
                  marginVertical: 10,
                  fontSize: 18,
                  textAlign: 'center',
                  color: '#000',
                  fontWeight: '450',
                  lineHeight: 30,
                  fontFamily: 'Brandon_reg',
                }}>
                Your Cancelation Is Submitted {'\n'} Be Well!
              </Text>
            </View>
          </View>
        )}

        <View
          style={{
            width: '90%',
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack('');
            }}
            // onPress={search}
            style={{
              marginTop: 25,
              width: 20,
              // width: '90%',
              alignSelf: 'flex-end',
              justifyContent: 'flex-end',
            }}>
            <Icon name={Name} size={25} color="#1C5C2E" />
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              color: '#1C5C2E',
              marginTop: -30,
              fontFamily: 'Brandon_reg',
            }}>
            {itemId}
          </Text>
          <FlatList
            data={data}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  onPress={item.onPress}
                  style={{
                    alignItems: 'center',
                    alignSelf: 'center',
                    paddingVertical: 10,
                    marginTop: 15,
                  }}>
                  <Text
                    style={{
                      fontSize: 18,
                      color: '#000',
                      fontFamily: 'Brandon_reg',
                    }}>
                    {item.text1}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fefe',
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
