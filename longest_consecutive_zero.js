function compareInt(a, b) {
  return a - b;
}
function solution(A) {
  // Implement your solution here
  const len = A.length - 1;
  A.sort(compareInt);
  console.log(A);
  return Math.max(A[0] * A[1] * A[len], A[len] * A[len - 1] * A[len - 2]);
}

A = [-1, -2222, 2, 1000000];
B = [-1, 0, 1, -22222, 333, -1111, 100000];
C = [1, 2, 3, 4, 5, 6, 8, 9, 11];

console.log(solution(A));
console.log(solution(B));
console.log(solution(C));
// console.log(~10000);
