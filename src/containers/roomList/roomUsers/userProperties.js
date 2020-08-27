import React from 'react';
import {
  UserPropertyParent,
  UserPropertyContainer,
  UserPropertyText,
} from '../style';
import {
  CLEAN_STATUS_OPTIONS,
  NOISE_STATUS_OPTIONS,
  PERSONALITY_STATUS_OPTIONS,
  RELIGIOUS_BELIEF_OPTIONS,
  SLEEP_STATUS_OPTIONS,
} from '../../../constants/roomMemberPropertiesTypes';
const UserProperties = ({user}) => {
  const rb = RELIGIOUS_BELIEF_OPTIONS.filter(
    (item) => item.key === user.religious_belief,
  );
  const st = SLEEP_STATUS_OPTIONS.filter(
    (item) => item.key === user.sleep_type,
  );
  const ct = CLEAN_STATUS_OPTIONS.filter(
    (item) => item.key === user.clean_type,
  );
  const nt = NOISE_STATUS_OPTIONS.filter(
    (item) => item.key === user.noise_type,
  );
  const pt = PERSONALITY_STATUS_OPTIONS.filter(
    (item) => item.key === user.personality_type,
  );
  const items = [
    {label: 'نام کاربری', value: user.user},
    {label: 'نام', value: user.first_name},
    {label: 'نام خانوادگی', value: user.last_name},
    {label: 'شهر', value: user.city},
    {label: 'شماره تلفن همراه', value: user.phone_number},
    {label: 'رشته', value: user.major},
    {
      label: 'اعتقادات مذهبی',
      value: rb.length > 0 ? rb[0].value : '',
    },
    {
      label: 'حساسیت در خواب',
      value: st.length > 0 ? st[0].value : '',
    },
    {
      label: 'حساسیت در نظافت',
      value: ct.length > 0 ? ct[0].value : '',
    },
    {
      label: 'حساسیت به سر و صدا',
      value: nt.length > 0 ? nt[0].value : '',
    },
    {
      label: 'تیپ شخصیتی',
      value: pt.length > 0 ? pt[0].value : '',
    },
    {label: 'توضیحات', value: user.note},
  ];
  return (
    <UserPropertyParent>
      {items.map((item) => {
        return (
          <UserPropertyContainer>
            <UserPropertyText>{item.label}</UserPropertyText>
            <UserPropertyText>
              {item.value ? item.value : '--'}
            </UserPropertyText>
          </UserPropertyContainer>
        );
      })}
    </UserPropertyParent>
  );
};

export default UserProperties;
