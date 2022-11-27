import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  StatusBar,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { Header } from '../../../componrnts';
import Reset from '../../../componrnts/ResetComponent';
import Images from '../../../constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/Feather';

const Settings = props => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}>
      <StatusBar animated={true} backgroundColor="#000" />
      <View style={styles.main}>
        <View style={{ marginVertical: 30, width: '90%', alignSelf: 'center' }}>
          <Header
            iconName="closesquareo"
            header2
            OnPress={() => props.navigation.navigate('me')}
            headertext="Erin's Settings"
            fontSize={25}
            flower
            img23={Images.Imgs.lotus1}
          />
        </View>

        <View style={styles.firstview}>
          <View style={styles.first}>
            <View style={{ width: '90%', flexDirection: 'row' }}>
              <View style={{ width: '44%' }}>
                <Text style={styles.textA}>Notifications</Text>
              </View>
              <View style={styles.line}></View>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Auth', {
                screen: 'EmailNotification',
              });
            }}
            style={[
              styles.row,
              {
                width: '90%',
                justifyContent: 'center',
                // alignSelf: 'center',
                justifyContent: 'space-between',
              },
            ]}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Image
                source={Images.Icons.envelop1}
                style={{ width: 15, height: 12, marginTop: 12, margin: 5 }}
              />
              <Text style={styles.text1}>Email Notification</Text>
            </View>
            <View style={{ marginTop: 6 }}>
              <Icon name="angle-right" color={'#1C5C2E'} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Auth', {
                screen: 'Pushnotification',
              });
            }}
            style={[
              styles.row,
              {
                width: '90%',
                justifyContent: 'center',
                // alignSelf: 'center',
                justifyContent: 'space-between',
              },
            ]}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Image
                source={Images.Icons.notify}
                style={{ width: 15, height: 18, marginTop: 12, margin: 5 }}
              />

              <Text style={styles.text1}>Push Notification</Text>
            </View>
            <View style={{ marginTop: 6 }}>
              <Icon name="angle-right" color={'#1C5C2E'} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.firstview}>
          <View style={styles.first}>
            <View style={{ width: '90%', flexDirection: 'row' }}>
              <Text style={styles.textA}>Accounts</Text>
              <View style={styles.line}></View>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('EditScreen', {
                itemId: 'Update Email',
                otherParam: 'Update Email',
                otherParam1: 'Enter Your Email Address',
              });
            }}
            style={[
              styles.row,
              {
                width: '90%',
                justifyContent: 'center',
                // alignSelf: 'center',
                justifyContent: 'space-between',
              },
            ]}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <View style={{ marginTop: 8, margin: 5 }}>
                <Image
                  source={Images.Icons.envelop1}
                  style={{ width: 15, height: 11 }}
                />
              </View>
              <Text style={styles.text1}>Edit Email</Text>
            </View>
            <View

              style={{ marginTop: 6 }}>
              <Icon name="angle-right" color={'#1C5C2E'} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('EditScreen', {
                itemId: 'Email Update',
                otherParam: 'Update',
                otherParam1: 'Enter Your First Name',
                otherParam2: 'Enter Your Last Name',
                two: true,
              });
            }}
            style={[
              styles.row,
              {
                width: '90%',
                justifyContent: 'center',
                // alignSelf: 'center',
                justifyContent: 'space-between',
              },
            ]}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <View style={{ marginTop: 6, margin: 5 }}>
                <Image source={Images.Icons.person} />
              </View>
              <Text style={styles.text1}>Edit Name</Text>
            </View>
            <View

              style={{ marginTop: 6 }}>
              <Icon name="angle-right" color={'#1C5C2E'} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('EditScreen', {
                itemId: 'Change Password',
                otherParam: 'Update Password',
                otherParam1: 'Enter Current Password',
                otherParam2: 'Enter New Password',
                two: true,
              });
            }}
            style={[
              styles.row,
              {
                width: '90%',
                justifyContent: 'center',
                // alignSelf: 'center',
                justifyContent: 'space-between',
              },
            ]}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <View style={{ marginTop: 6, margin: 5 }}>
                <Image source={Images.Icons.lock} />
              </View>
              <Text style={styles.text1}>Change Password</Text>
            </View>
            <View

              style={{ marginTop: 6 }}>
              <Icon name="angle-right" color={'#1C5C2E'} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Homes', {
                screen: 'ManageSubscription',
              });
            }}
            style={[
              styles.row,
              {
                width: '90%',
                justifyContent: 'center',
                // alignSelf: 'center',
                justifyContent: 'space-between',
              },
            ]}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <View style={{ marginTop: 6, margin: 5 }}>
                <Image source={Images.Icons.video} />
              </View>
              <Text style={styles.text1}>Manage Subscription</Text>
            </View>
            <View

              style={{ marginTop: 6 }}>
              <Icon name="angle-right" color={'#1C5C2E'} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.row,
              {
                width: '90%',
                justifyContent: 'center',
                // alignSelf: 'center',
                justifyContent: 'space-between',
              },
            ]}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <View style={{ marginTop: 6, margin: 5 }}>
                <Image source={Images.Icons.notify} />
              </View>
              <Text style={styles.text1}>Logout</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.firstview}>
          <View style={styles.first}>
            <View style={{ width: '90%', flexDirection: 'row' }}>
              <Text style={styles.textA}>Support</Text>
              <View style={styles.line}></View>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Homes', {
                screen: 'Contactus',
              });
            }}
            style={[
              styles.row,
              {
                width: '90%',
                justifyContent: 'center',
                // alignSelf: 'center',
                justifyContent: 'space-between',
              },
            ]}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Image
                source={Images.Icons.headphone}
                style={{ width: 15, height: 12, marginTop: 12, margin: 5 }}
              />

              <Text style={styles.text1}>Contact us</Text>
            </View>
            <View style={{ marginTop: 6 }}>
              <Icon name="angle-right" color={'#1C5C2E'} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Auth', {
                screen: 'PrivacyPolicy',
              });
            }}
            style={[
              styles.row,
              {
                width: '90%',
                justifyContent: 'center',
                // alignSelf: 'center',
                justifyContent: 'space-between',
              },
            ]}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Image
                source={Images.Icons.bars}
                style={{ width: 15, height: 12, marginTop: 12, margin: 5 }}
              />

              <Text style={styles.text1}>Privacy Policy</Text>
            </View>
            <View style={{ marginTop: 6 }}>
              <Icon name="angle-right" color={'#1C5C2E'} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Auth', {
                screen: 'PrivacyPolicy',
              });
            }}
            style={[
              styles.row,
              {
                width: '90%',
                justifyContent: 'center',
                // alignSelf: 'center',
                justifyContent: 'space-between',
              },
            ]}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Image
                source={Images.Icons.folder}
                style={{ width: 15, height: 12, marginTop: 12, margin: 5 }}
              />
              <Text style={styles.text1}>Terms of use</Text>
            </View>
            <View style={{ marginTop: 6 }}>
              <Icon name="angle-right" color={'#1C5C2E'} />
            </View>
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

    marginVertical: 10,
  },
  first: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    marginVertical: 20,
  },
  firstview: {
    marginTop: 30,

    width: '90%',
    alignSelf: 'center',
  },
  text1: {
    marginVertical: 10,
    color: '#1C5C2E',

    fontSize: 14,
  },
  text1: {
    fontSize: 18,
    color: '#191919B8',
    marginVertical: 5,
  },
  line: {
    width: '65%',
    alignSelf: 'center',
    borderBottomWidth: 1,

    backgroundColor: '#afafaf',
    marginTop: 10,
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
    fontSize: 20,
    color: '#000',
    fontWeight: '400',
    marginTop: 6,
    fontWeight: '600',
    paddingRight: 10,
  },
  endtext: {
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'space-around',
  },
});
export default Settings;