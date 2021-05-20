/**
 * This function sets an event listener for a custom event
 * at the document level. It takes the name of the custom event
 * and the callback to be fired when custom event is fired
 * @param {Custom Event name. Should be taken from utils/constants/CUSTOM_EVENTS} event
 * @param {Callback function to be called every time the custom event is fired} callback
 */
export declare function listenToCustomEvent(event: any, callback: (e: any) => void): void;
export declare function getIntegerRandomNoBetweenTwoNo(min: number, max: number): number;
/**
 * This function removes the event listener for a custom event that was set
 * before by the listenToCustomevent function. It takes the name of the
 * custom event and the callback to be removed from custom event listener.
 * @param {Custom Event name. Should be taken from utils/constants/CUSTOM_EVENTS} event
 * @param {Callback function to be removed from custom event} callback
 */
export declare function unListenToCustomEvent(event: any, callback: any): void;
/**
 * This function returns ordinal suffix of a date
 *  @param {date} date
 */
export declare function ordinalSuffixOf(date: number): string;
