function solution(progresses, speeds) {

    let answer = [];
    let rest = 
        progresses.map((progresses,idx)=>
                       Math.ceil((100 - progresses) / speeds[idx])
                      );
    const leng = rest.length
    let maxrest = rest[0]
    let cnt = 1;
    for(let i=1;i<leng;i++){
        if(rest[i]<=maxrest){
            cnt++
        }
        else{
            maxrest = rest[i];
            answer.push(cnt);
            cnt = 1;
        }
    }
    answer.push(cnt);
    return answer;
}