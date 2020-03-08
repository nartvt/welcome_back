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
            <View style={{ flex: 1, alignItems: 'center', marginTop: '10%', }}>
              <View>
                <Text style={{ color: 'black', fontSize: 40, fontWeight: 'bold' }}> Welcome Back</Text>
              </View>
              <View>
                <Text style={{ color: 'gray', fontSize: 15, fontWeight: 'bold' }}>Login to your account</Text>
              </View>
              <View style={{ marginLeft: '15%', marginTop: '15%' }}>
                <View>
                  <TextInput style={styles.textInput}
                    placeHolderStyle={styles.placeHolderStyle}
                    underlineColorAndroid="transparent"
                    placeholder="Email" />
                </View>
                <View>
                  <TextInput style={styles.textInput}
                    placeHolderStyle={styles.placeHolderStyle}
                    underlineColorAndroid="transparent"
                    placeholder="Password"
                  />
                </View>
              </View>
              <View style={{ marginTop: '15%' }}>
                <TouchableOpacity>
                  <View style={{
                    padding: 15, width: widthDevice / 1.1,
                    alignItems: 'center',
                    backgroundColor: '#FF9900',
                    borderRadius: 10
                  }}>
                    <Text>Login</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{ marginTop: '5%' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'grey', height: 40 }}>Forgot your password ?</Text>
              </View>
              <View style={{ width: widthDevice / 2, marginTop: '15%', flexDirection: 'row' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'grey', height: 40 }}>
                  Don't have an account?
                  </Text>
                <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'orange', height: 40 }}>
                  Sign up
                  </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  textInput: {
    fontSize: 20,
    height: 40,
    color: '#1C1C1C',
    fontWeight: 'bold',
    borderColor: '#1C1C1C',
    width: widthDevice,
    borderRadius: 20,
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
