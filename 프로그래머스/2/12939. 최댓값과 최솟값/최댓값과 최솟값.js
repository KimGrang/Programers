function solution(s) {
    let arr = [s.split(' ').sort((a,b)=>a-b)]
    
    return arr[0][0] + " " + arr[0][arr[0].length-1]
    
}