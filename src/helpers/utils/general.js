import {
  defaultColor,
  defaultDirection,
  defaultLocale,
  localeOptions,
  themeColorStorageKey,
  themeRadiusStorageKey,
} from '~/constants/defaultValues';

export const getDirection = () => {
  let direction = defaultDirection;

  try {
    if (localStorage.getItem('direction')) {
      const localValue = localStorage.getItem('direction');
      if (localValue === 'rtl' || localValue === 'ltr') {
        direction = localValue;
      }
    }
  } catch (error) {
    console.error('>>>>: src/helpers/utils : getDirection -> error', error);
    direction = defaultDirection;
  }
  return {
    direction,
    isRtl: direction === 'rtl',
  };
};
export const setDirection = (localValue) => {
  let direction = 'ltr';
  if (localValue === 'rtl' || localValue === 'ltr') {
    direction = localValue;
  }
  try {
    localStorage.setItem('direction', direction);
  } catch (error) {
    console.error('>>>>: src/helpers/utils : setDirection -> error', error);
  }
};

export const getCurrentColor = () => {
  let currentColor = defaultColor;
  try {
    if (localStorage.getItem(themeColorStorageKey)) {
      currentColor = localStorage.getItem(themeColorStorageKey);
    }
  } catch (error) {
    console.error(
      '>>>>: src/helpers/utils : getCurrentColor -> error',
      error,
    );
    currentColor = defaultColor;
  }
  return currentColor;
};
export const setCurrentColor = (color) => {
  try {
    localStorage.setItem(themeColorStorageKey, color);
  } catch (error) {
    console.error(
      '>>>>: src/helpers/utils : setCurrentColor -> error',
      error,
    );
  }
};

export const getCurrentRadius = () => {
  let currentRadius = 'rounded';
  try {
    if (localStorage.getItem(themeRadiusStorageKey)) {
      currentRadius = localStorage.getItem(themeRadiusStorageKey);
    }
  } catch (error) {
    console.error(
      '>>>>: src/helpers/utils : getCurrentRadius -> error',
      error,
    );
    currentRadius = 'rounded';
  }
  return currentRadius;
};
export const setCurrentRadius = (radius) => {
  try {
    localStorage.setItem(themeRadiusStorageKey, radius);
  } catch (error) {
    console.error(
      '>>>>: src/helpers/utils : setCurrentRadius -> error',
      error,
    );
  }
};

export const getCurrentLanguage = () => {
  let language = defaultLocale;
  try {
    language = localStorage.getItem('currentLanguage')
      && localeOptions.filter(
        (x) => x.id === localStorage.getItem('currentLanguage'),
      ).length > 0
      ? localStorage.getItem('currentLanguage')
      : defaultLocale;
  } catch (error) {
    console.error(
      '>>>>: src/helpers/utils : getCurrentLanguage -> error',
      error,
    );
    language = defaultLocale;
  }
  return language;
};
export const setCurrentLanguage = (locale) => {
  try {
    localStorage.setItem('currentLanguage', locale);
  } catch (error) {
    console.error(
      '>>>>: src/helpers/utils : setCurrentLanguage -> error',
      error,
    );
  }
};
