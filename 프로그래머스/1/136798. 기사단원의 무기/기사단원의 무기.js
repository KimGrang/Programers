function solution(number, limit, power) {
    let answer = 0;
    
    for(let i = 1; i<=number;i++){
        let div = 0
        for(let j = 1 ; j <= Math.sqrt(i) ; j++){
            if(i % j === 0) {
                if(i / j === j) {
                    div += 1;
                }
                else {
                    div += 2 
                }
            }
            if(div>limit){
                div = power
                break;
            }
        }
        answer += div
    }
    return answer;
}