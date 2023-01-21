import React from 'react';

import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import Index from './src';
import { SCREENHEIGHT, SCREENWIDTH } from './src/constant/Responsive';

const App = () => {
  return (
    <SafeAreaView style={{width:SCREENWIDTH,height:SCREENHEIGHT}}>
      <ScrollView>
        <Index />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
