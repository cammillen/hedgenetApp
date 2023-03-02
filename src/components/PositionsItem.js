// This is the card which shows either the portfolio value, or the stock price, and whether it is up or down and the % change.

import React from 'react';
import { Image } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { globalColors } from '../styles/Colors.js';
import { globalFonts } from '../styles/Fonts.js';


const styles = StyleSheet.create({
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 32,
    marginTop: 30,
    marginBottom: 20,
  },
  subHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 24,
    width: 105
  },
  subHeaderRight: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: 24,
    width: 105
  },
  logoIcon: {
    width: 60,
    height: 60,
    resizeMode: 'contain'
}
});

export default function PositionsItem(params) {
  let name = params.stockName;

  //CHECK OUTPUT FIRST BEFORE UNCOMMENTING THE FOLLOWING
  let imagePath = '../assets/stocks/Google.png'; //COMMENT OUT AND COMMENT IN BELOW
  //let imagePath = '../assets/stocks/'+ name + '.png';
  //imagePath = '../assets/stocks/Google.png'; //TO DEMONSTRATE THAT EVEN IF YOU REDEFINE IT AS A STRING, IT STILL DOESN'T WORK
  //let stockImage = require(imagePath);
  
  console.log(typeof ('../assets/stocks/'+ name + '.png'), '../assets/stocks/'+ name + '.png')
  console.log(imagePath);
  //TO DEMONSTRATE THEY'RE THE SAME

  let stockImage = require('../assets/stocks/Google.png');
  //let stockImage = require(imagePath);

  //IGNORE EVERYTHING BELOW




  //let graphImage = require('../assets/graphs(delete)/ExampleGraph.png');
  //let stockValue = (params.userShares * params.shareValue).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  //let percentageGrowth = "+ " + ((params.shareValue - params.previousValue)/params.previousValue).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//
  //if (percentageGrowth[2] == '-') {
  //  percentageGrowth = percentageGrowth.replace('-','');
  //  percentageGrowth = percentageGrowth.replace('+','-');
  //}
//
  return (
    <View style={styles.header}>
     <Image source={stockImage} style={[styles.logoIcon, { marginLeft: 24, marginRight: 16}]} />
    </View>
  );
  //    <View style={styles.subHeaderLeft}>
  //      <Text style={globalFonts.H6(globalColors.others.white.color)}>{params.stockName}</Text>
  //      <Text style={globalFonts.body.Medium.semiBold(globalColors.others.white.color)}>{params.userShares} shares</Text>
//
  //    </View>
  //    <Image source={stockImage} style={[styles.logoIcon, { marginLeft: 24}]} />
//
  //    <View style={styles.subHeaderRight}>
  //      <Text style={globalFonts.H6(globalColors.status.success.color)}>Recently</Text>
  //      <Image source={graphImage} style={[styles.arrowsIcon, { marginLeft: 12}]} />
  //    </View>
  //  </View>
  //);
}

