function solution(k, m, score) {
    if(score.length < m) return 0
    var answer = 0;
    score.sort();
    while(score.length >= m){
        let box = score.splice(score.length-m,m);
        answer += box[0]*m  
    }
    return answer;
}