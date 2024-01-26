function solution(n, lost, reserve) {
    let reallost = lost.filter(l=>{return !reserve.includes(l)}).sort((a,b)=>a-b)
    let realreserve = reserve.filter(r=>{return !lost.includes(r)}).sort((a,b)=>a-b)
    let answer = n-reallost.length
    for(let l of reallost){
        if(realreserve.includes(l-1)){
            realreserve = realreserve.filter((r)=>r!==l-1)
            answer ++
        }
        else if(realreserve.includes(l+1)){
            realreserve = realreserve.filter((r)=>r!==l+1)
            answer ++
        }
    }
    return answer
}