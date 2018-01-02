const normalizeModel = require('./normalizeModel');

module.exports = (data, order) => {
  const model = new Map();

  if (data.length < order + 1) {
    return model;
  }

  let current = data.slice(0, order);

  data.slice(order).forEach((element) => {
    const currentKey = current.join('|');

    if (!model.has(currentKey)) {
      model.set(currentKey, new Map());
    }

    if (!model.get(currentKey).has(element)) {
      model.get(currentKey).set(element, 0);
    }

    model.get(currentKey).set(element, model.get(currentKey).get(element) + 1);

    current = current.slice(1);
    current = current.concat([element]);
  });

  return (normalizeModel(model));
};

