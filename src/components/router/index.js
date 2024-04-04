import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import routes
import {
  routesSale,
} from '~/routes';

// import layouts
import {
  SaleLayout,
} from '~/layouts';
import { LoadingPage, NotFoundPage } from '~/pages/Other';

// others
const Routing = () => (
  <Suspense fallback={<LoadingPage />}>
    <Router>
      <Switch>
        {routesSale.map(({ id, path, component }) => (
          <SaleLayout key={id} path={path} component={component} exact />
        ))}
        <Route path="*" component={NotFoundPage} exact />
      </Switch>
    </Router>
  </Suspense>
);

export default Routing;
