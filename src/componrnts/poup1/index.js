import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Button, Overlay} from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import Images from '../../constants';

const PopUp = ({Visible, setVisible, onpress1, poup1, poup2}) => {
  const [state1, setState1] = useState(false);
  return (
    <>
      {poup1 && (
        <Overlay
          overlayStyle={{borderRadius: 20, elevation: 10, width: '85%'}}
          style={{}}
          // animationType="slide" // transparent={false}
          visible={Visible}
          onRequestClose={() => {
            // Alert.alert('Modal has been closed.');
            setVisible(Visible);
          }}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              You Will Be Charged<Text style={{color: '#1492E6'}}> $264</Text>{' '}
              For Yearly Package!
            </Text>
            <View
              style={{
                marginVertical: 10,
                alignItems: 'center',
                alignSelf: 'center',
              }}>
              <Image source={Images.Icons.card} />
              <Text style={[styles.modalText, {textAlign: 'center'}]}>
                Saved Cards
              </Text>
            </View>

            <View style={styles.btns}>
              <Text style={{}}>4860567867XXXXXX</Text>
              <Image source={Images.Icons.visa} style={{marginTop: 3}} />
            </View>
            <View style={styles.btns}>
              <TouchableOpacity
                style={[
                  styles.button,
                  styles.buttonClose,
                  {borderWidth: 1, backgroundColor: '#fff'},
                ]}
                onPress={setVisible}>
                <Text style={[styles.textStyle, {color: '#1C5C2E'}]}>
                  Hide Modal
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={onpress1}>
                <Text style={[styles.textStyle]}>Hide Modal</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.btns}>
              <Text style={{color: '#1492E6', fontSize: 16}}>Try New Card</Text>
              <Icon
                name="arrowright"
                size={15}
                color="#1492E6"
                style={{marginTop: 5, marginLeft: 3}}
              />
            </TouchableOpacity>
          </View>
        </Overlay>
      )}
      {poup2 && (
        <Overlay
          overlayStyle={{borderRadius: 20, elevation: 10, width: '85%'}}
          style={{}}
          // animationType="slide" // transparent={false}
          visible={Visible}
          onRequestClose={() => {
            // Alert.alert('Modal has been closed.');
            setVisible(Visible);
          }}>
          <View style={styles.modalView}>
            <View
              style={{
                marginVertical: 10,
                alignItems: 'center',
                alignSelf: 'center',
              }}>
              <Image source={Images.Icons.badge} />
              <Text style={styles.modalText}>
                Payment Processed Successfully
              </Text>
              <Text
                style={[
                  styles.modalText,
                  {textAlign: 'center', color: '#2196F3'},
                ]}>
                1 Year Upgraded
              </Text>
            </View>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={onpress1}>
              <Text style={[styles.textStyle]}>Done</Text>
            </TouchableOpacity>
          </View>
        </Overlay>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  modalView: {
    width: '80%',
    margin: 20,
    alignItems: 'center',
    alignSelf: 'center',
    // backgroundColor: 'white',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
    // elevation: 5,
  },
  button: {
    width: 90,
    height: 39,
    borderRadius: 15,
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btns: {
    flexDirection: 'row',
    padding: 5,
  },

  buttonClose: {
    margin: 10,
    // backgroundColor: '#2196F3',
    backgroundColor: '#1C5C2E',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 10,
    color: '#000',
  },
});

export {PopUp};