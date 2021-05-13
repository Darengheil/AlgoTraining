/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

 var intersect = function(nums1, nums2) {
  nums1.sort((a,b) => a - b);
  nums2.sort((a,b) => a - b);
  const answ = [];
  let counter1 = 0, counter2 = 0;
  while(counter1 < nums1.length && counter2 < nums2.length){
    if(nums1[counter1] === nums2[counter2]){
      answ.push(nums1[counter1]);
      counter1++;
      counter2++;
    }
    else if(nums1[counter1]<nums2[counter2]){
      counter1++;
    }
    else{
      counter2++;
    }
  }
  return answ;
};
// console.log(intersect([1,2,2,1], [2,2])); // 2,2
console.log(intersect([4,9,5], [9,4,9,8,4])); // 4,9
// console.log(intersect([1,2,2,1], [2])); // 2
// console.log(intersect([1,2,2,2,1], [2,2])); // 2,2
