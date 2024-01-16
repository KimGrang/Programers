function solution(k, score) {
    var answer = [];
    let temp = [];
    
    score.forEach(num =>{
        temp.push(num);
        temp.sort((a,b)=>b-a).splice(k)
        // console.log(temp)
        answer.push(Math.min.apply(null,temp))
        // console.log(answer)
    })
    return answer;
}