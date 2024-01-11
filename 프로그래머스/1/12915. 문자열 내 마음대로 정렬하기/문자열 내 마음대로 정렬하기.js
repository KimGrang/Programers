function solution(strings, n) {
    var answer = [];
    for(let i=0;i<strings.length;i++){
        answer.push(strings[i][n]+strings[i])
    }
    answer = answer.sort()
    for(let i=0;i<strings.length;i++){
        answer[i] = answer[i].substr(1)
    }
    
    return answer;
}