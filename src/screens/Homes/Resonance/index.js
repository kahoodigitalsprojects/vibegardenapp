import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  ImageBackground,
  Switch,
  FlatList,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Header, Pinkbtn, StoryData, Switch1} from '../../../componrnts';
import {useBackButton} from '../../../hooks/BackHandler';
import Images from '../../../constants';

const Resonance = ({navigation}) => {
  const onBackPress = () => {
    navigation.goBack();
    return true;
  };
  useBackButton(navigation, onBackPress);

  const [isEnabled, setIsEnabled] = useState(false);
  const [data1, setData1] = useState();

  const data = [
    {
      Texts: 'Buddhism',
    },
    {Texts: 'Nature'},
    {Texts: 'Quntum Physics'},
    {Texts: 'Asteven Master'},
    {Texts: 'Plants'},
  ];

  return (
    <SafeAreaView style={styles.main}>
      <ImageBackground
        source={Images.BackGround.backgroundHue}
        resizeMode="stretch"
        style={styles.image}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <Header iconName="closesquareo" OnPress={() => navigation.goBack()} />
          <View style={styles.container}>
            <View style={{marginTop: 10}}>
              <Text style={styles.text}>Select Your Topic Resonance?</Text>
              <View style={styles.row}>
                <Text style={styles.text}>OR Try Our </Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('question2');
                  }}
                  style={styles.btn}>
                  <Text
                    style={{
                      color: '#fff',
                      margin: 10,
                      fontFamily: 'BrandonGrotesque-Regular',
                    }}>
                    Resonance Finder
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{marginVertical: 20}}>
                <FlatList
                  data={data}
                  renderItem={({item}) => {
                    return (
                      <View style={{flexDirection: 'row', marginVertical: 15}}>
                        <View styles={{}}>
                          <Switch1 marginRight={20} />
                        </View>
                        <View style={{marginTop: 3}}>
                          <Text
                            style={{
                              color: '#030303',
                              fontSize: 14,
                              fontFamily: 'BrandonGrotesque-Regular',
                            }}>
                            {item.Texts}
                          </Text>
                        </View>
                      </View>
                    );
                  }}
                />
              </View>
              <View style={{marginTop: 8, alignItems: 'center'}}>
                <Pinkbtn
                  shadow="rgba(0,0,0,0.5)"
                  onPress={() => {
                    navigation.navigate('question2');
                  }}
                  btntxt="Save"
                  width={'75%'}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
    // backgroundColor: 'pink',
  },
  container: {
    marginVertical: 10,
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
    // backgroundColor: 'yellow',
    marginVertical: 12,
  },
  text: {
    // backgroundColor: 'green',
    color: '#1C5C2E',
    fontWeight: '500',
    fontSize: 25,
    marginTop: 5,
    fontFamily: 'BrandonGrotesque-Medium',
  },
  btn: {
    backgroundColor: '#75997E',
    height: 44,
    width: 127,
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    shadowColor: '#000',
    elevation: 6,
    shadowOffset: {
      width: 0,
      height: 7,
    },
  },
  switchView: {
    // backgroundColor: 'green',
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    // paddingTop: 100,
  },
});
export default Resonance;
