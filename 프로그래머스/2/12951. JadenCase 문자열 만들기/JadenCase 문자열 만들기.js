function solution(s) {
    let answer = "";
    let _s = s.split(' ')
    for(let i of _s){
        i = i.toLowerCase();
        let newi = i.replace(i[0], char => char.toUpperCase());
        answer += newi + " "
    }
    answer = answer.substring(0,answer.length - 1)
    return answer;
}