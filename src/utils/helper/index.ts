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
