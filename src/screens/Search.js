// the back button needs to take you to the page you were on, and the search bar now needs to be functionable. 

import React from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import { StatusBar } from 'react-native';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import TopMenuBar from '../components/TopMenuBar.js';
import { NavigationContainer } from '@react-navigation/native';
import Background from '../components/Background.js';
import BottomMenuBar from '../components/BottomMenuBar.js';
import { useNavigation } from '@react-navigation/native';

import LeftArrowTextHeader from '../components/Section Headers/LeftArrowTextHeader.js';
import TopPerformers from '../components/BrowseFundsTopPerformersHeaders.js';
import BrowseFundsHeader from '../components/BrowseFundsHeader.js';
import BrowseFunds from '../components/BrowseFunds.js';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function Search () {

  const Screen = 'Search';

  const navigation = useNavigation();


  SplashScreen.preventAutoHideAsync(); 

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const [fontsLoaded] = useFonts({
    'Urbanist-Bold': require('../assets/fonts/Urbanist-Bold.ttf'),
    'Urbanist-SemiBold': require('../assets/fonts/Urbanist-SemiBold.ttf'),
    'Urbanist-Medium': require('../assets/fonts/Urbanist-Medium.ttf'),
    'Urbanist-Regular': require('../assets/fonts/Urbanist-Regular.ttf'),
  });

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    bottomMenuBarContainer:{
      position: 'absolute',
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: -5,
      marginLeft: 5,
    },
  });

  return ( 
    <NavigationContainer>
    <Background>
        <StatusBar barStyle="light-content" backgroundColor="#000" />
      <View style={styles.container} onLayout={onLayoutRootView}>
        <TopMenuBar screen = {Screen}/>
        
        <View style={styles.bottomMenuBarContainer}>
          <BottomMenuBar/>
        </View>
      </View>
    </Background>
    </NavigationContainer>
  );
};

