function solution(n) {
    let nums = n.toString().split('').reverse()
    for(let i=0;i<nums.length;i++){
        nums[i] = Number(nums[i])
    }
    
    console.log(nums)
    
    
    return nums;
}