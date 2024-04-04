export const formattedPhoneNumber = (phoneNumber, hasSpace = false) => {
  let val = '';
  if (hasSpace) {
    val = phoneNumber?.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4');
  } else {
    val = phoneNumber?.replace(/(\d{4})(\d{3})(\d{3})/, '$1.$2.$3');
  }
  return val;
};
