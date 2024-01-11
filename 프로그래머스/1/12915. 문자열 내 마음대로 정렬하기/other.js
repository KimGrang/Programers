function solution(strings, n) {
    var answer = [];
    for (var i = 0; i < strings.length; i++) {
        var chu = strings[i][n];
        strings[i] = chu + strings[i];
    }
    strings.sort();
    for (var j = 0; j < strings.length; j++) {
        strings[j] = strings[j].replace(strings[j][0],"");
        answer.push(strings[j])
    }

    return answer;
}
// 내부 인덱스 값 앞에 붙이고 그걸 기준으로 정렬 + 앞에 붙인 값 제거
// 필요한 정렬 두 가지를 (내부 인덱스 기준 정렬 + 남는 전체 string 정렬) 한번에
