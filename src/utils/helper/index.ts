/**
 * This function sets an event listener for a custom event
 * at the document level. It takes the name of the custom event
 * and the callback to be fired when custom event is fired
 * @param {Custom Event name. Should be taken from utils/constants/CUSTOM_EVENTS} event
 * @param {Callback function to be called every time the custom event is fired} callback
 */
export function listenToCustomEvent(event: any, callback: (e: any) => void) {
  try {
    if (typeof document !== 'undefined' && document != null) {
      document.documentElement.addEventListener(event, callback);
    }

  } catch (error) {
    console.error(`Error in listening to ${event} custom event: `, error);
  }
}


/* This function return random number between two integers. */
export function getIntegerRandomNoBetweenTwoNo(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


/**
 * This function removes the event listener for a custom event that was set
 * before by the listenToCustomevent function. It takes the name of the
 * custom event and the callback to be removed from custom event listener.
 * @param {Custom Event name. Should be taken from utils/constants/CUSTOM_EVENTS} event
 * @param {Callback function to be removed from custom event} callback
 */
export function unListenToCustomEvent(event: any, callback: any) {
  try {
    if (typeof document !== 'undefined' && document != null) {
      document.documentElement.removeEventListener(event, callback);
    }

  } catch (error) {
    console.error(` Error in unListening to ${event} custom event: `, error);
  }
}


/**
 * This function returns ordinal suffix of a date
 *  @param {date} date
 */
export function ordinalSuffixOf(date: number) {
  const j = date % 10, k = date % 100;

  if (j == 1 && k != 11) {
    return date + 'st';
  }

  if (j == 2 && k != 12) {
    return date + 'nd';
  }

  if (j == 3 && k != 13) {
    return date + 'rd';
  }

  return date + 'th';
}

export function copyToClipboard(str: string) {
  /**
   * This function is used to copy anything to the clipboard
   */
  const el = document.createElement('textarea');

  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}

/*
 * Returns the value at given path from the source object. If path is not found then default value is returned.
 * This method works exactly like Lodash's getData method.
 *
 * @param { { [key: string]: unknown } } obj - Source object
 * @param {string} path - Path to desired key inside source object
 *
 * @remarks
 * Provide a default value always to avoid unexpected behavior
 *
 * @example
 * ```
 * const obj = { a: { b: [ 56, 75, 23 ], d: 1 }, e: 2 };
 *
 * getData(obj, 'a.d', null) // 1
 * getData(obj, 'e', null) // 2
 * getData(obj, 'a.d.e', 'random') // 'random'
 * getData(obj, 'a.b[0]', null) // 56
 * getData(obj, 'a.b.[2]', null) // 23
 * ```
 */
export function getData(obj: any, path: string, def: null | unknown = null): any {

  function replaceAll(originalString:string, search:string, replace:string) {
    return originalString?.split(search)?.join(replace);
  }


  const sanitzePath = (currPath: string) => {

    const stringsToReplace = [ '[', ']', '..' ];

    // 'a.[0].b.c' => 'a.0.b.c'
    const currPathString = String(currPath);

    let sanitizedPath = currPathString;

    for (const index in stringsToReplace) {
      sanitizedPath = replaceAll(sanitizedPath, stringsToReplace[index], '.');
    }

    const isLastIndexDot = sanitizedPath.lastIndexOf('.') === sanitizedPath.length - 1;

    sanitizedPath = sanitizedPath.slice(0, isLastIndexDot ? sanitizedPath.lastIndexOf('.') : sanitizedPath.length);

    return sanitizedPath;
  };

  try {
    const newPathArray = String(sanitzePath(path)).split('.');

    for (const path of newPathArray) {
      obj = obj?.[path] as any;
    }

    return typeof obj === 'undefined' ? def : obj;

  } catch (e) {
    console.error('Error while using getData', e);

    return def;
  }
}


/**
 * This method can be used to check if the variable is empty or not. Returns true if it is empty else false.
 *
 * @param {any} data - Any variable that you want to check if it is empty or not
 *
 * @example
 * ```
 * if(isEmpty(userData)) {
 *   return;
 * }
 * ```
 */
export function isEmpty(data: any) {
  try {
    if (data === null || data === undefined || typeof data === 'undefined') {
      return true;
    }

    const dataType = typeof data;

    switch (dataType) {

      case 'string':
        if (data.trim() === '' || data === 'null' || data === null) {
          return true;
        }

        return false;

      case 'object':
        const keys = Object.keys(data);
        const len = keys.length;

        if (len <= 0) {
          return true;
        }

        return false;

      case 'number':
        return false;

      default:
        // for array
        if (Array.isArray(data) && data.length <= 0) {
          return true;
        }

        return false;
    }

  } catch (e) {

    return true;
  }
}
