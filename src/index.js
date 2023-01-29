import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import React, {Component} from 'react';
import Navigation from './Navigation/Navigation';
import {SCREENHEIGHT, SCREENWIDTH} from './constant/Responsive';
import StatusList from './component/StatusList';
import ImageCarousel from './component/ImageCarousel';

const images = [
  {source: require('./asset/image/banner/banner1.jpeg')},
  {source: require('./asset/image/banner/banner2.jpeg')},
  {source: require('./asset/image/banner/banner3.jpeg')},
  {source: require('./asset/image/banner/banner4.jpeg')},
  {source: require('./asset/image/banner/banner5.jpeg')},
  {source: require('./asset/image/banner/banner6.jpeg')},
  {source: require('./asset/image/banner/banner7.jpeg')},
];

export class index extends Component {
  render() {
    return (
      <SafeAreaView style={{height: SCREENHEIGHT, width: SCREENWIDTH}}>
        <View>
          <Navigation />
          <StatusList />
          <ImageCarousel images={images} autoPlay={true} />
        </View>
      </SafeAreaView>
    );
  }
}

export default index;
