export const ANIMATION_STATE_CLASSES = {
  animating: 'rah-animating',
  animatingUp: 'rah-animating--up',
  animatingDown: 'rah-animating--down',
  animatingToHeightZero: 'rah-animating--to-height-zero',
  animatingToHeightAuto: 'rah-animating--to-height-auto',
  animatingToHeightSpecific: 'rah-animating--to-height-specific',
  static: 'rah-static',
  staticHeightZero: 'rah-static--height-zero',
  staticHeightAuto: 'rah-static--height-auto',
  staticHeightSpecific: 'rah-static--height-specific'
};

export const PROPS_TO_OMIT = [
  'animateOpacity',
  'animationStateClasses',
  'applyInlineTransitions',
  'children',
  'contentClassName',
  'delay',
  'duration',
  'easing',
  'height',
  'onAnimationEnd',
  'onAnimationStart'
];


export function omitProps(obj:any, ...keys:any[]) {
  if (!keys.length) {
    return obj;
  }

  const res:any = {};
  const objectKeys = Object.keys(obj);

  for (let i = 0; i < objectKeys.length; i++) {
    const key = objectKeys[i];

    if (keys.indexOf(key) === -1) {
      res[key] = obj[key];
    }
  }

  return res;
}

// Start animation helper using nested requestAnimationFrames
export function startAnimationHelper(callback:Function) {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      callback();
    });
  });
}


export function isNumber(n:string | number) {
  return !isNaN(parseFloat(n as string)) && isFinite(n as number);
}


export function isPercentage(height: string | number) {
  // Percentage height
  return typeof height === 'string' &&
    height.search('%') === height.length - 1 &&
    isNumber(height.substr(0, height.length - 1));
}


export function runCallback(callback:(props: { newHeight: number })=>void = () => {}, params: {newHeight?: string | number | null}) {
  if (callback && typeof callback === 'function') {
    callback((params as {newHeight: number}));
  }
}


// const heightPropType = (props, propName, componentName) => {
//   const value = props[propName];

//   if ((typeof value === 'number' && value >= 0) || isPercentage(value) || value === 'auto') {
//     return null;
//   }

//   return new TypeError(
//     `value "${value}" of type "${typeof value}" is invalid type for ${propName} in ${componentName}. ` +
//     'It needs to be a positive number, string "auto" or percentage string (e.g. "15%").'
//   );
// };
