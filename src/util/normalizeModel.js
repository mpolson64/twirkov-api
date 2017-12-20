module.exports = (model) => {
    chain = new Map();

    model.forEach((map, key) => {
        total = Array.from(map.values()).reduce((total, num) => {
            return(total + num);
        });

        normalizedMap = new Map();

        map.forEach((occurance, word) => {
            normalizedMap.set(word, occurance / total);
        });

        chain.set(key, normalizedMap);
    });

    return(chain);
}
