const chainToObject = (map) => {
  const obj = [];

  map.forEach((item, key) => {
    if (item instanceof Map) {
      obj.push([key, chainToObject(item)]);
    } else {
      obj.push([key, item]);
    }
  });

  return obj;
};

module.exports = chainToObject;
