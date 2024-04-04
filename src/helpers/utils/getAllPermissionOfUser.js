export const getAllPermissionOfUser = (profileUser) => profileUser?.permissions?.data
  .map((item) => item.name)
  .concat(profileUser?.permissions?.data?.map((item) => item.name));
