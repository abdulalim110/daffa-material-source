/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let result

    nums.map((item, index)=>{
        for (i = index+1; i< nums.length; i++){
            let sum = nums[index] + nums[i]
            if(sum === target){
                result = [index, i]
            }
        }
    })

    return result
};