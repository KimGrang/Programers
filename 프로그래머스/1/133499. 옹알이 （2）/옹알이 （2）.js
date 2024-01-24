function solution(babbling) {
    const can = ['aya', 'ye', 'woo', 'ma'];
    var answer = 0;
    for (const babble of babbling) {
        let current = babble;
        for (const keyword of can) {
            if (current.includes(keyword.repeat(2))) {
                break;
            }
            current = current.split(keyword).join(" ");
        }
        if (current.split(" ").join("").length === 0) {
            answer += 1;
        }
    }
    return answer;
}