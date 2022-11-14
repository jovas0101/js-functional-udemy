Array.prototype.myMap = function (fn) {
  const mapped = [];

  for (let i = 0; i < this.length; i++) {
    const result = fn(this[i], i, this);
    mapped.push(result);
  }

  return mapped;
};
