function solution(n) {
    let num = n.toString().split('').sort().reverse().join('')
    return Number(num)
}