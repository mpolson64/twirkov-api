module.exports = (obj) => {
    const out = new Map();

    obj.forEach((element) => {
        out.set(element[0], new Map(element[1]));
    });

    return out;
}
