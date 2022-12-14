import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Switch,
  FlatList,
} from 'react-native';
import {Header, Pinkbtn, StoryData, Switch1} from '../../../componrnts';
import Images from '../../../constants';

const Resonance = props => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [data1, setData1] = useState();

  const data = [
    {
      Texts: 'Buddhism',
    },
    {Texts: 'Nature'},
    {Texts: 'Quntum Physics'},
    {Texts: 'Asteven Master'},
    {Texts: 'Plants'},
  ];

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{flexGrow: 1}}>
      <StatusBar animated={true} backgroundColor="#000" />
      <View style={styles.main}>
        <View style={styles.container}>
          <Header
            iconName="closesquareo"
            header2
            OnPress={() => props.navigation.goBack('')}
          />
          <View style={{marginTop: 10}}>
            <Text style={styles.text}>Select Your Topic Resonance?</Text>
            <View style={styles.row}>
              <Text style={styles.text}>OR Try Our </Text>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('question2');
                }}
                style={styles.btn}>
                <Text style={{color: '#fff', margin: 10}}>
                  Resonance Finder
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{marginVertical: 20}}>
              <FlatList
                data={data}
                renderItem={({item}) => {
                  return (
                    <View style={{flexDirection: 'row', marginVertical: 15}}>
                      <View styles={{}}>
                        <Switch1 marginRight={20} />
                      </View>
                      <View style={{marginTop: 5}}>
                        <Text styles={{color: '#000', fontSize: 14}}>
                          {item.Texts}
                        </Text>
                      </View>
                    </View>
                  );
                }}
              />
            </View>
            <View style={{marginTop: 8}}>
              <Pinkbtn
                onPress={() => {
                  props.navigation.navigate('question2');
                }}
                btntxt="
            Save"
                width={230}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // backgroundColor: 'pink',
  },
  container: {
    marginVertical: 10,
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
    // backgroundColor: 'yellow',
    marginVertical: 12,
  },
  text: {
    // backgroundColor: 'green',
    color: '#1C5C2E',
    fontWeight: '500',
    fontSize: 24,
    marginTop: 5,
  },
  btn: {
    backgroundColor: '#75997E',
    borderRadius: 10,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    opacity: 0.6,
  },
  switchView: {
    // backgroundColor: 'green',
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
export default Resonance;
