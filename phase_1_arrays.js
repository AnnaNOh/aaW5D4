
// Arrays

Array.prototype.uniq = function() {
  const array = [];
  for (let i = 0; i < this.length; i++) {
    if (!(array.includes(this[i]))) {
      array.push(this[i]);
    }
  }
  return array;
};

const test = [1,2,3,3,2];
console.log(test.uniq());


//twoSum

Array.prototype.twoSum = function() {
  const ogArray = this;
  const posPairs = [];
  ogArray.forEach(function(j) {
    ogArray.forEach(function(k){
      if (j<k && (ogArray[j] + ogArray[k])===0 ) {
        posPairs.push([j, k]);
        console.log([j, k]);
      }
    });
  });
  return posPairs;
};



const test2 = [1,2,3,0,-1];
console.log(test2.twoSum());


// console.log(JSON.stringify(test2.twoSum()));
// //transpose

Array.prototype.transpose = function() {
  const og = this.slice(0);
  const transposed = new Array();
  og.forEach(function(j, j_idx) {
    const newRow = new Array();
    og.forEach(function(k, k_idx) {
      newRow.push(og[k_idx][j_idx]);
    });
    transposed.push(newRow);
  });
  return transposed;
};

const test3 = [[1,2,3],[4,5,6],[7,8,9]];
console.log(JSON.stringify(test3.transpose()));
