import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/AntDesign';
import {Tooltip} from 'react-native-elements';
import Images from '../../constants';

const Reset = () => {
  const [toolTipVisible, setToolTipVisible] = useState(false);
  return (
    <View style={styles.main}>
      <View
        style={{
          marginVertical: 20,
          marginTop: 20,
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{width: 112, height: 80, marginTop: 10}}>
          <Image source={Images.Imgs.pic1} />
        </View>
        <View style={{margin: 15, marginVertical: 10}}>
          <View style={{marginVertical: 3}}>
            <Text style={{color: '#1C5C2E', fontSize: 16, fontWeight: '500'}}>
              Calm and Rest
            </Text>
          </View>

          <View style={{marginVertical: 3}}>
            <Text style={{color: '#000'}}>The session is about becomi...</Text>
          </View>

          <View style={{marginVertical: 3}}>
            <Text style={{color: ''}}>3 min * Date: 10-17-2022</Text>
          </View>
        </View>
        <View style={{}}>
          <View style={{}}>
            <Icon name="dots-three-horizontal" size={22} />
          </View>
          <View style={{marginTop: 40}}>
            <Icon name="heart" size={22} color="red" />
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    // backgroundColor: 'pink',
  },
});
export default Reset;
