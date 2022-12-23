import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
  FlatList,
} from 'react-native';
import {Button, Overlay} from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import Images from '../../constants';
import {Header} from '../header';

const Modaldata = ({
  Visible,
  setVisible,
  onpress1,
  onPress,
  poup1,
  poup2,
  poup3,
  onpressA,
  btntext1,
  btntext2,
}) => {
  const [state1, setState1] = useState(false);

  const data = () => [{}, {}, {}];
  return (
    <>
      <Overlay
        overlayStyle={{width: '100%', height: '100%'}}
        style={styles.modalView}
        // animationType="slide" // transparent={false}
        visible={Visible}
        onRequestClose={() => {
          // Alert.alert('Modal has been closed.');
          setVisible(Visible);
        }}>
        <View style={{flex: 1, backgroundColor: '#ffff'}}>
          <View>
            <Header />
            <View>
              <SafeAreaView style={styles.main}>
                <TouchableOpacity
                  onPress={onPress}
                  // onPress={search}
                  style={{
                    marginTop: 25,
                    width: 20,
                    // width: '90%',
                    alignSelf: 'flex-end',
                    justifyContent: 'flex-end',
                  }}>
                  <Icon name="close" size={25} color="#1C5C2E" />
                </TouchableOpacity>

                <View style={styles.container}>
                  <Text
                    style={{
                      fontSize: 25,
                      fontWeight: 'bold',
                      color: '#1C5C2E',
                      marginTop: -30,
                      fontFamily: 'BrandonGrotesque-Regular',
                    }}></Text>
                  <FlatList
                    data={data}
                    renderItem={({item, index}) => {
                      return (
                        <TouchableOpacity
                          onPress={item.onPress}
                          style={{
                            alignItems: 'center',
                            alignSelf: 'center',
                            paddingVertical: 10,
                            marginTop: 15,
                          }}>
                          <Text
                            style={{
                              fontSize: 18,
                              color: '#000',
                              fontFamily: 'BrandonGrotesque-Regular',
                            }}></Text>
                        </TouchableOpacity>
                      );
                    }}
                  />
                </View>
              </SafeAreaView>
            </View>
          </View>
        </View>
      </Overlay>
    </>
  );
};

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
  },
});

export default Modaldata;
