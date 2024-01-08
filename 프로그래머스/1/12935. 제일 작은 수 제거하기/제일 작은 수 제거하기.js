function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)),1)
    arr.length>1? answer= arr :answer = [-1]
    return answer
}