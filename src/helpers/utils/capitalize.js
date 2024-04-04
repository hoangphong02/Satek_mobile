export const capitalize = (str) => str.toLowerCase().split(' ').map((item) => item.split('').map((i2, index) => index === 0 ? i2.toUpperCase() : i2).join('')).join(' ');
