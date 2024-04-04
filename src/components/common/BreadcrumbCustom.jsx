import { NavLink } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { IntlMessages } from '~/helpers/utils';

// import hooks from '~/hooks';

const getMenuTitle = (sub) => {
  if (`/${sub}` === '/') {
    return <IntlMessages id="common.dashboard-get-menu" />;
  }
  return sub;
};

const BreadcrumbCustom = ({
  heading, parent, children, match, isProfile,
}) => (
  <>
    <h1>{heading}</h1>
    {children}
    <BreadcrumbItems parent={parent} match={match} isProfile={isProfile} />
  </>
);

const BreadcrumbItems = ({ parent, match, isProfile }) => {
  const path = match.path.substr(1);
  let paths = path.split('/');
  if (paths[paths.length - 1].indexOf(':') > -1) {
    paths = paths.filter((x) => x.indexOf(':') === -1);
  }
  return (
    <>
      <Breadcrumb className="pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block">
        {isProfile ? (
          <>
            <BreadcrumbItem>
              <NavLink to="/">
                <IntlMessages id="common.dashboard" />
              </NavLink>
            </BreadcrumbItem>
            <BreadcrumbItem active>
              <IntlMessages id="common.profile" />
            </BreadcrumbItem>
          </>
        ) : (
          <BreadcrumbItem active>{getMenuTitle(parent)}</BreadcrumbItem>
        )}
      </Breadcrumb>
    </>
  );
};

export default BreadcrumbCustom;
