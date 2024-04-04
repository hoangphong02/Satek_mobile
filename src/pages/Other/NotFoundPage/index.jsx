import { useEffect } from 'react';
import { useIntl } from 'react-intl';
import { NavLink } from 'react-router-dom';
import { Card, CardTitle, Row } from 'reactstrap';

import ColCustom from '~/components/common/ColCustom';
import Helmet from '~/components/helmet';
import { IntlMessages } from '~/helpers/utils';

const NotFoundPage = () => {
  useEffect(() => {
    document.body.classList.add('background');
    document.body.classList.add('no-footer');

    return () => {
      document.body.classList.remove('background');
      document.body.classList.remove('no-footer');
    };
  }, []);
  const intl = useIntl();
  return (
    <Helmet
      title={intl.formatMessage({ id: 'notfound.helmet.title' })}
    >
      <div className="h-100">
        <div className="fixed-background" />
        <main>
          <div className="container">
            <Row className="h-100">
              <ColCustom xxs="12" md="10" className="mx-auto my-auto">
                <Card className="auth-card">
                  <div className="position-relative image-side " />
                  <div className="form-side">
                    <NavLink to="/" className="white">
                      <span className="logo-single" />
                    </NavLink>
                    <CardTitle className="mb-4">
                      <IntlMessages id="notfound.error-occurred" />
                    </CardTitle>
                    <p className="mb-0 text-muted text-small mb-0">
                      <IntlMessages id="notfound.error-code" />
                    </p>
                    <p className="display-1 font-weight-bold mb-5">404</p>
                    <NavLink
                      to="/"
                      className="btn btn-primary btn-shadow btn-lg"
                    >
                      <IntlMessages id="notfound.back-home" />
                    </NavLink>
                  </div>
                </Card>
              </ColCustom>
            </Row>
          </div>
        </main>
      </div>
    </Helmet>
  );
};

export default NotFoundPage;
