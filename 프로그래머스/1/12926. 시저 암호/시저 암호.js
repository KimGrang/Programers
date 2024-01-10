function solution(s, n) {
    let U = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let l = 'abcdefghijklmnopqrstuvwxyz'
    let answer = '';
    for(let i=0;i<s.length;i++){
        let str = s[i];
        if(str===' '){
            answer+=' '
            continue
        }
        let arr = U.includes(str)? U:l;
        let idx = arr.indexOf(str)+n;
        if(idx>=arr.length){
            idx-=arr.length
        }
        answer += arr[idx]
    }
    return answer;
}