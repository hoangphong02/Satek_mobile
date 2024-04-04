import React from 'react';
import { Alert } from 'reactstrap';
import hooks from '~/hooks';

const AlertCustom = ({ children, ...rest }) => {
  const listen = checkLoud();
  const type = rest.color;

  const successSoundElm = document.querySelector('#success-sound-noti');

  if (successSoundElm && type === 'success') {
    listen && successSoundElm?.play();
  }

  const errorSoundElm = document.querySelector('#error-sound-noti');

  if (errorSoundElm && type === 'danger') {
    listen && errorSoundElm?.play();
  }

  return (
    <Alert {...rest}>{children}</Alert>
  );
};

export default AlertCustom;
