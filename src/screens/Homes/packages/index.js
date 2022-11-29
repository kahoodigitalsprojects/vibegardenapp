import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Switch,
  FlatList,
  Image,
} from 'react-native';
import {Header, Pinkbtn, PopUp, StoryData, Switch1} from '../../../componrnts';
import Icon from 'react-native-vector-icons/AntDesign';

import Images from '../../../constants';

const Packages = props => {
  const [state, setstate] = useState(false);
  const [state1, setState1] = useState(false);
  return (
    <>
      <View style={styles.main}>
        <View style={styles.container}>
          <View style={{marginTop: 20}}>
            <Header
              iconName="left"
              header2
              OnPress={() => props.navigation.goBack('')}
            />
          </View>
          <View style={styles.switchView}>
            <View style={styles.row}>
              <Text style={styles.text1}>
                <Text style={[styles.text1, {color: '#aaa'}]}>
                  Monthly $22{' '}
                </Text>
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={require('../../../assests/images/tick.png')}
                  style={{marginTop: 10, margin: 4}}
                />
                <Text style={styles.text2}>Selected </Text>
              </View>
            </View>

            <TouchableOpacity style={{}}>
              <Icon name="right" size={25} color="#1C5C2E" />
            </TouchableOpacity>
          </View>
          <View style={styles.switchView}>
            <View style={styles.row}>
              <Text style={styles.text1}>
                <Text
                  style={[styles.text1, {color: '#1C5C2E', fontWeight: '450'}]}>
                  Yearly $264{' '}
                </Text>
              </Text>

              <Image
                source={require('../../../assests/images/fire.png')}
                style={{marginTop: 10, margin: 4}}
              />
            </View>

            <TouchableOpacity
              onPress={() => {
                setstate(!state);
              }}
              style={{}}>
              <Icon name="right" size={25} color="#1C5C2E" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View>
        <PopUp
          poup1={true}
          Visible={state}
          onpressA={() => {
            props.navigation.navigate('PaymentMethod');
          }}
          setVisible={setstate}
          onpress1={() => {
            setstate(false);
            setState1(true);
          }}
        />
        <PopUp
          poup2={true}
          Visible={state1}
          setVisible={setState1}
          onpress1={() => {
            props.navigation.navigate('ManageSubscription');
          }}
        />
      </View>
    </>
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
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  text1: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 4,
    textAlign: 'left',
  },
  text2: {
    color: '#1492E6',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 6,
    textAlign: 'left',
  },
  row: {
    flexDirection: 'row',
    width: '95%',
  },
  icon1: {
    width: '25%',
    justifyContent: 'flex-end',
    marginTop: 5,
  },
  switchView: {
    // backgroundColor: 'green',
    width: '90%',
    flexDirection: 'row',
    marginTop: 25,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    alignSelf: 'center',
  },
});
export default Packages;
