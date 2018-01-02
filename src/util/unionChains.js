const normalizeModel = require('./normalizeModel.js');

module.exports = (chain0, chain1) => {
  const union = new Map(Array.from(chain0));

  chain1.forEach((map, key) => {
    if (union.has(key)) {
      map.forEach((occurance, word) => {
        if (union.get(key).has(word)) {
          union.get(key).set(word, union.get(key).get(word) + occurance);
        } else {
          union.get(key).set(word, occurance);
        }
      });
    } else {
      union.set(key, chain1.get(key));
    }
  });

  return (normalizeModel(union));
};
