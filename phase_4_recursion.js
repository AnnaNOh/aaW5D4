// phase 4

//range

function range(start, end) {
  if (start===end) {
    return [end];
  }
  return [start].concat(range(start+1, end));
}

console.log(range(1,5));


//sumRec(arr)

function sumRec(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  return arr[0] + sumRec(arr.slice(1));
}

console.log(sumRec([1,2,3,4,5]));


// exponent(base, exp) 1
function exponent(base, exp) {
  if (exp === 0) {
    return 1;
  }
  return base * exponent(base, exp-1);
}

console.log(exponent(2, 3));

// exponent 2

function exponent2(base, exp) {
  if (exp === 0) {
    return 1;
  }
  else if (exp === 1) {
    return base;
  }
  else if (exp % 2 === 0) {
    return Math.pow(exponent2(base, exp/2), 2);
  }
  else {
    return base * Math.pow(exponent2(base, (exp-1)/2), 2);
  }
}

console.log(exponent2(3,3));

function fibonacci(n) {
  if (n < 2) {
    return [1, 1].slice(0, n);
  }
  // const y = fibonacci(n-1);
  const x = fibonacci(n-1).slice(-2).reduce((a, b) => a + b);
  return fibonacci(n-1).concat([x]);
}

console.log(fibonacci(5));


// binary search
function bsearch(arr, target) {
  console.log(arr);
  if (arr.length <= 1) {
    if (arr[0] !== target || arr.length === 0)  {
      return -1;
    }
    else {
      return 0;
    }
  }

  let mid = Math.floor(arr.length/2);
  if (arr[mid] === target) {
    return mid;
  }
  else if (arr[mid] > target){
    let temp = bsearch(arr.slice(0, mid), target);
    if (temp === -1) {
      return -1;
    }
    else {
      return temp;
  }}
  else {
    let temp = bsearch(arr.slice(mid), target);
    if (temp === -1) {
      return -1;
    }
    else {
      return mid + temp;
  }
  }
}

const array2 = [1,2,3,4,5,6,7,8,9,10,11];
console.log(bsearch(array2, 12));
