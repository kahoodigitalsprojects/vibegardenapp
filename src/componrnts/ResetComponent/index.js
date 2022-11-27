import React, { isValidElement, useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  StatusBar,
  Image,
  TouchableOpacity,
  Modal,
  TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Tooltip from "react-native-walkthrough-tooltip";
import Images from '../../constants';
import { SeeAll } from '../SeeAll';

const Reset = ({ helo }) => {
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
          <View style={{ width: 112, height: 80, marginTop: 10 }}>
            <Image source={Images.Imgs.pic1} />
          </View>
          <View style={{ margin: 15, marginVertical: 10 }}>
            <View style={{ marginVertical: 3 }}>
              <Text style={{ color: '#1C5C2E', fontSize: 16, fontWeight: '500' }}>
                Calm and Rest
              </Text>
            </View>

            <View style={{ marginVertical: 3 }}>
              <Text style={{ color: '#000' }}>The session is about becomi...</Text>
            </View>

            <View style={{ marginVertical: 3 }}>
              <Text style={{ color: '' }}>3 min * Date: 10-17-2022</Text>
            </View>
          </View>
          <View style={{}}>
            <View style={styles.container}>
              <View style={styles.centeredView}>
                <Modal
                  // animationType="slide"
                  transparent={true}
                  visible={modalVisible}
                  onRequestClose={() => {
                    // Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                  }}
                >
                  <View style={{
                    width: '15%', margin: 5,
                    alignSelf: 'flex-end', marginTop: 140,
                  }}>
                    <TouchableOpacity
                      onPress={() => setModalVisible(!modalVisible)}
                      style={{
                        backgroundColor: '#fff', height: 30, marginTop: 5,
                        borderRadius: 10, justifyContent: 'center', alignItems: 'center',
                        flexDirection: 'row',
                        padding: 5

                      }}>
                      <Icon2 name="delete" size={12} />
                      <View style={{ marginLeft: 6 }}>

                        <Text style={{ fontSize: 10 }}>Hello</Text>
                      </View>

                    </TouchableOpacity>
                  </View>
                </Modal>

              </View>
              <TouchableOpacity
                style={[{ marginTop: 5 },
                styles.button]}
                onPress={() => setModalVisible(true)}
              >
                <Icon name="dots-three-horizontal" size={22} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={{ marginTop: 35 }}>
              <Icon name="heart" size={22} color="red" />
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
