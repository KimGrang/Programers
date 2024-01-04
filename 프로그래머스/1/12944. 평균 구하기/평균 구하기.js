function solution(arr) {
    var answer = 0;
    let len = arr.length 
    for(let i=0;i<len;i++){
        answer += Number(arr[i])
    }
    answer /=len
    return answer;
}