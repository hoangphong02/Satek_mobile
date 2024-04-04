import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store } from '~/redux/storeConfig/store';
// import HttpsRedirect from 'react-https-redirect';
import { LoadingPage } from './pages/Other';
import reportWebVitals from './reportWebVitals';

const App = React.lazy(() => import('./App'));

ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback={<LoadingPage />}>
      {/* <HttpsRedirect> */}
      <App />
      {/* </HttpsRedirect> */}
    </Suspense>
  </Provider>,
  document.getElementById('root'),
);

reportWebVitals();
