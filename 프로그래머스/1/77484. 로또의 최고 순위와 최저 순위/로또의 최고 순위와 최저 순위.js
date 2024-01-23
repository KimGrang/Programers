function solution(lottos, win_nums) {
    var answer = [];
    const cor = lottos.filter(n => win_nums.includes(n)).length;
    const zeros = lottos.filter(n => !n).length;
    console.log(cor, zeros);
    
    let min = 7-cor >= 6 ? 6 : 7-cor;
    let max = min-zeros < 1 ? 1 : min-zeros;
    
    answer = [max, min]
    return answer;
}