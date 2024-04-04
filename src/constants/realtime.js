const getToken = () => {
  let token = '';
  const hostName = window.location.hostname;
  if (hostName === 'meko.satek.vn') {
    token = process.env.REACT_APP_REALTIME_TOKEN_DEV;
  } else if (hostName === 'app.mekotrading.vn') {
    token = process.env.REACT_APP_REALTIME_TOKEN_APP;
  } else if (hostName === 'localhost') {
    token = process.env.REACT_APP_REALTIME_TOKEN_LOCAL;
  }
  return token;
};
const token = getToken();
export const Realtime = 'SRealtime' in window && new window.SRealtime(token, {
  namespace: process.env.REACT_APP_REALTIME,
  authEndpoint: '',
});
