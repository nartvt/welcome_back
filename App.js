/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const widthDevice = Dimensions.get('window').width;
const heightDevice = Dimensions.get('window').height;

const App = () => {
  return (
    <>
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'white' }}>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Image style={{ flex: 1, flexDirection: "row", height: heightDevice / 3 }} resizeMode='stretch' source={require('./src/assets/img/kids-study.jpg')} />
          </View>
        </View>
        <View style={{ flex: 2, flexDirection: 'row', marginTop: '-5%' }}>
          <View style={{
            flex: 1, flexDirection: 'column',
            backgroundColor: 'white',
            alignItems: 'center',
            borderRadius: 20
          }}>
            <View style={{ flex: 1, padding: 15, alignItems: 'center', marginLeft: '15%', marginRight: '15%', marginTop: '10%', }}>
              <View>
                <Text style={{ color: 'black', fontSize: 40, fontWeight: 'bold' }}> Welcome Back</Text>
              </View>
              <View>
                <Text style={{ color: 'gray', fontSize: 15, fontWeight: 'bold' }}>Login to your account</Text>
              </View>
              <View style={{ marginTop: '15%' }}>
                <View style={{ backgroundColor: '#BBBBBB', borderRadius: 21 }}>
                  <TextInput style={styles.textInput}
                    placeHolderStyle={styles.placeHolderStyle}
                    underlineColorAndroid="transparent"
                    placeholder="Email" />
                </View>
                <View style={{ marginTop: '5%', backgroundColor: '#BBBBBB', borderRadius: 21 }}>
                  <TextInput style={styles.textInput}
                    placeHolderStyle={styles.placeHolderStyle}
                    underlineColorAndroid="transparent"
                    placeholder="Password"
                  />
                </View>
              </View>
              <View style={{ marginTop: '15%' }}>
                <TouchableOpacity>
                  <LinearGradient style={{
                    borderRadius: 21,
                    padding: 10, width: widthDevice / 1.1,
                    alignItems: 'center',
                    backgroundColor: 'orange'
                  }}
                    colors={['#FF2730', '#FF8B3B']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                  >

                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Login</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
              <View style={{ marginTop: '5%' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'grey', height: 40 }}>Forgot your password ?</Text>
              </View>
              <View style={styles.container, { flexDirection: 'row', width: widthDevice / 2, marginTop: '35%', marginRight: '-25%' }}>
                <View>
                  <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'grey', height: 40 }}> Don't have an account? </Text>
                </View>
                <View>
                  <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'orange', height: 40 }}> Sign up </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    marginTop: 7,
    marginLeft: 15,
    fontSize: 20,
    height: 40,
    color: '#1C1C1C',
    fontWeight: 'bold',
    width: widthDevice / 1.1,
  },
  viewStyle: {
    marginLeft: '10%',
    paddingLeft: '5%',
  },
  placeHolderStyle: {
    fontFamily: 'Arial',
    fontSize: 50,
  },
});

export default App;
