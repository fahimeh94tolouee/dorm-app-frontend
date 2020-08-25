export const RELIGIOUS_BELIEF_TYPES = {
  NONE: -1,
  RELIGIOUS: 1,
  NON_RELIGIOUS: 2,
  NEITHER: 3,
};
export const RELIGIOUS_BELIEF_OPTIONS = [
  {value: 'مذهبی', key: RELIGIOUS_BELIEF_TYPES.RELIGIOUS},
  {value: 'غیر مذهبی', key: RELIGIOUS_BELIEF_TYPES.NON_RELIGIOUS},
  {value: 'سازگار با هر دو', key: RELIGIOUS_BELIEF_TYPES.NEITHER},
];

export const SLEEP_STATUS_TYPES = {
  NONE: -1,
  LIGHT_SENSITIVE: 1,
  NOISE_SENSITIVE: 2,
  BOTH: 3,
  NEITHER: 4,
};

export const SLEEP_STATUS_OPTIONS = [
  {value: 'حساس به نور', key: SLEEP_STATUS_TYPES.LIGHT_SENSITIVE},
  {value: 'حساس به صدا', key: SLEEP_STATUS_TYPES.NOISE_SENSITIVE},
  {value: 'حساس به نور و صدا', key: SLEEP_STATUS_TYPES.BOTH},
  {value: 'حساس نیستم', key: SLEEP_STATUS_TYPES.NEITHER},
];

export const CLEAN_STATUS_TYPES = {
  NONE: -1,
  SENSITIVE: 1,
  NOT_IMPORTANT: 2,
};

export const CLEAN_STATUS_OPTIONS = [
  {value: 'حساس هستم', key: CLEAN_STATUS_TYPES.SENSITIVE},
  {value: 'حساس نیستم', key: CLEAN_STATUS_TYPES.NOT_IMPORTANT},
];

export const NOISE_STATUS_TYPES = {
  NONE: -1,
  SENSITIVE: 1,
  NOT_IMPORTANT: 2,
};

export const NOISE_STATUS_OPTIONS = [
  {value: 'حساس هستم', key: NOISE_STATUS_TYPES.SENSITIVE},
  {value: 'حساس نیستم', key: NOISE_STATUS_TYPES.NOT_IMPORTANT},
];

export const PERSONALITY_STATUS_TYPES = {
  NONE: -1,
  INTROVERT: 1,
  EXTROVERT: 2,
};

export const PERSONALITY_STATUS_OPTIONS = [
  {value: 'درون‌گرا', key: PERSONALITY_STATUS_TYPES.INTROVERT},
  {value: 'برون‌گرا', key: PERSONALITY_STATUS_TYPES.EXTROVERT},
];
