/**
 * React Native支持的样式属性汇总：
 * 参考地址：https://github.com/vhpoet/react-native-styling-cheat-sheet
 * @type {string[]}
 */
const rnCollect = [

  // Flexbox
  'alignContent',
  'alignItems',
  'alignSelf',
  'aspectRatio',
  'borderBottomWidth',
  'borderLeftWidth',
  'borderRightWidth',
  'borderTopWidth',
  'borderEndWidth',
  'borderStartWidth',
  'borderWidth',
  'bottom',
  'direction',
  'display',
  'end',
  'start',
  'flex',
  'flexDirection',
  'flexBasis',
  'flexGrow',
  'flexShrink',
  'flexWrap',
  'height',
  'justifyContent',
  'left',
  'margin',
  'marginBottom',
  'marginHorizontal',
  'marginLeft',
  'marginRight',
  'marginTop',
  'marginVertical',
  'marginEnd',
  'marginStart',
  'maxHeight',
  'maxWidth',
  'minHeight',
  'minWidth',
  'padding',
  'paddingBottom',
  'paddingHorizontal',
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'paddingVertical',
  'paddingEnd',
  'paddingStart',
  'position',
  'right',
  'top',
  'width',
  'zIndex',

  // Shadow Prop Types IOS
  'shadowColor',
  'shadowOffset',
  'shadowOpacity',
  'shadowRadius',

  // Transforms
  'decomposedMatrix',
  'transform',
  'transformMatrix',

  // Image（...Flexbox，...ShadowPropTypesIOS，...Transforms）
  'backfaceVisibility',
  'backgroundColor',
  'borderBottomLeftRadius',
  'borderBottomRightRadius',
  'borderColor',
  'borderRadius',
  'borderTopLeftRadius',
  'borderTopRightRadius',
  'borderWidth',
  'opacity',
  'overflow',
  'resizeMode',
  'tintColor',
  'overlayColor',

  // ScrollView（...Flexbox，...ShadowPropTypesIOS，...Transforms）
  'backfaceVisibility',
  'backgroundColor',
  'borderBottomColor',
  'borderBottomLeftRadius',
  'borderBottomRightRadius',
  'borderBottomWidth',
  'borderColor',
  'borderLeftColor',
  'borderLeftWidth',
  'borderRadius',
  'borderRightColor',
  'borderRightWidth',
  'borderStyle',
  'borderTopColor',
  'borderTopLeftRadius',
  'borderTopRightRadius',
  'borderTopWidth',
  'borderWidth',
  'opacity',
  'overflow',
  'elevation',

  // Text（...View）
  'color',
  'fontFamily',
  'fontSize',
  'fontStyle',
  'fontVariant',
  'textTransform',
  'fontWeight',
  'includeFontPadding',
  'lineHeight',
  'textAlign',
  'textDecorationLine',
  'textShadowColor',
  'textShadowOffset',
  'textShadowRadius',
  'textAlignVertical',
  'letterSpacing',
  'textDecorationColor',
  'textDecorationStyle',
  'writingDirection',

  // TextInput
  'autoFocus',
  'keyboardType',
  'maxLength',
  'onChangeText',

  // View（...Flexbox，...ShadowPropTypesIOS，...Transforms）
  'backfaceVisibility',
  'backgroundColor',
  'borderBottomColor',
  'borderBottomEndRadius',
  'borderBottomStartRadius',
  'borderBottomLeftRadius',
  'borderBottomRightRadius',
  'borderBottomWidth',
  'borderColor',
  'borderEndColor',
  'borderStartColor',
  'borderLeftColor',
  'borderLeftWidth',
  'borderRadius',
  'borderRightColor',
  'borderRightWidth',
  'borderStyle',
  'borderTopColor',
  'borderTopEndRadius',
  'borderTopStartRadius',
  'borderTopLeftRadius',
  'borderTopRightRadius',
  'borderTopWidth',
  'borderWidth',
  'opacity',
  'overflow',
  'elevation',
];


// 获取去重后的Native支持的样式属性汇总
/* var fs = require('fs');
fs.writeFileSync('rnCollectFilter.js', `
let rnCollectFilter = [
  ${
  Array.from(new Set(rnCollect)).map(item => '"' + item + '"' + '\n')
  }];
export default rnCollectFilter;
`);*/

export default rnCollect;
