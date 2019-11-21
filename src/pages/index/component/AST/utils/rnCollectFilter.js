/**
 * 所有RN支持的样式key
 * @type {string[]}
 */
export const rnCollectFilter = [
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
  'flex', // 简写
  'flexDirection',
  'flexBasis',
  'flexGrow',
  'flexShrink',
  'flexWrap',
  'height',
  'justifyContent',
  'left',
  'margin', // 简写
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
  'padding', // 简写
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
  'transform', // 简写
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
