export const numberToVietnameseCurrency = (number) => {
  const units = ['', 'nghìn', 'triệu', 'tỷ'];

  const numberToWord = {
    0: 'không',
    1: 'một',
    2: 'hai',
    3: 'ba',
    4: 'bốn',
    5: 'năm',
    6: 'sáu',
    7: 'bảy',
    8: 'tám',
    9: 'chín',
    10: 'mười',
    20: 'hai mươi',
    30: 'ba mươi',
    40: 'bốn mươi',
    50: 'năm mươi',
    60: 'sáu mươi',
    70: 'bảy mươi',
    80: 'tám mươi',
    90: 'chín mươi',
  };

  const convertChunk = (chunk) => {
    const hundred = Math.floor(chunk / 100);
    const ten = Math.floor((chunk % 100) / 10);
    const unit = chunk % 10;

    let result = '';

    if (hundred > 0) {
      result += `${numberToWord[hundred]} trăm `;
    }

    if (ten > 0) {
      if (ten === 1 && unit > 0 && unit !== 5) {
        result += 'mười ';
      } else {
        result += `${numberToWord[ten * 10]} `;
      }
    }

    if (unit > 0) {
      if (ten === 0 && unit === 1) {
        result += 'một ';
      } else if (ten !== 1 || unit !== 5) {
        result += `${numberToWord[unit]} `;
      }
    }

    return result.trim();
  };

  if (number === 0) {
    return 'không đồng';
  }

  let result = '';

  if (number < 0) {
    result = 'âm ';
    number = Math.abs(number);
  }

  let chunkIndex = 0;

  while (number > 0) {
    const chunk = number % 1000;
    if (chunk > 0) {
      result = `${convertChunk(chunk)} ${units[chunkIndex]} ${result}`;
    }
    number = Math.floor(number / 1000);
    // eslint-disable-next-line no-plusplus
    chunkIndex++;
  }

  return `${result.trim()} đồng`;
};
