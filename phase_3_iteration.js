// phase 3

Array.prototype.bubbleSort = function() {
  let sorted = false;
  while (sorted === false) {
    sorted = true;
    for (let i = 0; i < this.length-1; i++) {
      if (this[i] > this[i+1]) {
        [this[i],this[i+1]] = [this[i+1], this[i]];
        sorted = false;
      }
    }
  }
  return this;
};

const test1 = [5,3,1,4];
console.log(test1.bubbleSort());


// substrings

String.prototype.substrings = function() {
  const result = [];
  for (let i=0; i<this.length; i++) {
    for (let j=i+1; j<=this.length; j++) {
      result.push(this.substring(i,j));
    }
  }
  return result;
};

const test10 = "corgi";
console.log(test10.substrings());
