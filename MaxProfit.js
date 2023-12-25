// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // Implement your solution here
  let maxEnd = 0,
    maxSlice = 0;
  if (A.length < 2) return 0;
  for (let i = 1; i < A.length; i++) {
    const delta = A[i] - A[i - 1];
    maxEnd = Math.max(0, maxEnd + delta);
    maxSlice = Math.max(maxEnd, maxSlice);
    // console.log(`${delta} ${maxSlice} ${maxEnd}`);
  }
  return maxSlice;
}
