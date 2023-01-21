import * as React from 'react';
import Svg, {G, Path, Polygon, Rect} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */

function Loader(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <G transform="translate(-462 -1030)">
        <Rect
          width={24}
          height={24}
          transform="translate(462 1030)"
          fill="#fff"
        />
        <G transform="translate(404.005 1034.008)">
          <G transform="translate(64 0)">
            <G transform="translate(0)">
              <Path
                d="M69.993,0A6,6,0,0,0,64,5.993c0,4.154,5.41,9.612,5.64,9.843a.5.5,0,0,0,.71,0c.23-.231,5.64-5.689,5.64-9.843a6,6,0,0,0-6-5.993Zm0,14.76C68.8,13.483,65,9.166,65,5.993a4.994,4.994,0,0,1,9.989,0C74.987,9.164,71.186,13.483,69.993,14.76Z"
                transform="translate(-64 0)"
              />
            </G>
          </G>
          <G transform="translate(66.997 2.997)">
            <Path
              d="M163,96a3,3,0,1,0,3,3A3,3,0,0,0,163,96Zm0,4.994a2,2,0,1,1,2-2,2,2,0,0,1-2,2Z"
              transform="translate(-160 -96)"
              fill="#ec1377"
            />
          </G>
        </G>
      </G>
    </Svg>
  );
}

export default Loader;
