export const useHeaderDark = () => useState('isHeaderDark', () => false);
export const useLanguage = () => useState('language', () => 'FRA');
export const useTouchDevive = () => useState('isTouchDevice', () => ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0))