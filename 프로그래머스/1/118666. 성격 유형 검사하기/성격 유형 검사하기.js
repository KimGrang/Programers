function solution(survey, choices) {
    let map = {"R": 0, "C": 0, "J": 0, "A": 0, "T": 0, "F": 0, "M": 0, "N": 0};
    for (let i = 0; i < survey.length; i++) {
        const sur = survey[i];
        const score = Math.abs(choices[i]-4);
        if (choices[i] < 4) {
            map[sur[0]] += score;
        } else if (choices[i] > 4) {
            map[sur[1]] += score;
        } 
    }

    return (map["R"] >= map["T"] ? "R" : "T")+
        (map["C"] >= map["F"] ? "C" : "F")+
        (map["J"] >= map["M"] ? "J" : "M")+
        (map["A"] >= map["N"] ? "A" : "N");
}