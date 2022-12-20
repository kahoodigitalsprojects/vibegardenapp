import React, {isValidElement, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  StatusBar,
  Image,
  TouchableOpacity,
  Modal,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Tooltip from 'react-native-walkthrough-tooltip';
import Images from '../../constants';
import {SeeAll} from '../SeeAll';

const Reset = ({Iname, iconname, icontrue, imgtrue, plustimggreen}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [toolTipVisible, setToolTipVisible] = useState(false);
  return (
    <>
      <View style={styles.main}>
        <View
          style={{
            marginVertical: 20,
            marginTop: 20,
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              // marginVertical: 20,
              // marginTop: 20,
              width: '80%',
              flexDirection: 'row',
              // justifyContent: 'space-between',
            }}>
            <View style={{width: 112, height: 80, marginTop: 10}}>
              <Image source={Images.Imgs.pic1} />
            </View>
            <View style={{margin: 15, marginVertical: 10}}>
              <View style={{marginVertical: 3}}>
                <Text
                  style={{
                    color: '#1C5C2E',
                    fontSize: 16,
                    fontWeight: '500',
                    fontFamily: 'Brandon_reg',
                  }}>
                  Calm and Rest
                </Text>
              </View>

              <View style={{marginVertical: 3}}>
                <Text style={{color: '#000', fontFamily: 'Brandon_reg'}}>
                  The session is about becomi...
                </Text>
              </View>

              <View style={{marginVertical: 3}}>
                <Text style={{color: '', fontSize: 12}}>
                  3 min * Date: 10-17-2022
                </Text>
              </View>
            </View>
          </View>
          <View style={{width: '10%'}}>
            <View style={styles.container}>
              <View style={styles.centeredView}>
                <Modal
                  // animationType="slide"
                  transparent={true}
                  visible={modalVisible}
                  onRequestClose={() => {
                    // Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                  }}>
                  <View
                    style={{
                      width: '18%',
                      margin: 5,
                      alignSelf: 'flex-end',
                      marginTop: 150,
                    }}>
                    <TouchableOpacity
                      onPress={() => setModalVisible(!modalVisible)}
                      style={{
                        backgroundColor: '#fff',
                        width: 66,
                        height: 36,
                        marginTo4: 5,
                        borderRadius: 10,
                        marginRight: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                        padding: 1,
                      }}>
                      <Icon2 name="delete" size={12} />
                      <Text style={{fontSize: 12, fontFamily: 'Brandon_reg'}}>
                        Remove
                      </Text>
                    </TouchableOpacity>
                  </View>
                </Modal>
              </View>
              <TouchableOpacity
                style={[{marginTop: 8}, styles.button]}
                onPress={() => setModalVisible(true)}>
                <Icon name="dots-three-horizontal" size={22} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={{marginTop: 35}}>
              {icontrue && (
                <View style={{marginLeft: 4}}>
                  <Icon2 name="heart" size={16} color="red" />
                </View>
              )}
              {imgtrue && (
                <View
                  style={{
                    marginLeft: 4,
                    backgroundColor: '#1C5C2E',
                    borderRadius: 100,
                    width: 14,
                    height: 14,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View style={{}}>
                    <Icon2 name="plus" size={12} color="#fff" />
                  </View>
                </View>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    // backgroundColor: 'pink',
  },
});
export default Reset;
