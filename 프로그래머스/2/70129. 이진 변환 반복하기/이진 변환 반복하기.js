function solution(s) {
    let answer = [0,0];
    while(s.length > 1) { 
       answer[0] ++ 
       let str = 0;
       let ans = s.split("").filter(x => {
            if(x == 0) {
                answer[1] ++
            } else {
                str++; 
            }
        }); 
        s = str.toString(2); 
    }
    return answer
}