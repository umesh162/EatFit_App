import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import React, {Component} from 'react';
import Navigation from './Navigation/Navigation';
import {SCREENHEIGHT, SCREENWIDTH} from './constant/Responsive';

export class index extends Component {
  render() {
    return (
      <SafeAreaView
        style={{ height: SCREENHEIGHT, width: SCREENWIDTH}}>
          <View >
          <Navigation />
          </View>
       
      </SafeAreaView>
    );
  }
}

export default index;
