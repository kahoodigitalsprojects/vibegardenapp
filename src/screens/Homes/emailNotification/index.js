import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Switch,
  ScrollView,
  StatusBar,
  FlatList,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Header, Pinkbtn, StoryData, Switch1} from '../../../componrnts';
import Images from '../../../constants';

const EmailNotification = props => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [data1, setData1] = useState();

  const data = [
    {
      text1: 'Tools Recommendations:',
      text2: 'Personalized tools suggestions based on your resonance ',
    },
    {
      text1: 'VibeGarden Updates:',
      text2:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy. ',
    },
    {
      text1: 'Surveys:',
      text2:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy. ',
    },
  ];

  return (
    <SafeAreaView style={styles.main}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <StatusBar animated={true} backgroundColor="#000" />
        <View style={styles.container}>
          <Header
            marginTop={-40}
            marginRight={-30}
            iconName="left"
            headertext="Email Notifications"
            color="#191919B8"
            fontSize={20}
            header2
            OnPress={() => props.navigation.goBack()}
          />
          <View style={{marginTop: 10}}>
            <View style={{width: '100%'}}>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={data}
                renderItem={({item}) => {
                  return (
                    <View>
                      <View style={styles.switchView}>
                        <View styles={{width: '95%'}}>
                          <Text style={styles.text1}>{item.text1}</Text>
                        </View>
                        <View styles={{width: '5%'}}>
                          <Switch1 marginTop={6} />
                        </View>
                      </View>
                      <View style={{width: '80%'}}>
                        <Text style={styles.text2}>{item.text2}</Text>
                      </View>
                    </View>
                  );
                }}
              />
            </View>
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
    alignSelf: 'center',
    marginVertical: 10,
  },
  text1: {
    color: '#000',
    fontSize: 20,
    marginVertical: 4,
    fontFamily: 'BrandonGrotesque-Medium',
  },
  text2: {
    color: '#000',
    fontSize: 18,
    fontFamily: 'BrandonGrotesque-Regular',
    opacity: 0.5,
  },

  switchView: {
    // backgroundColor: 'green',
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginVertical: 15,
  },
});
export default EmailNotification;
