function solution(keymap, targets) {
    let answer = [];
    let key_map = new Map();
    for(let key of keymap){
        for(let i=0; i<key.length;i++){
            if(!key_map.has(key[i])||i+1<key_map.get(key[i])){
                key_map.set(key[i],i+1)
            }
        }   
    }
    for(let target of targets){
        let count = 0;
        for(let i=0;i<target.length;i++){
            count += key_map.get(target[i])
        }
        
        answer.push(count||-1)
    }
    return answer;
}