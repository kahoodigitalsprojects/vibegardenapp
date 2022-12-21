import React from 'react';
import {View, StyleSheet, Text, ScrollView, StatusBar} from 'react-native';
import {Header, StoryData} from '../../../componrnts';

const PrivacyPolicy = ({navigation, route}) => {
  const {heading1} = route.params;
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{flexGrow: 1}}>
      <StatusBar animated={true} backgroundColor="#000" />
      <View style={styles.main}>
        <View
          style={{
            marginVertical: 20,
            marginTop: 10,
            width: '90%',
            alignSelf: 'center',
          }}>
          <Header
            iconName="left"
            header2
            OnPress={() => navigation.navigate('Homes', {screen: 'settings'})}
            headertext={heading1}
            fontSize={25}
            color="#000"
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
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // backgroundColor: 'pink',
  },
});
export default PrivacyPolicy;
