module.exports = (obj) => {
  const chain = new Map();

  obj.forEach((element) => {
    chain.set(element[0], new Map(element[1]));
  });

  return chain;
};
