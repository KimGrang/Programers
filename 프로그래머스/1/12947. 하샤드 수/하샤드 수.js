function solution(x) {
    let nums = x.toString().split('')
    let sum = 0;
    for (let i=0;i<nums.length;i++){
        let num = Number(nums[i])
        sum += num
    }
    if (x%sum !== 0){
        return false
    }
    else{
        return true
    }

}