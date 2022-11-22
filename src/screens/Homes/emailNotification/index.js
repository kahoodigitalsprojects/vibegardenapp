import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Switch,
  FlatList,
} from 'react-native';
import {Header, Pinkbtn, StoryData, Switch1} from '../../../componrnts';
import Images from '../../../constants';

const EmailNotification = props => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [data1, setData1] = useState();

  const data = [
    {
      text1: '   Tools Recommendations:',
      text2: '  Personalized tools suggestions based on your resonance ',
    },
    {
      text1: '    VibeGarden Updates:',
      text2:
        '    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy. ',
    },
    {
      text1: 'Surveys:',
      text2:
        '    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy. ',
    },
  ];

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Header
          iconName="left"
          header2
          OnPress={() => props.navigation.goBack('')}
        />
        <View style={{marginTop: 10}}>
          <View style={{width: '90%'}}>
            <FlatList
              data={data}
              renderItem={({item}) => {
                return (
                  <View>
                    <View style={styles.switchView}>
                      <View styles={{width: '95%'}}>
                        <Text style={styles.text1}>{item.text1}</Text>
                      </View>
                      <View styles={{width: '5%'}}>
                        <Switch1 />
                      </View>
                    </View>
                    <View style={{width: '100%', alignSelf: 'center'}}>
                      <Text style={styles.text2}>{item.text2}</Text>
                    </View>
                  </View>
                );
              }}
            />
          </View>
        </View>
      </View>
    </View>
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
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 4,
  
  },
  text2: {color: '#000', fontSize: 18,textAlign:'justify'},

  switchView: {
    // backgroundColor: 'green',
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 25,
  },
});
export default EmailNotification;
