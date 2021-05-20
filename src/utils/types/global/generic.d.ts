/**
 * Generic Type for Values as Types in Constant Object
 * @example
 * const a = { abc: 1, xyz: 2} as const;
 * => a: 1 | 2
 */
 type ValueOf<T> = T[keyof T];
