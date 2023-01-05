import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  StatusBar,
  Platform,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Header, StoryData} from '../../../componrnts';
import Images from '../../../constants';

const BlueLotus = ({route, navigation}) => {
  const {Image1, newtext, Heading} = route.params;
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <StatusBar animated={true} backgroundColor="#000" />

        <View
          style={{
            // marginVertical: 10,
            marginTop: Platform.OS === 'ios' ? 0 : 10,
            width: '90%',
            alignSelf: 'center',
          }}>
          <Header
            header2
            marginTop={-40}
            iconName="arrowleft"
            color="#1C5C2E"
            fontSize={25}
            headertext={Heading}
            OnPress={() => navigation.goBack()}
          />
        </View>
        <View style={{marginTop: 10}}>
          <StoryData storytext1 storytext={newtext} storyimage Img={Image1} />
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
export default BlueLotus;
