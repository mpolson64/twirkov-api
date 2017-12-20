module.exports = (probabilityMap) => {
    let roll = Math.random();
    let s = 0;

    let items = Array.from(probabilityMap.values());
    let keys = Array.from(probabilityMap.keys());

    for(let i = 0; i < probabilityMap.size; i++) {
        s += items[i];

        if(s > roll) {
            return(keys[i]);
        }
    }
}
