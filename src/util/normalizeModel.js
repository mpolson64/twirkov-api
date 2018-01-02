module.exports = (model) => {
  const chain = new Map();

  model.forEach((map, key) => {
    const total = Array.from(map.values()).reduce((sum, num) => (sum + num));

    const normalizedMap = new Map();

    map.forEach((occurance, word) => {
      normalizedMap.set(word, occurance / total);
    });

    chain.set(key, normalizedMap);
  });

  return (chain);
};
