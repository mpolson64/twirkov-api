const mapToObject = (map) => {
    const out = Object.create(null);

    map.forEach((item, key) => {
        if(item instanceof Map) {
            out[key] = mapToObject(item);
        }
        else {
            out[key] = item;
        }
    });

    return out;
}

module.exports = mapToObject;
