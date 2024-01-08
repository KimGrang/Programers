function solution(a, b) {
    var answer = 0;
    let i = 0;
    while(i!==a.length){
        answer += a[i]*b[i]
        i++
    }
    return answer;
}