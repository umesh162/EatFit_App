import {SafeAreaView, Text, View} from 'react-native';
import React, {Component} from 'react';
import HeaderImg from '../asset/svg/eatfit-logo-horizontal.svg';
import {VectorIcon} from '../constant/VectorIcon';
import {SCREENWIDTH} from '../constant/Responsive';
export class Navigation extends Component {
  render() {
    return (
      <View
        style={{
          height: '25%',
          flexDirection: 'row',
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: 'gray',
        }}>
        <View style={{height: 35, flex: 1}}>
          <HeaderImg style={{}} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: 60,
            width: '40%',
            alignItems: 'center',
          }}>
          <VectorIcon name="location" type="EvilIcons" size={28} />
          <Text style={{flex: 1}}>Select Location</Text>
        </View>
      </View>
    );
  }
}

export default Navigation;
