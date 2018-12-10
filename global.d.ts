// Prevents "Cannot find module" error when trying
// to import CSS or images into a JS module.
declare module '*.css';
declare module '*.svg';
declare module '*.png';
declare module '*.jpg';

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>
