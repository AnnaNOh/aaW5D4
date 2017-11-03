//phase 2

Array.prototype.myEach = function(cb) {

  for (let i = 0; i < this.length; i++) {
    cb(this[i]);
  }
  return undefined;
};

// const arr1 = [1, 2, 3, 4, 5];
// const cb1 = (a) =>  console.log(a + 1);
//
// arr1.myEach(cb1);

Array.prototype.myMap = function(cb) {
  const result = [];
  this.myEach(function(ele) {
    result.push(cb(ele));
  });
  return result;
};

// const arr2 = [1, 2, 3];
// console.log(arr2.myMap(a => a * 2));

Array.prototype.myReduce = function(cb, initialValue = 0) {
  let result = initialValue;

  this.myEach(function(ele) {
    result = cb(result, ele);
  });

  return result;
};

// const arr3 = [1, 2, 3];
// console.log(arr3.myReduce(((a, b) => a * b * b), 2));
