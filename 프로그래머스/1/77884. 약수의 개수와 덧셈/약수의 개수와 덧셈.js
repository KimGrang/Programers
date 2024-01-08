function solution(left, right) {
  let answer = 0;
  for(let i=left; i<=right; i++) {
    let div = 1;
    for(j=2; j<=i; j++) {
      if(i%j == 0) div++;
    }
    div%2==0? answer+= i:answer-=i
  }
  return answer;
}