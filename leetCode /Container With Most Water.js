/*You are given an integer array h of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, h[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

Example 1:


Input: h = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
Example 2:

Input: h = [1,1]
Output: 1*/

function maxArea(h) {
    /*let area = []
    for(let i = 0; i < h.length; i++){
        for(let j = h.length; j > i; j--){
            let a = (h[i] < h[j] ? h[i] : h[j]) * (j - i)
            area.push(a === +a ? a : 0)
        }
    }
    return area.sort((a,b) => b-a)[0]*/

    let result = 0,
    left = 0,
    right = h.length - 1;

    while (left < right) {
        let smallestSide = Math.min(h[left], h[right]);
        let area = (right - left) * smallestSide;
        if (area > result) result = area;
        if (h[left] < h[right]) left++;
        else right--;
    }

    return result;
}console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))