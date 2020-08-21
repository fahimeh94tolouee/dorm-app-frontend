import * as ErrorType from '../../constants/inputFieldRelatedConstants';
export const errorGenerator = (type, name) => {
  switch (type) {
    case ErrorType.NOT_EMPTY:
      return `${name} نمی‌تواند خالی باشد.`;
    case ErrorType.AT_LEAST_4:
      return `${name} نمی‌تواند از ۴ کاراکتر کمتر باشد.`;
    default:
      break;
  }
};
