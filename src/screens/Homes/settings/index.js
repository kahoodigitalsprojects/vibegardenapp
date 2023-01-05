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
import {Header} from '../../../componrnts';
import Images from '../../../constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header2 from '../../../componrnts/header2';
import {SafeAreaView} from 'react-native-safe-area-context';

const Settings = props => {
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <StatusBar animated={true} backgroundColor="#000" />
        <View style={{marginVertical: 10, width: '90%', alignSelf: 'center'}}>
          <Header2
            marginTop={-40}
            iconName="closesquareo"
            header2
            OnPress={() => props.navigation.navigate('me')}
            headertext="Erin's Settings"
            fontSize={20}
            color={'#191919B8'}
            flower
            img23={Images.Imgs.lotus1}
          />
          {/* <Header /> */}
        </View>

        <View style={{marginVertical: 10, marginTop: 80}}>
          <View style={styles.firstview}>
            <View style={styles.first}>
              <View style={{width: '100%', flexDirection: 'row'}}>
                <Text style={styles.textA}>Notification</Text>
                <View style={styles.line}></View>
              </View>
            </View>

            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('EmailNotification');
              }}
              style={[
                styles.row,
                {
                  width: '90%',
                  justifyContent: 'space-between',
                  marginTop: 20,
                },
              ]}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  source={Images.Icons.envelop1}
                  resizeMode="contain"
                  style={{width: 12, height: 12, margin: 5}}
                />

                <Text style={styles.text1}>Email Notification</Text>
              </View>
              <View style={{marginTop: 6}}>
                <Icon name="angle-right" color={'#1C5C2E'} size={23} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Pushnotification');
              }}
              style={[
                styles.row,
                {
                  width: '90%',
                  // marginTop: 10,
                  justifyContent: 'space-between',
                },
              ]}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  source={Images.Icons.notify}
                  resizeMode="contain"
                  style={{width: 12, height: 12, margin: 5}}
                />
                <Text style={styles.text1}>Push Notification</Text>
              </View>
              <View style={{marginTop: 6}}>
                <Icon name="angle-right" color={'#1C5C2E'} size={23} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.firstview}>
            <View style={styles.first}>
              <View style={{width: '100%', flexDirection: 'row'}}>
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
                  justifyContent: 'space-between',
                  marginTop: 20,
                },
              ]}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  source={Images.Icons.envelop1}
                  resizeMode="contain"
                  style={{width: 12, height: 12, margin: 5}}
                />
                <Text style={styles.text1}>Edit Email</Text>
              </View>
              <View style={{marginTop: 6}}>
                <Icon name="angle-right" color={'#1C5C2E'} size={23} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('EditScreen', {
                  itemId: 'Update Name',
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
                  justifyContent: 'space-between',
                },
              ]}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  source={Images.Icons.person}
                  resizeMode="contain"
                  style={{width: 12, height: 12, margin: 5}}
                />
                <Text style={styles.text1}>Edit Name</Text>
              </View>
              <View style={{marginTop: 6}}>
                <Icon name="angle-right" color={'#1C5C2E'} size={23} />
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
                  // alignSelf: 'center',
                  justifyContent: 'space-between',
                },
              ]}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  source={Images.Icons.lock}
                  resizeMode="contain"
                  style={{width: 12, height: 12, margin: 5}}
                />
                <Text style={styles.text1}>Change Password</Text>
              </View>
              <View style={{marginTop: 5}}>
                <Icon name="angle-right" color={'#1C5C2E'} size={23} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('ManageSubscription');
              }}
              style={[
                styles.row,
                {
                  width: '90%',
                  justifyContent: 'space-between',
                },
              ]}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  source={Images.Icons.video}
                  resizeMode="contain"
                  style={{width: 12, height: 12, margin: 5}}
                />
                <Text style={styles.text1}>Manage Subscription</Text>
              </View>
              <View style={{marginTop: 5}}>
                <Icon name="angle-right" color={'#1C5C2E'} size={23} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.row,
                {
                  width: '90%',
                  // alignSelf: 'center',
                  justifyContent: 'space-between',
                },
              ]}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  source={Images.Icons.logout}
                  resizeMode="contain"
                  style={{width: 15, height: 12, margin: 5}}
                />
                <Text style={styles.text1}>Logout</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.firstview}>
            <View style={styles.first}>
              <View style={{width: '90%', flexDirection: 'row'}}>
                <Text style={styles.textA}>Support</Text>
                <View style={styles.line}></View>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Contactus');
              }}
              style={[
                styles.row,
                {
                  width: '90%',
                  justifyContent: 'space-between',
                  marginTop: 20,
                },
              ]}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  source={Images.Icons.headphone}
                  resizeMode="contain"
                  style={{width: 15, height: 12, margin: 5}}
                />
                <Text style={styles.text1}>Contact us</Text>
              </View>
              <View style={{marginTop: 6}}>
                <Icon name="angle-right" color={'#1C5C2E'} size={23} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('PrivacyPolicy', {
                  heading1: 'Privacy Policy',
                });
              }}
              style={[
                styles.row,
                {
                  width: '90%',
                  justifyContent: 'space-between',
                },
              ]}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  source={Images.Icons.bars}
                  resizeMode="contain"
                  style={{width: 15, height: 12, margin: 5}}
                />

                <Text style={styles.text1}>Privacy Policy</Text>
              </View>
              <View style={{marginTop: 6}}>
                <Icon name="angle-right" color={'#1C5C2E'} size={23} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('PrivacyPolicy', {
                  heading1: 'Terms Of Uses',
                });
              }}
              style={[
                styles.row,
                {
                  width: '90%',
                  justifyContent: 'space-between',
                },
              ]}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  source={Images.Icons.folder}
                  resizeMode="contain"
                  style={{width: 15, height: 12, margin: 5}}
                />
                <Text style={styles.text1}>Terms of use</Text>
              </View>
              <View style={{marginTop: 6}}>
                <Icon name="angle-right" color={'#1C5C2E'} size={23} />
              </View>
            </TouchableOpacity>
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
  row: {
    flexDirection: 'row',
    marginVertical: 10,
    // marginVertical: 10,
  },
  first: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    // marginVertical: 20,
  },
  firstview: {
    width: '90%',
    alignSelf: 'center',
    // marginVertical:10
    // backgroundColor: 'green',
  },

  text1: {
    // fontSize: 18,
    fontSize: 14,
    color: '#191919B8',
    // marginTop: 5,
    // marginVertical: 10,
    fontFamily: 'BrandonGrotesque-Regular',
  },
  line: {
    width: '60%',
    borderBottomWidth: 0.5,
    borderColor: '#afafaa',
    // flex: 1,
    alignSelf: 'center',
    backgroundColor: 'green',
    marginTop: 8,
  },

  box: {
    width: 100,
    justifyContent: 'center',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 25,
    // elevation: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    elevation: 6,
  },
  textA: {
    width: '40%',
    fontSize: 20,
    color: '#000',
    fontWeight: '400',
    marginTop: 6,
    fontWeight: '600',
    paddingRight: 10,
    fontFamily: 'BrandonGrotesque-Medium',
  },
  endtext: {
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'space-around',
    fontFamily: 'BrandonGrotesque-Regular',
  },
});
export default Settings;
