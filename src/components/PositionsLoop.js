// This function loops over provided stocks and calls PositionsIte function

import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import PositionsItem from './PositionsItem.js';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'center',
  }
});

export default function PositionsLoop(params) {

    //Replace with backend calls!
    let temporaryStockValues = {
      'Advanced Micro Devices': {userShares:23.629, shareValue:936.34, previousValue:889.04}, //use quotation mark notation if variable name invalid symbol
      Alibaba: {userShares:23.629, shareValue:936.34, previousValue:889.04},
      Amazon: {userShares:23.629, shareValue:936.34, previousValue:889.04},    
      Apple: {userShares:23.629, shareValue:936.34, previousValue:889.04},
      Blackberry: {userShares:23.629, shareValue:936.34, previousValue:889.04},
      'Coca-Cola': {userShares:20.69, shareValue:983.21, previousValue:964.03},
      Dell: {userShares:23.629, shareValue:936.34, previousValue:889.04},
      Google: {userShares:0.17384, shareValue:96972.79, previousValue:93377.74},
      LG: {userShares:23.629, shareValue:936.34, previousValue:889.04},
      Meta: {userShares:23.629, shareValue:936.34, previousValue:889.04},
      Microsoft: {userShares:23.629, shareValue:936.34, previousValue:889.04},
      Netflix: {userShares:0.19375, shareValue:88966.84, previousValue:87316.56},
      Sony: {userShares:23.629, shareValue:936.34, previousValue:889.04},
      Spotify: {userShares:23.629, shareValue:936.34, previousValue:889.04},
      Tesla: {userShares:23.629, shareValue:936.34, previousValue:889.04},  
      Twitter: {userShares:23.629, shareValue:936.34, previousValue:889.04},
      Virgin: {userShares:23.629, shareValue:936.34, previousValue:889.04},
    };
    
    let positions = [];
    params.stocks.forEach(element => positions.push(
    <PositionsItem key = {element} stockName={element} userShares={temporaryStockValues[element].userShares} shareValue={temporaryStockValues[element].shareValue} previousValue={temporaryStockValues[element].previousValue} />
    ));

  return (
    <ScrollView alwaysBounceVertical={true}>
    <View style={styles.container}>
        {positions}
    </View>
    </ScrollView>
    );
}