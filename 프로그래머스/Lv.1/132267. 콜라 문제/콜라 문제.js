function solution(a, b, n) {
    let answer = 0
    let now = 0
    while(n >= a) {
        now = Math.floor(n/a)*b
        answer += now
        n = now + n%a
    }
    return answer
}