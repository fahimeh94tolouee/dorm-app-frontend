import Storage from 'react-native-expire-storage';

export const setToken = (token) => {
  console.log(token, 'EE');
  Storage.setItem(
    'accessToken',
    token.access_token,
    token.expires_in - 30,
  ).then(console.log);
  Storage.setItem('refreshToken', token.refresh_token, 180 * 24 * 60 * 60).then(
    console.log,
  );
};
