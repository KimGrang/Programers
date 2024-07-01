function solution(num_list, n) {
    let answer = 0;
    for(let i in num_list){
        if(n==num_list[i]){
            answer++
            break;
        }
    }
    return answer;
}