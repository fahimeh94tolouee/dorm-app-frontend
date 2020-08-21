import Storage from 'react-native-expire-storage';

export const setToken = (token) => {
  Storage.setItem(
    'accessToken',
    token.access_token,
    (token.expires_in - 30) * 1000,
  );
  Storage.setItem(
    'refreshToken',
    token.refresh_token,
    180 * 24 * 60 * 60 * 1000,
  );
};
