function solution(s, skip, index) {
    let answer = ''
    let alphabet = 
          'abcdefghijklmnopqrstuvwxyz'
    for (let skipped of skip){
        alphabet = alphabet.replace(skipped,'')
    }
    alphabet = alphabet.split('')
    for(let _s of s){
        answer += alphabet[(alphabet.indexOf(_s)+index)%alphabet.length]
    }
    return answer
}