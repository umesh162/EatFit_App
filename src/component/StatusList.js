import {
  Text,
  ScrollView,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import AllBradnSel from '../asset/svg/allBrand.svg';
import AllBrandnNotSel from '../asset/svg/allBrandNotSel.svg';
import NewPopSel from '../asset/svg/New&PopSel.svg';
import NewPopNotSel from '../asset/svg/New&PopNotSel.svg';
import EatFitSel from '../asset/svg/EatFitSel.svg';
import EatFitNotSel from '../asset/svg/EatFitNotSel.svg';
import HrxSel from '../asset/svg/HrxSel.svg';
import HrxNotSel from '../asset/svg/HrxNotSel.svg';
import ChaatStreetSel from '../asset/svg/ChaatStreetSel.svg';
import ChaatStreetNotSel from '../asset/svg/ChaatStreetNotSel.svg';
import ChaoTaoSel from '../asset/svg/ChaoTaoSel.svg';
import ChaoTaoNotSel from '../asset/svg/ChaoTaoNotSel.svg';
import GKHSel from '../asset/svg/GKHSel.svg';
import GKHnotSel from '../asset/svg/GKHnotSel.svg';
import TwfPizzaSel from '../asset/svg/TwfPizzaSel.svg';
import TwfPizzaNotSel from '../asset/svg/TwfPizzaNotSel.svg';
import PboxSel from '../asset/svg/PboxSel.svg';
import PboxNotSel from '../asset/svg/PboxNotSel.svg';
import SmoodiSel from '../asset/svg/SmoodiSel.svg';
import SmoodiNotSel from '../asset/svg/SmoodiNotSel.svg';
import {getResHeight, getResWidth, SCREENWIDTH} from '../constant/Responsive';

const StatusData = [
  {
    id: 1,
    name: 'All Brands',
    imgSel: <AllBradnSel />,
    imgNotSel: <AllBrandnNotSel />,
  },
  {
    id: 2,
    name: 'New & Popular',
    imgSel: <NewPopSel />,
    imgNotSel: <NewPopNotSel />,
  },
  {
    id: 3,
    name: 'EatFit',
    imgSel: <EatFitSel />,
    imgNotSel: <EatFitNotSel />,
  },
  {
    id: 4,
    name: 'HRX',
    imgSel: <HrxSel />,
    imgNotSel: <HrxNotSel />,
  },
  {
    id: 5,
    name: 'Chaat Street',
    imgSel: <ChaatStreetSel />,
    imgNotSel: <ChaatStreetNotSel />,
  },
  {
    id: 6,
    name: 'Chow Tao',
    imgSel: <ChaoTaoSel />,
    imgNotSel: <ChaoTaoNotSel />,
  },
  {
    id: 7,
    name: 'Great Indian Khichdi',
    imgSel: <GKHSel />,
    imgNotSel: <GKHnotSel />,
  },
  {
    id: 8,
    name: 'Olio Pizzas',
    imgSel: <TwfPizzaSel />,
    imgNotSel: <TwfPizzaNotSel />,
  },
  {
    id: 9,
    name: 'Paratha Box',
    imgSel: <PboxSel />,
    imgNotSel: <PboxNotSel />,
  },
  {
    id: 10,
    name: 'Smoodies',
    imgSel: <SmoodiSel />,
    imgNotSel: <SmoodiNotSel />,
  },
];

const StatusUI = props => {
  const [sel, setSel] = React.useState(null);
  const selHandler = v => {
    props.onSelect(v);
    setSel(v);
  };
  return (
    <TouchableOpacity
      style={{
        marginTop: getResHeight(10),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      onPress={() => selHandler(props.item.name)}>
      {console.log(sel)}
      <View
        style={{
          width: getResWidth(50),
          height: getResHeight(70),
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {props.item.imgSel}
      </View>
      <Text
        style={{
          width: 100,
          textAlign: 'center',
        }}>
        {props.item.name}
      </Text>
    </TouchableOpacity>
  );
};

export class StatusList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selVal: null,
    };
  }

  render() {
    return (
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{}}
        data={StatusData}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <StatusUI
            item={item}
            onSelect={value => this.setState({selVal: value})}
          />
        )}
      />
    );
  }
}

export default StatusList;
