function solution(s) {
    var answer = '';
    let strs = s.split(' ')
    for(let i=0;i<strs.length;i++){
        let word = strs[i]
        for(let j=0;j<word.length;j++){
            if(j%2===0){
                answer += word[j].toUpperCase();
            } 
            else{
                answer += word[j].toLowerCase();
            }
        }
        if(i<strs.length -1){
            answer += ' ';
        }
    }
    return answer;
}