function getTotalX(a, b) {
  // find the max of array a and the min of array b
  let maxA = a[0];
  let minB = b[0];
  for (let i = 1; i < a.length; i++) {
    if (a[i] > maxA) {
      maxA = a[i];
    }
  }
  for (let i = 1; i < b.length; i++) {
    if (b[i] < minB) {
      minB = b[i];
    }
  }
  let numInts = 0;
  for (let i = maxA; i <= minB; i++) {
    let status = true;
    for (let j = 0; j<a.length; j++) {
      if (i % a[j] != 0) {
        status = false;
      }
    }
    for (let j = 0; j<b.length; j++ ) {
      if (b[j] % i != 0 ) {
        status = false;
      }
    }
    if (status) {
      numInts++;
    }
  }
  return numInts;
}

console.log(getTotalX([2, 4], [16, 32, 96]));