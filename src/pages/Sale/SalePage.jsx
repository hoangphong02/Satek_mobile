import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import config from '~/configs';
import { getAllPermissionOfUser } from '~/helpers/utils';

export const SalePage = () => {
  const { profileUser } = useSelector((state) => state.user);

  return (
    <Redirect
      exact
      to={
        getAllPermissionOfUser(profileUser?.data).includes('create-orders')
          ? profileUser?.data?.shop_info?.type === 'pharmacy'
            ? config.routesSale.retail
            : profileUser?.data?.shop_info?.type === 'other'
              ? config.routesSale.retail
              : profileUser?.data?.shop_info?.type === 'table'
                ? config.routesSale.fnb
                : '/'
          : '/'
      }
    />
  );
};
