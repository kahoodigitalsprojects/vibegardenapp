import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const StoryData = props => {
  return (
    <View>
      {props.storytext1 && (
        <View style={{width: '90%', alignSelf: 'center', marginVertical: 10}}>
          <Text style={[styles.txt, {textAlign: 'left'}]}>
            {props.storytext}
          </Text>
        </View>
      )}
      {props.storyimage && (
        <View style={styles.img}>
          <Image source={props.Img} />
        </View>
      )}
      {props.storytext2 && (
        <View style={{width: '90%', alignSelf: 'center'}}>
          <Text style={styles.txt}>{props.storytext}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  img: {alignSelf: 'center'},
  txt: {
    marginVertical: 15,
    textAlign: 'center',
    fontSize: 14,
    color: '#1C5C2E',
    letterSpacing: 0.5,
  },
});

export {StoryData};
