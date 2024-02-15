function solution(s, skip, index) {
    let answer = ''
    const alphabet = 
          'abcdefghijklmnopqrstuvwxyz'.split('').filter((n)=>!skip.includes(n))
    let _s = s.split('')
    
    answer = s.split('').map((a) => alphabet[(alphabet.indexOf(a)+index) % alphabet.length]).join('');

    return answer
}