

import {Dimensions} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {RFPercentage} from 'react-native-responsive-fontsize';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';

export const {width, height} = Dimensions.get('window');

export const VERY_SMALL = RFPercentage(1.8);
export const SMALL = RFPercentage(2.5);
export const REGULAR = RFPercentage(4);
export const MEDIUM = RFPercentage(4.5);
export const BIG = RFPercentage(5);
export const BIT_SMALL_VERTICAL_SPACE = hp(1);
export const VERY_SMALL_VERTICAL_SPACE = hp(2);
export const SMALL_VERTICAL_SPACE = hp(3);
export const MEDIUM_SMALL_VERTICAL_SPACE = hp(3.5);
export const MEDIUM_VERTICAL_SPACE = hp(4);
export const REGULAR_VERTICAL_SPACE = hp(5);
export const BIG_VERTICAL_SPACE = hp(10);



export const capitalizeFirstLetter = (str: string) => {
  return str && str.length ? str.charAt(0).toUpperCase() + str.slice(1) : str;
};

export const generateRandomNumber = (min: number, max: number) => {
  return Math.floor(min + Math.random() * (max + 1 - min));
};

export {
  MaterialCommunityIcons,
  AntDesign,
  MaterialIcons,
  Ionicons,
  SimpleLineIcons,
  Feather,
  FontAwesome,
  Entypo,
  Fontisto,
};

