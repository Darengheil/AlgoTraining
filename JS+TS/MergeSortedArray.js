/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
     Array.prototype.splice.apply(nums1, [m, n].concat(nums2));
     nums1.sort((a,b) => a-b);
};

// merge([1,2,3,0,0,0],3,[2,5,6],3);// [1,2,2,3,5,6]
merge([1],1,[],0);// [1]


/* Incorrect answer
    let i = 0;
    while(i < nums1.length){
        if(nums1[i] === 0){
            nums1.splice(i, 1);
        }
        else{
            ++i;
        }
    }
    let answ = nums1.concat(nums2);
    answ.sort((a,b) => a-b);
    return answ;
*/
/* right answer
var arr = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
var anotherArr = [ 1, 2, 3 ];

Array.prototype.splice.apply(arr, [arr.length-anotherArr.length, anotherArr.length].concat(anotherArr));

console.log(arr);

*/