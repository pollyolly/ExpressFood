
import React from 'react';
import {View, Text, StyleSheet, StatusBar, SafeAreaView} from 'react-native';
import {colors, parameters}  from './src/global/styles';
import AuthStack from './src/navigation/AuthStack';
import AppStack from './src/navigation/AppStack';
import ClientStack from './src/navigation/ClientStack';
import RootNavigator from './src/navigation/RootNavigator';
import { SignInContextProvider } from './src/contexts/authContext'

export default function App(){
  return(
      <View style={styles.container}>
          <StatusBar
            barStyle='light-content'
            backgroundColor = {colors.statusbar}
          />
          {/* <AppStack/> */}
          <SignInContextProvider>
            <RootNavigator />
          </SignInContextProvider>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})