function solution(n, m, section) {
    var answer = 0;
    let painted = 0;
    for(let s of section){
        if(s<painted) {
            continue
        }
        painted = s+m;
        answer ++
    }
    return answer;
}