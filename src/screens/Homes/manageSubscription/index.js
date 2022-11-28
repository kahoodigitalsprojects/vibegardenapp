import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Header } from '../../../componrnts';
import Reset from '../../../componrnts/ResetComponent';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/Feather';
import Images from '../../../constants';

const ManageSubscription = props => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}>
      <StatusBar animated={true} backgroundColor="#000" />
      <View style={styles.main}>
        <View style={{ marginVertical: 30, width: '90%', alignSelf: 'center' }}>
          <Header
            iconName="left"
            header2
            OnPress={() =>
              props.navigation.navigate('Homes', { screen: 'settings' })
            }
            headertext="Manage Subscription"
            fontSize={25}
            color="#000"
          />
        </View>
        <View style={styles.firstview}>
          <View style={styles.row}>
            <Text style={[styles.text1, { color: 'black' }]}>
              Subscriptions Info:
            </Text>
            <View style={styles.line}></View>
          </View>
          <View style={[styles.row, { justifyContent: 'space-between' }]}>
            <Text style={[styles.text1, { fontSize: 14 }]}>
              Subscriptions Date:
            </Text>
            <Text style={[styles.text1, { fontSize: 14, color: '#1C5C2E' }]}>
              7/8/2022
            </Text>
          </View>
          <View style={[styles.row, { justifyContent: 'space-between' }]}>
            <Text style={[styles.text1, { fontSize: 14 }]}>
              Next Billing Date:
            </Text>
            <Text style={[styles.text1, { fontSize: 14, color: '#1C5C2E' }]}>
              7/10/2022
            </Text>
          </View>
          <View style={[styles.row, { justifyContent: 'space-between' }]}>
            <Text style={[styles.text1, { fontSize: 14, marginTop: 5 }]}>
              Package Selected:
            </Text>
            <TouchableOpacity
              style={[styles.box, { left: 10 }]}
              onPress={() => {
                props.navigation.navigate('signup');
              }}>
              <Text style={{ fontSize: 12, marginTop: 5 }}>Monthly</Text>
              <TouchableOpacity style={{}}>
                <Icon
                  name="sort-down"
                  size={25}
                  color="#1C5C2E"
                  style={{ marginBottom: 5 }}
                />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <Text style={[styles.text1, { color: 'black' }]}>Billing Info:</Text>
            <View style={styles.line}></View>
          </View>
          <View style={[styles.row, { justifyContent: 'space-between' }]}>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              <Text style={[styles.text1, { fontSize: 14 }]}>Card No:</Text>
              <Text style={[{ fontSize: 12, marginLeft: 10, marginTop: 3 }]}>
                48605678xxxxxx
              </Text>
            </View>
            <Image
              source={Images.Icons.visa}
              style={{ width: 50, height: 30 }}
              resizeMode="contain"
            />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={[styles.text1, { fontSize: 14 }]}>Card No:</Text>
            <Text style={[{ fontSize: 12, marginLeft: 10, marginTop: 3 }]}>
              5/2025
            </Text>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <Text style={[styles.text1, { fontSize: 14 }]}>Card No:</Text>
            <Text style={[{ fontSize: 12, marginLeft: 10, marginTop: 3 }]}>
              147
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('PaymentMethod');
            }}
            style={{ flexDirection: 'row', marginVertical: 10 }}>
            <Icon1
              name="check-square"
              size={15}
              color="#1C5C2E"
              style={{ marginTop: 5 }}
            />
            <Text
              style={{ color: '#1C5C2E', fontSize: 12, marginLeft: 10, top: 4 }}>
              Edit Payment Methods
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { props.navigation.navigate('CancelSubscription') }} style={{ alignSelf: 'center', marginTop: 50 }}>
            <Text style={[{ color: '#1492E6', fontSize: 16 }]}>
              Cancel Subscription
            </Text>
          </TouchableOpacity>
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
  row: {
    flexDirection: 'row',
    // backgroundColor: 'green',
    width: '100%',
    alignSelf: 'center',
    marginVertical: 10,
    flexDirection: 'row',
  },
  firstview: {
    marginTop: 30,

    width: '90%',
    alignSelf: 'center',
    height: '85%',
  },
  text1: {
    marginVertical: 10,
    color: '#1C5C2E',

    fontSize: 16,
  },
  text1: {
    fontSize: 18,
    color: '#191919B8',
  },
  line: {
    width: '70%',
    height: 1,
    backgroundColor: '#afafaf',
    marginTop: 16,
    marginLeft: 2,
  },

  box: {
    width: 100,
    justifyContent: 'center',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 25,
    elevation: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    elevation: 6,
  },
  textA: {
    fontSize: 14,
    color: '#1C5C2E',
    fontWeight: '400',
    marginTop: 6,
  },
  endtext: {
    // justifyContent: 'center',
    // alignItems: 'center',
    // justifyContent: 'center',
    // justifyContent: 'space-around',
  },
});
export default ManageSubscription;
