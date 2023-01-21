import {Dimensions, PixelRatio, Platform} from 'react-native';
import {isIphoneX} from './DevicePlatform';

const {height, width} = Dimensions.get('window');

//iPhone
//bigest 428 x 926
//smallest 320 x 568
//iPad 1024 x 1366
//i-11 414 x 896

const removeOrientationListener = () => {
  Dimensions.removeEventListener('change', () => {});
};

export let SCREENWIDTH = width;
export let SCREENHEIGHT = height;

let TARGET_MOBILE_WIDTH = 360;
let TARGET_MOBILE_HEIGHT = SCREENHEIGHT;
if (Platform.OS === 'ios') {
  if (SCREENWIDTH >= 375 && SCREENWIDTH < 414) {
    TARGET_MOBILE_WIDTH = 250;
  } else if (SCREENWIDTH >= 414) {
    TARGET_MOBILE_WIDTH = 300;
  } else {
    TARGET_MOBILE_WIDTH = 350;
  }

  if (SCREENHEIGHT >= 667 && SCREENHEIGHT < 712) {
    TARGET_MOBILE_HEIGHT = SCREENHEIGHT - 120;
  } else if (SCREENHEIGHT >= 712 && SCREENHEIGHT <= 812) {
    TARGET_MOBILE_HEIGHT = SCREENHEIGHT - 75;
  } else {
    TARGET_MOBILE_HEIGHT = SCREENHEIGHT - 150;
  }
} else {
  TARGET_MOBILE_WIDTH = 480;

  if (SCREENWIDTH <= 480) {
    TARGET_MOBILE_WIDTH = 300;
  }

  TARGET_MOBILE_HEIGHT = 700;

  // if (SCREENWIDTH >= 480) {
  //   TARGET_MOBILE_WIDTH = 350;
  // } else if (SCREENWIDTH >= 360) {
  //   TARGET_MOBILE_WIDTH = 300;
  // } else if (SCREENWIDTH >= 412) {
  //   TARGET_MOBILE_WIDTH = 350;
  // }

  // if (SCREENHEIGHT >= 847) {
  //   TARGET_MOBILE_HEIGHT = SCREENHEIGHT - 120;
  // } else if (SCREENHEIGHT >= 712 && SCREENHEIGHT <= 812) {
  //   TARGET_MOBILE_HEIGHT = SCREENHEIGHT - 75;
  // } else {
  //   TARGET_MOBILE_HEIGHT = SCREENHEIGHT - 150;
  // }
}
export function widthPercentageToDP(widthPercentage) {
  const element =
    typeof widthPercentage === 'number'
      ? widthPercentage
      : parseFloat(widthPercentage);
  return PixelRatio.roundToNearestPixel((SCREENWIDTH * element) / 100);
}

export function heightPercentageToDP(heightPercentage) {
  const element =
    typeof heightPercent === 'number'
      ? heightPercentage
      : parseFloat(heightPercentage);
  return PixelRatio.roundToNearestPixel((SCREENHEIGHT * element) / 100);
}

const listenOrientationChange = that => {
  Dimensions.addEventListener('change', newDimensions => {
    SCREENWIDTH = newDimensions.window.width;
    SCREENHEIGHT = newDimensions.window.height;
    that.setState({
      orientation: SCREENWIDTH < SCREENHEIGHT ? 'portrait' : 'landscap',
    });
  });
};

export function getResWidth(no) {
  return widthPercentageToDP((no * 100) / TARGET_MOBILE_WIDTH);
}

export function getResHeight(no) {
  return heightPercentageToDP((no * 100) / TARGET_MOBILE_HEIGHT);
}

// MARK: -FontSize;
const standardLength =
  TARGET_MOBILE_WIDTH > TARGET_MOBILE_HEIGHT
    ? TARGET_MOBILE_WIDTH
    : TARGET_MOBILE_HEIGHT;
const offset =
  TARGET_MOBILE_WIDTH > TARGET_MOBILE_HEIGHT
    ? 0
    : Platform.OS === 'ios'
    ? 78
    : 0; //StatusBar.currentHeight; // iPhone X style SafeAreaView size in portrait
const deviceHeight =
  isIphoneX() || Platform.OS === 'android'
    ? standardLength - offset
    : standardLength;

export function getFontpercent(percent) {
  const heightPercent = (percent * deviceHeight) / 100;
  return Math.round(heightPercent);
}

// guideline height for standard 5" device screen is 680
export function getFontSize(fontSize, standardScreenWidth = 380) {
  const entireScreenWidth = Dimensions.get('window').width;
  return (entireScreenWidth / standardScreenWidth) * fontSize;
}
