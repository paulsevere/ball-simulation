import * as c from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';
import Spacing from 'material-ui/styles/spacing';
import zIndex from 'material-ui/styles/zIndex';

export default {
  spacing : Spacing,
  zIndex : zIndex,
  fontFamily : 'Roboto, sans-serif',
  palette : {
    primary1Color: c.blueA200,
    primary2Color: c.blueA400,
    primary3Color: c.grey600,
    accent1Color: c.tealA400,
    accent2Color: c.tealA400,
    accent3Color: c.tealA400,
    textColor: c.fullWhite,
    secondaryTextColor: fade(c.fullWhite, 0.7),
    alternateTextColor: '#303030',
    canvasColor: '#303030',
    borderColor: fade(c.fullWhite, 0.3),
    disabledColor: fade(c.fullWhite, 0.3),
    pickerHeaderColor: fade(c.fullWhite, 0.12),
    clockCircleColor: fade(c.fullWhite, 0.12)
  }
};
