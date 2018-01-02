const chainToObject = (map) => {
    const out = [];

    map.forEach((item, key) => {
        if(item instanceof Map) {
            out.push([key, chainToObject(item)]);
        }
        else {
            out.push([key, item]);
        }
    });

    return out;
}

module.exports = chainToObject;
