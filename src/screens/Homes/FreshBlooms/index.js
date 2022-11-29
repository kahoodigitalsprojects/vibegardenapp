import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  StatusBar,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Header} from '../../../componrnts';
import Tooltip from 'react-native-walkthrough-tooltip';
import Reset from '../../../componrnts/ResetComponent';
import Result from '../result';

const FressBlooms = ({route, navigation}) => {
  const [isdata, setIsdata] = useState(true);
  const [state, setState] = useState(false);

  const data = [
    {id: 1, icon1: 'heart'},
    {id: 2, icon1: 'heart'},
    {id: 3, icon1: 'heart'},
    {id: 4, icon1: 'heart'},
  ];
  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <StatusBar animated={true} backgroundColor="#000" />
        <View style={styles.main}>
          <View
            style={{
              marginVertical: 20,
              marginTop: 20,
              width: '90%',
              alignSelf: 'center',
            }}>
            <Header
              iconName="closesquareo"
              fontSize={18}
              header2
              headertext={hedindg}
              OnPress={() => navigation.replace('Mytabs', {screen: 'Home'})}
            />
            <View style={{marginTop: 30}}>
              <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={({item}) => {
                  return (
                    <Reset
                    
                    />
                  );
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    // backgroundColor: 'pink',
  },
});
export default FressBlooms;
