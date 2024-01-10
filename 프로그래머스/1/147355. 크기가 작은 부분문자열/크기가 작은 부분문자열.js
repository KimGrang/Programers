function solution(t, p) {
    let answer = 0;
    for(let i=0;i<t.length-p.length+1;i++){
        console.log(i)
        let temp = t.substr(i,p.length)
        if(Number(temp)<=Number(p)){
            answer++
        }
    }
    return answer;
}