import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {SearchBar} from 'react-native-elements';

const Searcbart1 = props => {
  return (
    <View>
      <TouchableOpacity onPress={props.onpress1}>
        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            marginTop: 20,
            borderRadius: 15,
            border: ' none',
          }}>
          <SearchBar
            clearIcon={{
              type: 'material-community',
              color: 'green',
              name: 'close',
            }}
            searchIcon={{
              type: 'material-community',
              color: 'green',
              name: 'magnify',
            }}
            showLoading={false}
            leftIconContainerStyle={{borderRightWidth: 0.8}}
            platform={Platform.OS}
            // clearIcon={true}
            onChangeText={text => params.handleSearch(text)}
            onClearText={() => console.log('onClearText')}
            placeholder="Search.."
            cancelButtonTitle="Cancel"
            lightTheme
            containerStyle={{backgroundColor: 'none', border: 'none'}}
            inputContainerStyle={styles.input}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Searcbart1;

const styles = StyleSheet.create({
  input: {
    width: '100%',

    flexDirection: 'row',
    // justifyContent: 'space-between',
    // borderWidth: 0.5,
    borderRadius: 10,
    backgroundColor: '#BCCFC1',
    opacity: 0.5,
    // alignSelf: 'flex-start',
    // borderColor: '#1C5C2E',
    // marginVertical: 20,
    // marginTop: 20,
  },
});
