function solution(s) {
    let arr = [];
    var answer = 0 ;
    let str = s.split('')
    for(let i=0;i<s.length;i++){
        arr.push(s[i])
        let eq = arr.filter((item)=>item===arr[0])
        let dif = arr.filter((item)=>item!==arr[0])
        if(eq.length===dif.length){
            answer ++;
            arr=[];
        }
    }
    if(arr.length !==0){
        answer++
    }
    return answer;
}