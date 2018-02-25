class Sorter {
  constructor() {
    this.arr = []; //create array
    this.compareFunction=0;
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
    var ind = indices.sort(function (a, b) {return a-b;}), //sort position number
    tmp = this.arr.slice(ind[0], ind[ind.length-1]+1); //create new array which contain sorting elements
    if (this.compareFunction) { // if there is a compare function that comes from outside
    tmp.sort(this.compareFunction); // we use it
    var n = 0;
    for (let i = 0; i < ind.length; i++) { //change elements into original array
      this.arr[indices[i]] = tmp[n];
      n++;
    };
    return this.arr;
  } else {
    tmp.sort(function (a, b) {return a-b;}); //if there is no compare function sort this array
    var n = 0;
    for (let i = 0; i < ind.length; i++) { //change elements into original array
      this.arr[indices[i]] = tmp[n];
      n++;
    };
    return this.arr;
  };
};

  setComparator(compareFunction) {
    this.compareFunction=compareFunction;
  };
};
module.exports = Sorter;
