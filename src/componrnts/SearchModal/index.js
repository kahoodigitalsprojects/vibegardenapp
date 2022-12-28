import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {Overlay} from 'react-native-elements';
import Searcbart1 from '../searchbar1';
import {SafeAreaView} from 'react-native-safe-area-context';
import Images from '../../constants';
import Search2 from '../../screens/Homes/search2';
const SearchModal = ({visible, setVisible, navigation}) => {
  const [isTyping, setIsTyping] = useState(false);
  return (
    <Overlay
      overlayStyle={{
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
        padding: 0,
      }}
      animationType="slide"
      visible={visible}
      onRequestClose={() => {
        setVisible(visible);
      }}>
      <View style={{marginVertical: 15}} />

      {isTyping ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <Searcbart1
            setIsTyping={setIsTyping}
            onPressLeft={() => {
              setVisible(false);
              setIsTyping(false);
            }}
            onPressRight={() => {
              setVisible(false);
              setIsTyping(false);
            }}
          />
          <Search2 navigation={navigation} />
        </ScrollView>
      ) : (
        <>
          <Searcbart1
            setIsTyping={setIsTyping}
            onPressLeft={() => {
              setVisible(false);
              setIsTyping(false);
            }}
            onPressRight={() => {
              setVisible(false);
              setIsTyping(false);
            }}
          />

          <View style={styles.container}>
            <View style={{width: 80, height: 80, marginTop: -50}}>
              <Image
                source={Images.Logos.logo1}
                resizeMode="contain"
                style={{width: '100%', height: '100%'}}
              />
            </View>
            <Text
              style={{
                color: '#323232',
                fontSize: 18,
                lineHeight: 35,
                marginTop: 20,
                textAlign: 'center',
                fontFamily: 'BrandonGrotesque-Regular',
              }}>
              Search Tools , And{'\n'}Groundwork Videos
            </Text>
          </View>
        </>
      )}
    </Overlay>
  );
};

export default SearchModal;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
