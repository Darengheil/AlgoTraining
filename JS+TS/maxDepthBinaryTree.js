/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
//  */
/* my answer without recursion
var maxDepth = function(root) {
    return Math.log2(root.length+1);
};
*/

var maxDepth = function(root) {
    if (root === null){
        return 0;
    }
    let leftNodes = maxDepth(root.left);
    let rightNodes = maxDepth(root.right);

    if(rightNodes>leftNodes){
        return rightNodes + 1;
    }
    else{
        return leftNodes + 1;
    }
};

console.log(maxDepth([3,9,20,null,null,15,73,9,20,null,null,15,7,0,6]));
console.log(maxDepth([3,9,20,null,null,15,7]));
console.log(maxDepth([1,null,2]));
console.log(maxDepth([]));
console.log(maxDepth([0]));
