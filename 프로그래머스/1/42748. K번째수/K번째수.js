function solution(array, commands) {
    var answer = [];
    for(let i=0;i<commands.length;i++){
        let start = commands[i][0]-1
        let end = commands[i][1]
        let idx = commands[i][2]-1
        answer.push(array.slice(start,end).sort((a,b)=>a-b)[idx])
    }
    return answer;
}