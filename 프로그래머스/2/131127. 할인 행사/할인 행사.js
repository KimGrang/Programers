function solution(want, number, discount) {
    let answer = 0;
    let jh = new Map();
    let len_want = want.length;
    let len_dis = discount.length;
    for(let i = 0; i<len_want;i++){
        jh.set(want[i],number[i])
    }
    for(let j = 0; j<len_dis;j++){
        const jh2 = new Map(jh)
        for(let k = j; k<j+10;k++){
            const item = discount[k];
            if (jh2.has(item)){
                const count = jh2.get(item);
                if(count <= 1){
                    jh2.delete(item);
                }
                else{
                    jh2.set(item,count-1)
                }
            }
        }
        if(jh2.size === 0){
            answer ++
        }
    }    
    return answer;
}