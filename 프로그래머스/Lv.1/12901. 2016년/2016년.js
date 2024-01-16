function solution(a, b) {
    var answer = '';
    let days = b+4;
    let week = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    let last = [31,29,31,30,31,30,31,31,30,31,30,31]; 
    for(let i=1;i<a;i++){
        days+=last[i-1]
    }
    
    return week[days%7]
}