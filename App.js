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
  TextInput
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'white' }}>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Image style={{
              flex: 1, flexDirection: 'row',
              width: "100%",
              height: "100%"
            }} resizeMode='contain'
              source={require('./src/assets/img/kids-study.jpg')} />
          </View>
        </View>
        <View style={{ flex: 2, flexDirection: 'row', backgroundColor: 'white', borderRadius: 20 }}>
          <View style={{ flex: 1, flexDirection: 'column' }}>
            <View>
              <Text style={{ color: 'black', fontSize: 40, fontWeight: 'bold', textAlign: 'center' }}> Welcome Back</Text>
            </View>
            <View>
              <Text style={{ color: 'gray', fontSize: 15, fontWeight: 'bold', textAlign: 'center' }}>Login to your account</Text>

            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}/>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
