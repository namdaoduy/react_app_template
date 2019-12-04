import configs from 'configs';

export const STORAGE_KEYS = {
  ACCESS_TOKEN: 'ACCESS_TOKEN',
};

export const setItem = (key, item) => {
  let stringItem = item;
  if ((typeof item) !== 'string') {
    stringItem = item.toString();
  }
  localStorage.setItem(`${configs.storagePrefix}${key}`, stringItem);
};

export const getItem = (key) => {
  const value = localStorage.getItem(`${configs.storagePrefix}${key}`);
  return value;
};
