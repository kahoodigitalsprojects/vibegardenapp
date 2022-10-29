import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {StoryData} from '../../../componrnts';
import Images from '../../../constants';

const Story2 = () => {
  return (
    <View style={styles.main}>
      <View style={{alignSelf: 'center'}}>
        <StoryData
          Img={Images.BackGround.storybg3}
          storytext="
      You'll see we have tools for connecting to your light and we have tools for working with the beautifully tricky, sticky human stuff we've each decided to learn about along the way-like wounding, negative thought patterns, and habits that keep us small
          "
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // backgroundColor: '#1C5C2E',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Story2;
