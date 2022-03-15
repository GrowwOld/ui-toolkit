/**
 * the constants for left bottom and right bottom buttons are
 * codes for material ui icons that are used in the ui and also
 * the values that we get in callback function whenever user hits those buttons
 */
export const NUMPAD_CONSTANTS = {
  LEFT_BOTTOM_BUTTON: 'backspace',
  RIGHT_BOTTOM_BUTTON: 'done'
};

export const KEY_TYPES = {
  NUM: 'NUM',
  ICON: 'ICON'
};

export const NUMPAD_KEYS = [
  [
    {
      val: 1,
      type: KEY_TYPES.NUM
    },
    {
      val: 4,
      type: KEY_TYPES.NUM
    },
    {
      val: 7,
      type: KEY_TYPES.NUM
    },
    {
      val: NUMPAD_CONSTANTS.LEFT_BOTTOM_BUTTON,
      type: KEY_TYPES.ICON
    }
  ],
  [
    {
      val: 2,
      type: KEY_TYPES.NUM
    },
    {
      val: 5,
      type: KEY_TYPES.NUM
    },
    {
      val: 8,
      type: KEY_TYPES.NUM
    },
    {
      val: 0,
      type: KEY_TYPES.NUM
    }
  ],
  [
    {
      val: 3,
      type: KEY_TYPES.NUM
    },
    {
      val: 6,
      type: KEY_TYPES.NUM
    },
    {
      val: 9,
      type: KEY_TYPES.NUM
    },
    {
      val: NUMPAD_CONSTANTS.RIGHT_BOTTOM_BUTTON,
      type: KEY_TYPES.ICON
    }
  ]
];
