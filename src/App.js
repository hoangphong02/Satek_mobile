/* eslint-disable import/no-extraneous-dependencies */
import { useEffect } from 'react';
import { IntlProvider } from 'react-intl';

import { NotificationContainer } from './components/notifications';
import Router from './components/router';
// import { EchoConfig } from './constants/pusher';
import { getCurrentLanguage, getDirection } from './helpers/utils';
import AppLocale from './lang';
// pusher

function App() {
  const locale = getCurrentLanguage();
  const currentAppLocale = AppLocale[locale];

  useEffect(() => {
    const direction = getDirection();
    document.body.classList.add('rounded');
    if (direction.isRtl) {
      document.body.classList.add('rtl');
      document.body.classList.remove('ltr');
    } else {
      document.body.classList.add('ltr');
      document.body.classList.remove('rtl');
    }
  }, []);

  return (
    <div
      className="h-100"
      style={{
        overflowX: 'hidden',
      }}
    >
      <IntlProvider
        locale={currentAppLocale.locale}
        messages={currentAppLocale.messages}
      >
        <NotificationContainer />
        <Router />
      </IntlProvider>
    </div>
  );
}

export default App;
