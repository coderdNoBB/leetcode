function solution(A) {
  // Implement your solution here
  const map = new Map();
  let counter = 0,
    key,
    idx;

  for (let i = 0; i < A.length; i++) {
    const a = map.get(A[i]);
    let num = 0;
    if (a === undefined) {
      num = 1;
    } else {
      num = a + 1;
    }
    map.set(A[i], num);
    if (counter < num) {
      counter = num;
      key = A[i];
      idx = i;
    }
  }
  // console.log(`${key} ,  ${map.get(key)}`)
  const times = map.get(key);
  if (times > A.length / 2) {
    return idx;
  } else {
    return -1;
  }
}
