import clipboard from 'clipboard-js';

export const clipboardText = (txt = '') => clipboard.copy(txt);
