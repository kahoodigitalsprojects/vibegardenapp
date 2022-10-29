import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Switch,
  FlatList,
} from 'react-native';
import {Header, Pinkbtn, StoryData} from '../../../componrnts';
import Images from '../../../constants';

const Resonance = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggle = () => {
    setIsEnabled(!isEnabled);
  };

  const data = [
    {
      name: 'Buddhism',
    },
    {
      name: 'Buddhism',
    },
    {
      name: 'Buddhism',
    },
    {
      name: 'Buddhism',
    },
    {
      name: 'Buddhism',
    },
  ];
  return (
    <View style={styles.main}>
      <View
        style={{
          marginVertical: 10,
          marginTop: 20,
          width: '90%',
          alignSelf: 'center',
        }}>
        <Header header2 />
        <View style={{marginTop: 10}}>
          <Text style={styles.text}>Select Your Topic Resonance?</Text>
          <View style={styles.row}>
            <Text style={styles.text}>OR Try Our </Text>
            <TouchableOpacity style={styles.btn}>
              <Text style={{color: '#fff', margin: 10}}>Resonance Finder</Text>
            </TouchableOpacity>
          </View>
          <View style={{marginVertical: 20}}>
            <FlatList
              data={data}
              renderItem={({item}) => {
                return (
                  <View style={styles.switchView}>
                    <Switch
                      trackColor={{false: '#75997E', true: '#1C5C2E'}}
                      value={isEnabled}
                      onValueChange={toggle}
                      style={{marginRight: 20, width: 58, height: 29}}
                    />
                    <View styles={{}}>
                      <Text styles={{color: '#000', fontSize: 14}}>
                        {item.name}
                      </Text>
                    </View>
                  </View>
                );
              }}
            />
          </View>
          <View style={{marginTop: 10}}>
            <Pinkbtn
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
  row: {
    flexDirection: 'row',
    // backgroundColor: 'yellow',
    marginVertical: 12,
  },
  text: {
    // backgroundColor: 'green',
    color: 'green',
    fontWeight: '500',
    fontSize: 24,
    marginTop: 5,
  },
  btn: {
    backgroundColor: 'green',
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
