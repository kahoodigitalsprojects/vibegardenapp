import React, {useState} from 'react';
import {StyleSheet, Switch} from 'react-native';

const Switch1 = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [data1, setData1] = useState();

  return (
    <Switch
      trackColor={{false: '#75997E', true: '#1C5C2E'}}
      value={isEnabled}
      onValueChange={() => setIsEnabled(!isEnabled)}
    />
  );
};

const styles = StyleSheet.create({});
export {Switch1};
