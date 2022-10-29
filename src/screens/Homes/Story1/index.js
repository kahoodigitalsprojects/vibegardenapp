import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {StoryData} from '../../../componrnts';
import Images from '../../../constants';

const Story = () => {
  return (
    <View style={styles.main}>
      <View style={{alignSelf: 'center'}}>
        <StoryData
          Img={Images.BackGround.storybg1}
          storytext="Welcome, you infinitely radiant being of light in human clothing. We've been waiting for you. You have a powerful soul signature, a unique vibration. And whether you remember it or not, you've come to Earth at this time to offer your resonance."
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

export default Story;
