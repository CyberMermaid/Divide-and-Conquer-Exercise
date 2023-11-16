// TODO: Write a function called ***findRotatedIndex*** which accepts a 
// rotated array of sorted numbers and an integer. 
// The function should return the index of num in the array. 
// If the value is not found, return -1.
// Examples:
// findRotatedIndex([3,4,1,2],4) // 1
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
// findRotatedIndex([37,44,66,102,10,22],14) // -1
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1
// **Constraints**:
// Time Complexity: O(log N)

function findRotatedIndex(arr,num) {
 let leftIdx = 0;
 let rightIdx = arr.length -1;
 let indexOfNum = -1;

 while (leftIdx <= rightIdx){
    let middleIdx = Math.floor((leftIdx+rightIdx)/2);
    // return index of number if middle element equals num
    if (arr[middleIdx]===num){
        indexOfNum = middleIdx;
        return indexOfNum;
    }
    //if num is between leftIdx and the middle element, search left half of array.
    else if (arr[leftIdx] <num && arr[middleIdx]>num){
        rightIdx = middleIdx-1;
    } 
    // if num is greater than middle element, search right half of array
    else if (arr[middleIdx]<num){
       leftIdx = middleIdx+1; 
    }
 }
    return indexOfNum;
}

// module.exports = findRotatedIndex
export default findRotatedIndex
