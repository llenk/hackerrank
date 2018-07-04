function miniMaxSum(arr) {
  let min = Math.pow(10, 9) + 1;
  let max = 0;
  let minIndex = 0;
  let maxIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      maxIndex = i;
    }
    if (arr[i] < min) {
      min = arr[i];
      minIndex = i;
    }
  }
  let maxSum = 0;
  let minSum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i != maxIndex) {
      minSum += arr[i];
    }
    if (i != minIndex) {
      maxSum += arr[i];
    }
  }
  return minSum.toString() + ' ' + maxSum.toString();
}

console.log(miniMaxSum([1,2,3,4,5]));