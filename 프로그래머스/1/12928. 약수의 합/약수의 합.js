function solution(n) {
    var answer = 0;
    let len = n.toString().length;
    for(let i=1 ; i<=n ; i++){
        if(n%i===0){
            answer+=i
        }
    }
    
    return answer;
}