function solution(A) {
  // Implement your solution here
  let localMax = A[0];
  let absoluteMax = A[0];
  let nextSum = 0;
  for (let i = 1; i < A.length; i++) {
    nextSum = A[i] + localMax;
    localMax = Math.max(A[i], nextSum);
    absoluteMax = Math.max(absoluteMax, localMax);
  }
  return absoluteMax;
}
