module.exports = (probabilityMap) => {
  const roll = Math.random();
  let s = 0;

  const items = Array.from(probabilityMap.values());
  const keys = Array.from(probabilityMap.keys());

  for (let i = 0; i < probabilityMap.size; i += 1) {
    s += items[i];

    if (s > roll) {
      return (keys[i]);
    }
  }

  return -1;
};
