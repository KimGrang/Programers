function solution(n)
{
    let nums = n.toString().split('')
    let len = n.toString().length
    var answer = 0;
    for(let i=0; i<len ;i++){
        answer += Number(nums[i])
    }
    
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log(answer)

    return answer;
}