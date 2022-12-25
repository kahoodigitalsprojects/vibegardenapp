import React, { useState } from 'react';
import {

  StyleSheet,
  Text,
  View,
  TouchableOpacity,

} from 'react-native';
import { Button, Overlay } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import Images from '../../constants';
import { Header } from '../header';

const Modaldata = ({
  Visible,
  setVisible,
  onpress,
  onpress1,
  onPress,
  headtext,
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
  text7,
  text8,
  text9,
  text10,
  text11,
  text12,
}) => {
  const [state1, setState1] = useState(false);
  return (
    <>

      <Overlay
        overlayStyle={{ height: '100%', width: '100%' }}
        style={{}}
        // animationType="slide" // transparent={false}
        visible={Visible}
        onRequestClose={() => {
          // Alert.alert('Modal has been closed.');
          setVisible(Visible);
        }}>
        <View style={{ paddingTop: 15 }}>
          <View style={{
            alignSelf: 'flex-end',
          }}>
            <TouchableOpacity style={{ alignSelf: 'flex-end' }}
              onPress={onPress}>
              <Icon name="close" size={25} color="#1C5C2E" />
            </TouchableOpacity>
          </View>

          <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.text}>{headtext}</Text>
            <View style={{ marginVertical: 20 }}>
              <TouchableOpacity onPress={onpress}>
                <Text style={styles.text1}>{text1}</Text>
              </TouchableOpacity>
              <Text style={styles.text1}>{text2}</Text>
              <TouchableOpacity onPress={onpress1}>
                <Text style={styles.text1}>{text3}</Text>
              </TouchableOpacity>
              <Text style={styles.text1}>{text4}</Text>
              <Text style={styles.text1}>{text5}</Text>
              <Text style={styles.text1}>{text6}</Text>
              <Text style={styles.text1}>{text7}</Text>
              <Text style={styles.text1}>{text8}</Text>
              <Text style={styles.text1}>{text9}</Text>
              <Text style={styles.text1}>{text10}</Text>
              <Text style={styles.text1}>{text11}</Text>
              <Text style={styles.text1}>{text12}</Text>
            </View>

          </View>
        </View>
      </Overlay>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#1C5C2E", fontSize: 25, marginTop: -20,
    textAlign: 'center', fontFamily: 'BrandonGrotesque-Bold',
  },
  text1: {
    color: "#030303", fontSize: 18,
    textAlign: 'center', marginVertical: 15,
    fontFamily: 'BrandonGrotesque-Regular',
  }
});

export default Modaldata;


