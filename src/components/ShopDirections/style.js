import { Dimensions, StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import * as Constants from '../../config/constants';

const styles = EStyleSheet.create({
  directionsContainer:  {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default styles;