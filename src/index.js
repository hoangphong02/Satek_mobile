/* eslint-disable global-require */
import 'react-image-lightbox/style.css';
import 'react-loading-skeleton/dist/skeleton.css';
import 'react-perfect-scrollbar/dist/css/styles.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'dropzone/dist/min/dropzone.min.css';

import './styles/vendors/bootstrap.min.css';
import './styles/vendors/bootstrap.rtl.only.min.css';

import { getCurrentColor } from './helpers/utils';

const color = getCurrentColor();

const render = () => {
  if (color === 'dark') {
    import('./styles/themes/meko.dark.bluenavy.scss').then(() => {
      require('./AppRenderer');
    });
  } else {
    import('./styles/themes/meko.light.blueyale.scss').then(() => {
      require('./AppRenderer');
    });
  }
};
render();
