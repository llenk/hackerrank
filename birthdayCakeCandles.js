function birthdayCakeCandles(ar) {
  let maxHeight = 0;
  let numCandles = 0;
  for (let i = 0; i < ar.length; i++) {
    if (ar[i] > maxHeight) {
      maxHeight = ar[i];
      numCandles = 1;
    }
    else if (ar[i] == maxHeight) {
      numCandles++;
    }
  }
  return numCandles;
}

console.log(birthdayCakeCandles([3, 2, 1, 3]));