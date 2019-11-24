/**
 * 所有RN支持的样式key
 * 依据：https://github.com/vhpoet/react-native-styling-cheat-sheet#image
 * @type {string[]}
 */
/*export const rnCollectFilter = [
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
  'flexDirection',
  'flexBasis',
  'flexGrow',
  'flexShrink',
  'flexWrap',
  'height',
  'justifyContent',
  'left',
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
  'shadowColor',
  'shadowOffset',
  'shadowOpacity',
  'shadowRadius',
  'decomposedMatrix',
  'transformMatrix',
  'backfaceVisibility',
  'backgroundColor',
  'borderBottomLeftRadius',
  'borderBottomRightRadius',
  'borderColor',
  'borderRadius',
  'borderTopLeftRadius',
  'borderTopRightRadius',
  'opacity',
  'overflow',
  'resizeMode',
  'tintColor',
  'overlayColor',
  'borderBottomColor',
  'borderLeftColor',
  'borderRightColor',
  'borderStyle',
  'borderTopColor',
  'elevation',
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
  'autoFocus',
  'keyboardType',
  'maxLength',
  'onChangeText',
  'borderBottomEndRadius',
  'borderBottomStartRadius',
  'borderEndColor',
  'borderStartColor',
  'borderTopEndRadius',
  'borderTopStartRadius',

  'flex', // ok
  'margin', // 简写ok
  'padding', // 简写ok
  'transform', // 简写(直接就是transform)
  'font', // 简写
  'border', // 简写
  'borderLeft', // 简写
  'borderRight', // 简写
  'borderTop', // 简写
  'borderBottom', // 简写
  'background', // 简写
  'boxShadow', // 简写
  'textShadow', // 简写
  'textDecoration', // 简写
];*/

/**
 * 所有RN支持的样式key
 * 依据：https://www.jianshu.com/p/c59c6890edff
 * @type {string[]}
 */
export const rnCollectFilter = [

  // Text 文本
  'color',
  'fontFamily',
  'fontSize',
  'fontStyle',
  'fontWeight',
  'lineHeight',
  'textAlign',
  'textAlignVertical',
  'textShadowColor',
  'textShadowOffset',

  // Dimension 尺寸
  'width',
  'height',

  // Positioning 定位
  'position',
  'top',
  'right',
  'bottom',
  'left',

  // Margin 外部白
  'margin', // 简写ok
  'marginHorizontal',
  'marginVertical',
  'marginTop',
  'marginRight',
  'marginBottom',
  'marginLeft',
  'marginHorizontal',

  // Padding 内部白
  'padding', // 简写ok
  'paddingHorizontal',
  'paddingVertical',
  'paddingTop',
  'paddingRight',
  'paddingBottom',
  'paddingLeft',
  'paddingHorizontal',

  // Border 边框
  'borderStyle',
  'borderWidth',
  'borderTopWidth',
  'borderRightWidth',
  'borderBottomWidth',
  'borderLeftWidth',
  'borderColor',
  'borderTopColor',
  'borderRightColor',
  'borderBottomColor',
  'borderLeftColor',
  'borderRadius',
  'borderTopLeftRadius',
  'borderTopRightRadius',
  'borderBottomLeftRadius',
  'borderBottomRightRadius',
  'shadowColor',
  'shadowOffset',

  // Background 背景
  'backgroundColor',

  // Transform 转换
  'transform', // 简写ok
  'transformMatrix',
  'backfaceVisibility',

  // Flexbox 弹性盒
  'flex', // 简写ok
  'flexDirection',
  'flexWrap',
  'justifyContent',
  'alignItems',
  'alignSelf',

  // Other 其他
  'opacity',
  'overflow',
  'elevation',
  'resizeMode',
  'overlayColor',
  'tintColor',

  // 简写（加上面的flex、margin、padding、transform）
  'font', // 简写(直接使用各自的写法，如fontSize等)
  'border', // 简写ok
  'borderLeft', // 简写ok
  'borderRight', // 简写ok
  'borderTop', // 简写ok
  'borderBottom', // 简写ok
  'background', // 简写ok
  'boxShadow', // 简写//ok
  'textShadow', // 简写//ok
  'textDecoration', // 简写//ok
];

/**
 * 需要转换的缩写
 * @type {string[]}
 */
export const rnCollectFilterAbbrevia = [
  'flex', // ok
  'margin', // 简写ok
  'padding', // 简写ok
  'transform', // 简写(直接就是transform)

  'font', // 简写(直接使用各自的写法，如fontSize等)
  'border', // 简写ok
  'borderLeft', // 简写ok
  'borderRight', // 简写ok
  'borderTop', // 简写ok
  'borderBottom', // 简写ok
  'background', // 简写ok
  'boxShadow', // 简写//ok
  'textShadow', // 简写//ok
  'textDecoration', // 简写//ok
];
