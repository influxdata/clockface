const bubbleSort = (array) => {
  for (let j = 0; j < array.length; j++) {
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]]
      }
    }
  }
  return array;
};

module.exports = {
  bubbleSort
};