function solution(s) {
    let answer = [];
    let temp = [];
    
    for(let i = 0; i < s.length; i++){
        if(!temp.includes(s[i])){
            answer.push(-1);
            temp.push(s[i]);
        } else if(temp.includes(s[i])){
            answer.push(i - temp.lastIndexOf(s[i]));
            temp.push(s[i]);
        }
        
    }
    return answer;
}