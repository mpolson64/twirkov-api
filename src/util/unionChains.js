const normalizeModel = require('./normalizeModel.js');

module.exports = (chain0, chain1) => {
    out = new Map(Array.from(chain0));

    chain1.forEach((map, key) => {
        if(out.has(key)) {
            map.forEach((occurance, word) => {
                if(out.get(key).has(word)) {
                    out.get(key).set(word, out.get(key).get(word) + occurance);
                }
                else {
                    out.get(key).set(word, occurance);
                }
            });
        }
        else {
            out.set(key, chain1.get(key));
        }
    });

    return(normalizeModel(out));
}
