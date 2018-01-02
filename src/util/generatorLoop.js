const feedforward = require('./feedforward');

module.exports = (chain, seeds) => {
    var keys = [];

    var seed = seeds[Math.floor(Math.random() * seeds.length)];

    while(!seed.includes('||')) {
        keys.push(seed);
        console.log(chain.get(seed));
        long = seed + '|' + feedforward(chain.get(seed));
        seed = long.substr(long.indexOf('|') + 1);
    }

    return joinKeys(keys);
}

const joinKeys = (keys) => {
    var words = keys[0].split('|');

    let following = keys.slice(1);

    following.forEach((key) => {
        let ind = key.split('|');
        words.push(ind[ind.length - 1]);
    });

    return words.join(' ');
}
