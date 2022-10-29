import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {StoryData} from '../../../componrnts';
import Images from '../../../constants';

const Story2 = () => {
  return (
    <View style={styles.main}>
      <View style={{alignSelf: 'center'}}>
        <StoryData
          Img={Images.BackGround.storybg2}
          storytext="
          AND. Embodying our fullness down here can be tricky! So with VibeBloom, we quest together. Kindling one another, as we employ joyful, powerful tools for coming home to ourselves and being all that we truly, uniquely are.
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
