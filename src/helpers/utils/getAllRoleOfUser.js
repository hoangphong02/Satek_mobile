export const getAllRoleOfUser = (profileUser, field = 'id') => profileUser.roles.data.map((item) => item[field]);
