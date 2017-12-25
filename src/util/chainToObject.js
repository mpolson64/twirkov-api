const mapToObject = (map) => {
    const out = [];

    map.forEach((item, key) => {
        if(item instanceof Map) {
            out.push([key, mapToObject(item)]);
        }
        else {
            out.push([key, item]);
        }
    });

    return out;
}

module.exports = mapToObject;
