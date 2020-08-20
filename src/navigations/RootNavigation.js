import * as React from 'react';
import {Auth} from '../constants/Navigations';

export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

export function isFirstPage() {
  return navigationRef.current.name === Auth;
}
