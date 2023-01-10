import React from 'react';
import {View, StyleSheet, Text, ScrollView, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Header} from '../../../componrnts';
import {useBackButton} from '../../../hooks/BackHandler';

const PrivacyPolicy = ({navigation, route}) => {
  const {heading1} = route.params;

  //BackHandler
  const onBackPress = () => {
    navigation.goBack();
    return true;
  };
  useBackButton(navigation, onBackPress);
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        {/* <StatusBar animated={true} backgroundColor="#000" /> */}
        <View
          style={{
            marginVertical: 20,
            marginTop: 10,
            width: '90%',
            alignSelf: 'center',
          }}>
          <Header
            marginTop={-40}
            iconName="left"
            header2
            OnPress={() => navigation.goBack()}
            headertext={heading1}
            fontSize={25}
            color="#191919B8"
          />
        </View>
        <View
          style={{
            marginTop: 15,
            width: '85%',
            alignSelf: 'center',
            marginVertical: 20,
          }}>
          <Text
            style={{
              textAlign: 'left',
              fontSize: 14,
              color: '#000000',
              fontFamily: 'BrandonGrotesque-Regular',
            }}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diaro eos et accusam et justo duo
            dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
            sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
          </Text>
          <Text
            style={{
              textAlign: 'left',
              fontSize: 14,
              color: '#000000',
              fontFamily: 'BrandonGrotesque-Regular',
            }}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diaro eos et accusam et justo duo
            dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
            sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
          </Text>
          <Text
            style={{
              textAlign: 'left',
              fontSize: 14,
              fontFamily: 'BrandonGrotesque-Regular',
              color: '#000000',
            }}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. Lorem ipsum dolor sit amet, Lorem ipsum
            dolor sit amet, consetetur sadipscing elitr,
          </Text>
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
});
export default PrivacyPolicy;
