import configs from 'configs';

export const STORAGE_KEYS = {
  ACCESS_TOKEN: 'ACCESS_TOKEN',
};

export const setItem = async (key, item) => {
  let stringItem = item;
  if ((typeof item) !== 'string') {
    stringItem = item.toString();
  }
  await localStorage.setItem(`${configs.storagePrefix}${key}`, stringItem);
};

export const getItem = async (key) => {
  const value = await localStorage.getItem(key);
  return value;
};
