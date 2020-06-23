// @flow

import variable from './../variables/platform';

export default (variables /* : * */ = variable) => {
  const textTheme = {
    fontSize: variables.defaultFontSize,
    fontFamily: variables.fontFamily,
    color: variables.textColor,
    fontWeight: 'normal',
    '.note': {
      color: variables.textNoteColor,
      fontSize: variables.noteFontSize
    }
  };

  return textTheme;
};
