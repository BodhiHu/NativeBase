// @flow

import { PixelRatio } from 'react-native';

import variable from './../variables/platform';
import { PLATFORM } from './../variables/common';

export default (variables /* : * */ = variable) => {
  const platformStyle = variables.platformStyle;
  const platform = variables.platform;

  const panelHeaderTheme = {
    '.hasSubtitle': {
      'NativeBase.Body': {
        'NativeBase.Title': {
          fontSize: variables.titleFontSize - 2,
          fontFamily: variables.titleFontfamily,
          textAlign: 'center',
          fontWeight: '500',
          paddingBottom: 3
        },
        'NativeBase.Subtitle': {
          fontSize: variables.subTitleFontSize,
          fontFamily: variables.titleFontfamily,
          color: variables.subtitleColor,
          textAlign: 'center'
        }
      }
    },
    '.transparent': {
      backgroundColor: 'transparent',
      borderBottomColor: 'transparent',
      elevation: 0,
      shadowColor: null,
      shadowOffset: null,
      shadowRadius: null,
      shadowOpacity: null,
      paddingTop: undefined,
      height: variables.toolbarHeight
    },
    '.noLeft': {
      'NativeBase.Left': {
        width: 0,
        flex: 0
      },
      'NativeBase.Body': {
        flex: 1,
        alignItems: 'flex-start',
        'NativeBase.Title': {
          paddingLeft:0 
        },
        'NativeBase.Subtitle': {
          paddingLeft: 0,
          textAlign: 'left'
        }
      },
      'NativeBase.Right': {
        flex: null
      }
    },
    'NativeBase.Left': {
      'NativeBase.Button': {
        '.hasText': {
          marginLeft: -10,
          height: 30,
          'NativeBase.Icon': {
            color: variables.toolbarBtnColor,
            fontSize: variables.iconHeaderSize,
            marginTop: 2,
            marginRight: 5,
            marginLeft: 2
          },
          'NativeBase.Text': {
            color: variables.toolbarBtnColor,
            fontSize: platform === PLATFORM.IOS ? 17 : 0,
            marginLeft: 7,
            lineHeight: 19.5
          },
          'NativeBase.IconNB': {
            color: variables.toolbarBtnColor,
            fontSize: variables.iconHeaderSize,
            marginTop: 2,
            marginRight: 5,
            marginLeft: 2
          }
        },
        '.transparent': {
          marginLeft:
            platform === PLATFORM.IOS && platformStyle !== PLATFORM.MATERIAL
              ? -3
              : 0,
          'NativeBase.Icon': {
            color: variables.toolbarBtnColor,
            fontSize:
              platform === PLATFORM.IOS &&
              variables.platformStyle !== PLATFORM.MATERIAL
                ? variables.iconHeaderSize + 1
                : variables.iconHeaderSize,
            marginTop: 0,
            marginRight: 2,
            marginLeft: 1,
            paddingTop: 1
          },
          'NativeBase.IconNB': {
            color: variables.toolbarBtnColor,
            fontSize:
              platform === PLATFORM.IOS &&
              variables.platformStyle !== PLATFORM.MATERIAL
                ? variables.iconHeaderSize + 1
                : variables.iconHeaderSize - 2,
            marginTop: 0,
            marginRight: 2,
            marginLeft: 1,
            paddingTop: 1
          },
          'NativeBase.Text': {
            color: variables.toolbarBtnColor,
            fontSize: platform === PLATFORM.IOS ? 17 : 0,
            top: platform === PLATFORM.IOS ? 1 : -1.5,
            paddingLeft:
              platform === PLATFORM.IOS && platformStyle !== PLATFORM.MATERIAL
                ? 2
                : 5,
            paddingRight:
              platform === PLATFORM.IOS && platformStyle !== PLATFORM.MATERIAL
                ? undefined
                : 10
          },
          backgroundColor: 'transparent',
          borderColor: null,
          elevation: 0,
          shadowColor: null,
          shadowOffset: null,
          shadowRadius: null,
          shadowOpacity: null
        },
        'NativeBase.Icon': {
          color: variables.toolbarBtnColor
        },
        'NativeBase.IconNB': {
          color: variables.toolbarBtnColor
        },
        alignSelf: null,
        paddingRight: variables.buttonPadding,
        paddingLeft:
          platform === PLATFORM.IOS && platformStyle !== PLATFORM.MATERIAL
            ? 4
            : 8
      },
      flex:
        platform === PLATFORM.IOS && platformStyle !== PLATFORM.MATERIAL
          ? 1
          : platform === PLATFORM.WEB
          ? 0.1
          : 0.4,
      alignSelf: 'center',
      alignItems: 'flex-start'
    },
    'NativeBase.Body': {
      flex: 1,
      alignItems:
        platform === PLATFORM.IOS && platformStyle !== PLATFORM.MATERIAL
          ? 'center'
          : 'flex-start',
      alignSelf: 'center',
      'NativeBase.Segment': {
        borderWidth: 0,
        alignSelf: 'flex-end',
        marginRight: platform === PLATFORM.IOS ? -40 : -55
      },
      'NativeBase.Button': {
        alignSelf: 'center',
        '.transparent': {
          backgroundColor: 'transparent'
        },
        'NativeBase.Icon': {
          color: variables.toolbarBtnColor
        },
        'NativeBase.IconNB': {
          color: variables.toolbarBtnColor
        },
        'NativeBase.Text': {
          color: variables.toolbarBtnColor,
          backgroundColor: 'transparent'
        }
      }
    },
    'NativeBase.Right': {
      flex: 1,
      alignSelf: 'center',
      alignItems: 'flex-end',
      flexDirection: 'row',
      justifyContent: 'flex-end'
    },
    backgroundColor: variables.panelHeaderBg,
    flexDirection: 'row',
    // paddingHorizontal: 10,
    paddingLeft:
      platform === PLATFORM.IOS && variables.platformStyle !== PLATFORM.MATERIAL
        ? 6
        : 10,
    paddingRight: 10,
    justifyContent: 'center',
    paddingTop: platform === PLATFORM.IOS ? 18 : 0,
    borderBottomWidth:
      platform === PLATFORM.IOS
        ? 1 / PixelRatio.getPixelSizeForLayoutSize(1)
        : 0,
    borderBottomColor: variables.toolbarDefaultBorder,
    height:
      variables.platform === PLATFORM.IOS &&
      variables.platformStyle === PLATFORM.MATERIAL
        ? variables.toolbarHeight + 10
        : variables.toolbarHeight,
    elevation: 0,
    shadowColor: platformStyle === PLATFORM.MATERIAL ? '#000' : undefined,
    shadowOffset:
      platformStyle === PLATFORM.MATERIAL ? { width: 0, height: 2 } : undefined,
    shadowOpacity: platformStyle === PLATFORM.MATERIAL ? 0.2 : undefined,
    shadowRadius: platformStyle === PLATFORM.MATERIAL ? 1.2 : undefined,
    top: 0,
    left: 0,
    right: 0
  };

  return panelHeaderTheme;
};
