function solution(array, commands) {
    var answer = [];
    for(let i=0;i<commands.length;i++){
        let start = commands[i][0]-1
        let end = commands[i][1]
        let idx = commands[i][2]-1
        answer.push(array.slice(start,end).sort((a,b)=>a-b)[idx])
        // "sort()는 compareFunction이 제공되지 않으면 유니코드 순서로 문자열을 비교해서 정렬합니다."
        // 라는 글을 읽고 sort에 compareFunction 추가
    }
    return answer;
}

