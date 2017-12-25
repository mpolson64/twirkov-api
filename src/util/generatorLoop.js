const feedforward = require('./feedforward');

module.exports = (chain, seeds) => {
    words = [];

    seed = seeds[Math.floor(Math.random() * seeds.length)];

    while(seed !== '||') {
        words.push(seed);
        seed = feedforward(chain.get(seed));
    }

    return words.join(' ');
}
