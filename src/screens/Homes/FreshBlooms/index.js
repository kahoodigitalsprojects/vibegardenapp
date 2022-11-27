import React, { useState } from 'react';
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
import { Header } from '../../../componrnts';
import Tooltip from "react-native-walkthrough-tooltip";
import Reset from '../../../componrnts/ResetComponent';
import Result from '../result';

const FressBlooms = props => {
  const [showTip, setTip] = useState(true);
  const data = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
  return (

    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}>
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
              headertext="Fresh Blooms"
              OnPress={() => props.navigation.replace('Mytabs', { screen: 'Home' })}
            />
            <View style={{ marginTop: 30 }}>
              <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={({ items }) => {
                  return <Reset />;
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
