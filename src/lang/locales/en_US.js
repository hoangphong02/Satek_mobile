import usLangSale from './Personal/Sale/us';
import usLangOrder from './Personal/Order/us';

const btn = {
  'btn.confirm': 'Confirm',
  'btn.update': 'Update',
  'btn.close': 'Close',
  'btn.back': 'Back',
  'btn.yes': 'Yes',
  'btn.cancel': 'Cancel',
  'btn.save': 'Save',
  'btn.finish': 'Finish',
  'btn.get-price': 'Get price',
  'btn.transport-order': 'Transport Order',
  'btn.save-config': 'Save Config',
  'btn.claimPermission': 'Claim Permission',
  'btn.accept': 'Accept',
  'btn.add': 'Add',
  'btn.skip': 'Skip',
};

const notfound = {
  'notfound.helmet.title': 'Not found page',
  'notfound.error-occurred': 'Ooops... looks like an error occurred!',
  'notfound.error-code': 'Error code',
  'notfound.back-home': 'Go back home',

};
const common = {
  'common.notice': 'Notify',
};
const usLangLib = {
  ...btn,
  ...notfound,
  ...usLangSale,
  ...usLangOrder,
  ...common,
};

export default usLangLib;
