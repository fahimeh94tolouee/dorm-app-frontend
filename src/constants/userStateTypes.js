export const NONE = -1;
export const OK = 1;
export const PENDING = 2;

export default {
  [NONE]: {color: 'secondary', text: 'نامشخص', icon: 'user'},
  [OK]: {color: 'success', text: 'تایید شده', icon: 'user-check'},
  [PENDING]: {color: 'warning', text: 'در انتظار تایید', icon: 'user-clock'},
};
