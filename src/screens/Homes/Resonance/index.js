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
                props.navigation.navigate('question');
              }}
              style={styles.btn}>
              <Text style={{color: '#fff', margin: 10}}>Resonance Finder</Text>
            </TouchableOpacity>
          </View>
          <View style={{marginVertical: 20}}>
            <FlatList
              data={data}
              renderItem={({item}) => {
                return (
                  <View style={styles.switchView}>
                    <View styles={{}}>
                      <Switch1 />
                    </View>
                    <View styles={{marginTop: 5}}>
                      <Text
                        styles={{color: '#000', fontSize: 14, marginLeft: 20}}>
                        {item.Texts}
                      </Text>
                    </View>
                  </View>
                );
              }}
            />
          </View>
          <View style={{marginTop: 10}}>
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
    flexDirection: 'row',
    marginVertical: 15,
  },
});
export default Resonance;
