function solve(s, d, m) {
  let numSegments = 0;
  for (let i = 0; i < s.length - m + 1; i++) {
    let sum = 0;
    for (let j = 0; j < m; j++) {
      sum += s[i + j];
    }
    if (sum == d) {
      numSegments++;
    }
  }
  return numSegments;
}

console.log(solve([1,2,1,3,2], 3,2));