function solution(nums) {
    var answer = 0;
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            for(let k=j+1;k<nums.length;k++){
                let sum = nums[i]+nums[j]+nums[k]
                answer++;
                for(let d=2;d<=Math.sqrt(sum);d++){
                    if(sum%d===0){
                        answer --
                        break
                    }
                }
            }
        }  
    }
    return answer;
}