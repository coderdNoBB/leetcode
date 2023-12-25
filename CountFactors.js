function solution(N) {
  // Implement your solution here
  let counter = 0;
  const sqrtN = Math.floor(Math.sqrt(N));
  for (let i = 1; i <= sqrtN; i++) {
    const a = N % i;
    if (a === 0) counter += 2;
  }

  if (sqrtN * sqrtN === N) counter--;
  return counter;
}

console.log(solution(41));
