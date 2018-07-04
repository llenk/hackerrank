function breakingRecords(scores) {
  let min = scores[0];
  let max = scores[0];
  let minRecords = 0;
  let maxRecords = 0;
  for (let i = 1; i< scores.length; i++) {
    if (scores[i] > max) {
      maxRecords++;
      max = scores[i];
    }
    if (scores[i] < min) {
      minRecords++;
      min = scores[i];
    }
  }
  return [maxRecords, minRecords];
}

console.log(breakingRecords([6,7,5,8,4,9,3,10]));

// 4 , 3