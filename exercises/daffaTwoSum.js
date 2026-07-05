const numbers = [2, 7, 11, 15];
const target = 9;

function twoSums(nums, target){

  for(let i = 0; i<nums.length; i++){
    for (j = i+1; j< nums.length; j++){
      let result = nums[i]+ nums[j]
      if (result === target){
        return([i, i+1])
      }
    }
  }
}
console.log(twoSums(numbers, target))