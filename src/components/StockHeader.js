// In here:
// This is the top menu bar that contains all the top navigation componenets.
// It needs to include the black background behind the menu bar (see figma file).
import React from 'react';
import { Image, Platform } from 'react-native';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { globalColors } from '../styles/Colors.js';
import { globalFonts } from '../styles/Fonts.js';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LogoSelect from '../assets/logoRequire.js';


const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    header: {
      // width: screenWidth,
      // paddingLeft: 24,
      // paddingRight: 24,
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
      height: 60,
      marginTop: 20,
      paddingBottom: 20,
      borderBottomColor: globalColors.dark._3.color,
      borderBottomWidth: 1,
      backgroundColor: 'rgba(27,172,75,0)',
    },
    subHeaderLeft: {
      flexDirection: 'row',
      alignItems: 'center',
      height: 55,
    },
    subHeaderRight: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      height: 55
    },

    textHeaderLeft:{
    justifyContent:"flex-start"    
    },

    textHeaderRight:{
    justifyContent:"flex-end"    
    },

    logoIcon: {
      width: 60,
      height: 60,
      resizeMode: 'contain'
    },
    arrowLeft: {
      width: 28,
      height: 28,
      resizeMode: 'contain'
    }
  });

  export default function StockHeader(params) {

    let stockImage = LogoSelect(params.stockName);
    

    let stockName = params.stockName;
    if (stockName.length > 10) { stockName = stockName.substring(0,9) + '...';
    }
    const stockInfo={
        Blackberry:{
            ticker:"BLCB",
            lastClose:83.33,},

        "Coca-Cola":{
            ticker:"KO",
            lastClose:213.34,
        }
    };//replace with backend calls

    let lastClose=stockInfo[params.stockName].lastClose.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");


    return (
        <View style={{ width: screenWidth, paddingLeft: 24, paddingRight: 24 }}>
          <View style={styles.header}>
            <View style={styles.subHeaderLeft}>
              <Image source={require('../assets/icons/ArrowLeft_Green.png')} style={[styles.arrowLeft, { marginRight: 16 }]} />
              <Image source={stockImage} style={[styles.logoIcon, { marginRight: 16 }]} />
          <View style={styles.textHeaderLeft}>
              <Text style={globalFonts.H6(globalColors.others.white.color)}>{stockName}</Text>
              <Text style={globalFonts.BodyMedium.Medium(globalColors.others.white.color)}>{stockInfo[params.stockName].ticker}</Text>
            </View> 
            </View>
            <View style={styles.subHeaderRight}>
              <Text style={globalFonts.BodyMedium.Medium(globalColors.others.white.color)}>Last close</Text>
              <Text style={globalFonts.H6(globalColors.others.white.color)}>${lastClose}</Text>
            </View>
          </View>
        </View>
      );
    }