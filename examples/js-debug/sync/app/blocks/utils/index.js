export const mapObject = (obj, func) => {
  const keys = Object.keys(obj);
  return keys.reduce((result, key) => {
    return {...result, [key]: func(obj[key])};
  }, {});
};

export const convertStringToInt = str => parseInt(str, 10);
