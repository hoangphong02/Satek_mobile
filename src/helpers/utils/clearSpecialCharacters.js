export const clearSpecialCharacters = (str) => str
  .toString()
  .replace(',', '')
  .replace('.', '')
  .replace('@', '')
  .replace('/', '');
