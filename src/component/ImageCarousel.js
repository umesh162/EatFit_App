import {FlatList, Image, Text, View} from 'react-native';
import React, {Component} from 'react';
import {getResHeight, getResWidth} from '../constant/Responsive';

export class ImageCarousel extends Component {
  render() {
    return (
      <View
        style={{
          paddingVertical: getResHeight(5),
        }}>
        {console.log(this.props.images)}
        <FlatList
          horizontal
          data={this.props.images}
          style={{
            marginLeft: getResWidth(5),
          }}
          keyExtractor={(item, index) => index}
          ItemSeparatorComponent={() => (
            <View
              style={{
                padding: getResWidth(5),
              }}
            />
          )}
          renderItem={({item}) => (
            <>
              {console.log(item)}
              <Image
                source={item.source}
                style={{
                  width: getResWidth(180),
                  height: getResHeight(120),
                  borderRadius: getResWidth(5),
                }}
              />
            </>
          )}
        />
      </View>
    );
  }
}

export default ImageCarousel;
