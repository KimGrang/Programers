function solution(ingredient) {
  let answer = 0;
  const now = [];

  for (let i of ingredient) {
    now.push(i);

    if (now.slice(-4).join('') == '1231') {
      now.splice(-4);
      answer++;
    }
  }
  return answer;
}