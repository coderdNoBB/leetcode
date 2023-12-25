function solution(A) {
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

  const leaderTotal = map.get(key);
  let S = 0;
  let leaderCounter = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] === key) {
      leaderCounter++;
    }

    let preLeaderNum = (i + 1) / 2;
    let postleaderNum = (A.length - i - 1) / 2;
    if (
      leaderCounter > preLeaderNum &&
      leaderTotal - leaderCounter > postleaderNum
    ) {
      S++;
    }
  }
  return S;
}
