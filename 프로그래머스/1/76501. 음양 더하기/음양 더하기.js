function solution(absolutes, signs) {
    let answer = 0;
		// 두 배열 길이 같음
    for (let i = 0; i < absolutes.length; i++) {
				// 부호에 따라 +-
        signs[i]? answer += absolutes[i] : answer -= absolutes[i]
    }
    return answer;
}