function main(a, b) {
  let aarA = toArray(a);
  let aarB = toArray(b);
  let toDelete = 0;
  while (arrA.length > 0 && arrB.length > 0) {
    if (aarA[0][0] == aarB[0][0]) {
      if (arrA[0].length > aarB[0].length) {

      }
    }
  }
}

function toArray(str) {
  let arr = [];
  for (let i=0; i<str.length; i++) {
    let added = false;
    for (let j=0; j<arr.length; j++) {
      if (str[i] == arr[j][0]) {
        added = true;
        arr[j] += str[i];
      }
    }
    if (!added) {
      arr.push(str[i]);
    }
  }
  arr = arr.sort();
  return arr;
}

console.log(toArray('fskdlfjlkashgh'));
console.log(toArray('fskdhgh'));
console.log(toArray('fssadf'));