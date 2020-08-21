import {RNToasty} from 'react-native-toasty';

export default (message, type) => {
  switch (type) {
    case SUCCESS:
      return RNToasty.Success({
        title: message,
        fontFamily: 'IRANSansMobile-Light',
        position: 'bottom',
        titleSize: 12,
      });
    case ERROR:
      return RNToasty.Error({
        title: message,
        fontFamily: 'IRANSansMobile-Light',
        position: 'bottom',
        titleSize: 12,
      });
    case INFO:
      return RNToasty.Info({
        title: message,
        fontFamily: 'IRANSansMobile-Light',
        position: 'bottom',
        titleSize: 12,
      });
  }
};

export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';
export const INFO = 'INFO';
