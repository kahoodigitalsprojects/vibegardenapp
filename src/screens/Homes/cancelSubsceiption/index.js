import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Header, Pinkbtn, QComponents} from '../../../componrnts';
import Icon from 'react-native-vector-icons/Feather';
import {useBackButton} from '../../../hooks/BackHandler';

const CancelSubscription = ({navigation}) => {
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
        <View
          style={{
            marginVertical: 10,

            width: '90%',
            alignSelf: 'center',
          }}>
          <Header
            marginTop={-40}
            iconName="left"
            marginLeft={40}
            color="#191919B8"
            fontSize={20}
            header2
            headertext="Cancle Subscriptions"
            OnPress={() => navigation.goBack()}
          />
        </View>
        <View
          style={{
            alignSelf: 'center',
          }}>
          <View style={{marginTop: -40, width: '88%'}}>
            <QComponents
              textforvideo="Good bye Thanks!"
              icontwon
              name2="chevron-up"
              video={true}
              Statement={
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.'
              }
              textfontsize={20}
              marginTop1={-5}
              text6={'Leaving Because:'}
              fontfamily="BrandonGrotesque-Bold"
            />
          </View>
          <View
            style={{
              // width: '100%',
              // alignSelf: 'center',
              // backgroundColor: 'pink',
              height: 220,
            }}>
            <FlatList
              data={data}
              renderItem={({item}) => {
                return (
                  <View
                    style={{
                      marginVertical: 8,
                      marginTop: 5,
                      flexDirection: 'row',
                      // width: '100%',
                    }}>
                    <TouchableOpacity
                      onPress={() => {}}
                      style={{
                        marginTop: 2,
                      }}>
                      <Icon name="check-square" size={20} color="#1C5C2E" />
                    </TouchableOpacity>
                    <Text
                      style={{
                        fontSize: 14,
                        marginTop: 3,
                        marginLeft: 15,
                        // textAlign: 'center',
                        color: '#000',
                        // fontWeight: 'bold',
                        fontFamily: 'BrandonGrotesque-Regular',
                      }}>
                      {item.text1}
                    </Text>
                  </View>
                );
              }}
            />
          </View>
        </View>

        <View
          style={{
            alignSelf: 'center',
            alignItems: 'center',
            width: '90%',
            // backgroundColor: 'yellow',
          }}>
          <Pinkbtn
            shadow={'#00000029'}
            onPress={() => {
              navigation.navigate('Success');
            }}
            width={'75%'}
            btntxt="Submit"
          />
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
    width: '100%',
    alignItems: 'center',
    alignSelf: 'center',
  },
  text1: {
    fontSize: 25,
    textAlign: 'center',
    color: '#000',
    fontWeight: '400',
  },
  text2: {
    marginVertical: 2,
    fontSize: 20,
    color: '#1C5C2E',
    fontWeight: '500',
  },
});
export default CancelSubscription;
const data = [
  {
    text1: 'Support healing',
  },
  {
    text1: 'Allow the release  of negative thoughts  Patterns',
  },
  {
    text1: 'Help you connect to approve expenses prespecting',
  },
  {
    text1: 'Remind you  of Your inner knowing',
  },
  {
    text1: 'Increase connection to self love',
  },
  {
    text1: 'Increase connection to self love',
  },
];
