
import color from 'color';
import {
  Platform,
  Dimensions,
  PixelRatio
} from 'react-native';

import {
  PLATFORM,
  defineThemeVars as common_defineThemeVars
} from './common';
import {
  extendThemeVars
} from '../utils';

const platform = Platform.OS;

export function defineThemeVars () {
  return extendThemeVars(
    common_defineThemeVars(),
    {
      // Container
      containerBgColor: '#000',

      // Text
      textColor: '#fff',
      inverseTextColor: '#000',

      // Accordion
      contentStyle: '#0A0A0A',
      iconStyle: '#fff',

      // ActionSheet
      containerTouchableBackgroundColor: 'rgba(200,200,200,0.4)',
      innerTouchableBackgroundColor: '#000',
      touchableTextColor: '#D3D3D3',

      // Android
      androidRippleColor: 'rgba(0,0,0,0.3)',
      androidRippleColorDark: 'rgba(255, 255, 255, 0.15)',

      // Badge
      badgeBg: '#ED1727',
      badgeColor: '#000',

      // Button
      buttonDisabledBg: '#5b5b5b',

      // Card
      cardDefaultBg: '#000',
      cardBorderColor: '#ccc',

      // CheckBox
      checkboxTickColor: '#000',

      // Date Picker
      datePickerTextColor: '#fff',

      // FAB
      fabIconColor: '#000',
      fabShadowColor: '#fff',

      // Footer
      footerDefaultBg: platform === PLATFORM.IOS ? '#080808' : '#3F51B5',

      // FooterTab
      activeTab: platform === PLATFORM.IOS ? '#007aff' : '#000',
      tabBarActiveTextColor: platform === PLATFORM.IOS ? '#007aff' : '#000',

      // Header
      toolbarBtnColor: '#B0B0B0',
      toolbarDefaultBg: platform === PLATFORM.IOS ? '#080808' : '#3F51B5',
      toolbarInputColor: platform === PLATFORM.IOS ? '#CECDD2' : '#000',
      toolbarBtnTextColor: platform === PLATFORM.IOS ? '#007aff' : '#000',
      iosStatusbar: 'dark-content',

      // InputGroup
      inputColorPlaceholder: '#F0F0F0',

      // List
      listBorderColor: '#c9c9c9',
      listDividerBg: '#848484',
      listBtnUnderlayColor: '#DDD',
      listNoteColor: '#808080',

      // Progress Bar
      inverseProgressColor: '#F3F3F3',

      // Segment
      segmentBackgroundColor: platform === PLATFORM.IOS ? '#080808' : '#3F51B5',
      segmentActiveBackgroundColor: platform === PLATFORM.IOS ? '#007aff' : '#000',
      segmentTextColor: platform === PLATFORM.IOS ? '#007aff' : '#000',
      segmentActiveTextColor: platform === PLATFORM.IOS ? '#aaa' : '#3F51B5',
      segmentBorderColor: platform === PLATFORM.IOS ? '#007aff' : '#000',

      // Spinner
      inverseSpinnerColor: '#F3F3F3',

      // Tab
      tabDefaultBg: platform === PLATFORM.IOS ? '#080808' : '#3F51B5',
      topTabBarTextColor: platform === PLATFORM.IOS ? '#EEEEEE' : '#b3c7f9',
      topTabBarActiveTextColor: platform === PLATFORM.IOS ? '#007aff' : '#000',
      topTabBarBorderColor: platform === PLATFORM.IOS ? '#a7a6ab' : '#000',
      topTabBarActiveBorderColor: platform === PLATFORM.IOS ? '#007aff' : '#000',

      // Tabs
      tabBgColor: '#080808',

      // Title
      subtitleColor: '#aaa',
      titleFontColor: '#fff',


    }
  );
}

const themeVars = defineThemeVars();

export default themeVars;

