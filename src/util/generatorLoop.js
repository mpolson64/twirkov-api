const feedforward = require('./feedforward');

const joinKeys = (keys) => {
  const words = keys[0].split('|');

  const following = keys.slice(1);

  following.forEach((key) => {
    const ind = key.split('|');
    words.push(ind[ind.length - 1]);
  });

  return words.join(' ');
};

module.exports = (chain, seeds) => {
  const keys = [];

  let seed = seeds[Math.floor(Math.random() * seeds.length)];

  while (!seed.includes('||')) {
    keys.push(seed);

    const long = `${seed}|${feedforward(chain.get(seed))}`;
    seed = long.substr(long.indexOf('|') + 1);
  }

  return joinKeys(keys);
};
