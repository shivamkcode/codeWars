/*Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]*/

function topKFrequent(nums,k){
    const counts = {}
    
    for (n of nums) counts[n] = (counts[n] || 0) + 1
    
    //return Object.keys(counts).sort((a, b) => counts[b] - counts[a]).slice(0, k)
    return counts
}console.log(topKFrequent([1,1,1,2,2,3,4],2))