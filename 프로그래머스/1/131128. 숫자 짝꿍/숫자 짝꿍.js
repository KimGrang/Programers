function solution(X, Y) {
    var answer = '';
    X = X.split('')
    Y = Y.split('')
    for (let i=0;i<10;i++){
        let newX=X.filter(x=>Number(x)===i).length;
        let newY=Y.filter(y=>Number(y)===i).length;
        answer += i.toString().repeat(Math.min(newX,newY))
    }
    if(answer==='') return '-1';
    else if(answer.split('').every(x => x === '0')) return '0';
    else{
        return answer.split('').sort().reverse().join('');
    }
}