class Sorter {
  constructor() {
    this.arr = []; //create array
  }

  add(element) {
    this.arr.push(element); //add new element in the end of the array
  }

  at(index) {
    return this.arr[index]; //return element in index position
  }

  get length() {
    return this.arr.length; //return length of array
  }

  toArray() {
    return this.arr; //return all array
  }

  sort(indices) {
    var tmp = this.arr.slice(0, indices.length);
    function compare (indices) {
      return indices[0] - indices[1];
    };
    tmp.sort(compare(indices));
    for (let i = 0; i < tmp.length; i++) {
      this.arr[i] = tmp[i];
    };
    return this.arr;
  }

  setComparator(compareFunction) {
    return function (a, b) {
      return a-b;
    };
  }
};
module.exports = Sorter;
