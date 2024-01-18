function solution(answers) {
    let score = [0,0,0];
    let w1 = [1,2,3,4,5];
    let w2 = [2,1,2,3,2,4,2,5];
    let w3 = [3,3,1,1,2,2,4,4,5,5];
    for(let i=0;i<answers.length;i++){
        if(w1[i%w1.length]===answers[i]){
            score[0] ++
        }
        if(w2[i%w2.length]===answers[i]){
            score[1] ++
        }
        if(w3[i%w3.length]===answers[i]){
            score[2] ++
        }
    }
    let answer = [];
    let scoreMax = Math.max(...score);
    for(let i=0;i<3;i++){
        if(scoreMax===score[i]){
            answer.push(i+1)
        }
    }
    return answer;
}